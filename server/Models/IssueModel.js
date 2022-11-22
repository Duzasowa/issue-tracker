import mongoose from "mongoose";

const issueSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
    status: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
)

const Issue = mongoose.model("Issue", issueSchema)

export default Issue