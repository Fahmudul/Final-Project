import { dbConnect } from '../../../Database/DbConnect';
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
// import { isStrongPassword } from "validator";
import Users from "../../../Models/UserModel";
export const POST = async (request: NextRequest) => {
  try {
    await dbConnect();
    const { email, password, name, photoUrl } = await request.json();
    console.log("from line 10", email, password, name, photoUrl);
    if (!email || !password || !name) {
      return NextResponse.json({
        status: 400,
        message: "Please fill all fields",
      });
    } else {
      const existingUser = await Users.findOne({ email });
      if (existingUser) {
        return NextResponse.json({
          message: "User already exists",
          status: 400,
        });
      }
      // } else if (!isStrongPassword(password)) {
      //   return NextResponse.json({
      //     message: "Password is not strong enough",
      //     status: 400,
      //   });
      // }
      else {
        const hashedPassword = await bcryptjs.hash(password, 10);
        const newUser = {
          name,
          email,
          password: hashedPassword,
        };
        await new Users(newUser).save();
        return NextResponse.json({
          status: 200,
          message: "User created successfully",
        });
      }
    }
    return NextResponse.json({});
  } catch (error: unknown) {
    return NextResponse.json({
      status: 500,
      message: error,
    });
  }
};
