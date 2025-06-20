import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {type: String, unique: true},
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model('user', userSchema);
