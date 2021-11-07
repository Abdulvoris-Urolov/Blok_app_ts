import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  email: string;
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
}

const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
    },
    firstName: String,
    lastName: String,
    userName: {
      type: String,
      unique: true,
    },
    password: String,
  },
  {
    versionKey: false,
    timestamps: true,
    toObject: {
      virtuals: true,
    },
    toJSON: {
      virtuals: true,
    },
  }
);

export default mongoose.model<IUser>("User", UserSchema)
