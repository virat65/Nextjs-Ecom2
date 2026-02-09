import mongoose from "mongoose";

const databaseConnections = async () => {
  try {
    await mongoose.connect("mongodb+srv://nextjsecom:nextjsecom@cluster0.gholrh3.mongodb.net/nextjstwo");
    console.log("Db connected");
  } catch (error) {
    console.log("Error in dbConnection", error);
  }
};
export default databaseConnections;
