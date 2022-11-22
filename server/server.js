import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/MongoDB.js";
import ImportData from "./DataImport.js";
import issueRoute from "./Routes/ProductRoutes.js";

dotenv.config();
connectDatabase();
const app = express();

//API
app.use("/api/import", ImportData);
app.use("/api/issues", issueRoute);


app.get("/", (req, res) => {
  res.send("API IS Running....")
});

const PORT = process.env.PORT || 5001

app.listen(PORT, console.log(`Server start in port ${PORT}`));