import { Schema, model } from "mongoose";

const thoughtSchema = new Schema({
  thoughtId: {
    type: Number,
    required: true,
  },
  thoughtBody: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Thought = model("Thought", thoughtSchema);

export default Thought;
