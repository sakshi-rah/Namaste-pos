import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    fullName: String,
    phone: String,
    email: String,
    password: String,
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
