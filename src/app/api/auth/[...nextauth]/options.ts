import bcryptjs from "bcryptjs";
import { NextAuthOptions } from "next-auth";
import { dbConnect } from "@/Database/DbConnect";
import GoogleProvider, { GoogleProfile } from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import Users from "@/Models/UserModel";
interface Credentials {
  email: string;
  password: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  image: string;
  role: string;
}
export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" },
      },
      async authorize(
        credentials: Credentials | undefined
      ): Promise<User | null> {
        if (!credentials) {
          throw new Error("Credentials not found");
        }
        await dbConnect();
        try {
          console.log("from line 26", credentials);
          const email = credentials.email;
          const password = credentials.password;
          const user = await Users.findOne({ email });
          if (!user) {
            throw new Error("User not found");
          }
          const checkPassword = await bcryptjs.compare(password, user.password);
          if (!checkPassword) {
            throw new Error("Incorrect password");
          }
          console.log("from line 37", user);
          return user;
        } catch (error: unknown) {
          throw new Error(error as string);
        }
      },
    }),
    GoogleProvider({
      profile(profile: GoogleProfile) {
        console.log("from line 55", profile);
        return {
          ...profile,
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
          role: profile?.role,
        };
      },

      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: "/sign-in",
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      await dbConnect();
      console.log("From line 51", user);
      console.log("From line 52", account);
      console.log("From line 53", profile);
      const userExist = await Users.findOne({ email: user?.email });
      console.log("from line 55", userExist);
      if (!userExist) {
        const newUser = new Users({
          name: user?.name,
          email: user?.email,
        });
        await newUser.save();
        if (!user.role) {
          user.role = "Member";
        }
      } else {
        user.role = userExist.role;
      }
      console.log("from line 63", userExist);
      return true;
    },
    async jwt({ user, token }) {
      console.log("from line 68", user);
      if (user) {
        token.name = user.name;
        token.email = user.email;
        token.role = user.role;
        token.image = user.image;
      }
      console.log("from line 74", token);
      return token;
    },
    async session({ session, token }) {
      console.log("from line 78", session);
      console.log("from line 79", token);
      if (token && session.user) {
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.role = token.role;

        if (typeof token.image === "string") {
          session.user.image = token.image;
        }
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
