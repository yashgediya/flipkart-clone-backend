import User from "../model/user-schema.js";

export const userSignup = async (req, res, next) => {
  try {
    const user = req.body;
     const exist = await User.findOne({ userName: res.body?.userName });
    if (exist) {
      return res.status(401).json({ message: "Username already exist" });
    }
    const newUser = new User(user);
    await newUser.save();
    return res
      .status(200)
      .json({ message: "user successfully Register", data: user });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
