import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    role: {
      type: String,
      enum: ["Admin", "Trainer", "Member"],
      default: "Member",
    },
  },
  {
    collection: "Users",
  }
);

const Users = mongoose.models.Users || mongoose.model("Users", UserSchema);
export default Users;
