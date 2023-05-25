import { Schema, model } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  friends: {
    type: [String],
    default: [],
  },
  thoughts: {
    type: [Schema.Types.ObjectId],
    ref: "Thought",
    default: [],
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
});

const User = model("User", userSchema);

export default User;
