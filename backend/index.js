import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import userRoute from "./routes/user.route.js"

const app = express();
dotenv.config();
const port = process.env.PORT;
const MONGO_URL = process.env.MONGO_URI;

//middleware
app.use(express.json());

//DB Code
try {
mongoose.connect(MONGO_URL);
console.log("Connected to MongoDB");
}
catch (error) {
console.log(error);
}

//defining routes
app.use("/api/users", userRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
});