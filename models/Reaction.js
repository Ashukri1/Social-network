const {schema, model} = require('mongoose');

import { Schema, model } from "mongoose";

const reactionSchema = new Schema({
  reactionId: {
    type: Number,
    required: true,
  },
  reactionBody: {
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

const Reaction = model("Reaction", reactionSchema);

export default Reaction;
