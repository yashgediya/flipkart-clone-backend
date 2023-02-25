import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
    min: 5,
    max: 10,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    min: 5,
    max: 10,
  },
  userName: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    index: true,
    lowercasee: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercasee: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("user", userSchema);

export default User;
