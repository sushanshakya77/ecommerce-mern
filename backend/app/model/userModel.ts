import * as mongoose from "mongoose";

export interface IUser {
  fullName: string;
  username: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

const usersSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

usersSchema.set("timestamps", {
  createdAt: "createdAt",
  updatedAt: "updatedAt",
});

const User = mongoose.model("User", usersSchema);

export default User;
