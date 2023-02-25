import mongoose from "mongoose";

const connection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/flipkart", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database connected succesfully");
  } catch (error) {
    console.log("Error while connection the database", error.message);
  }
};

export default connection;
