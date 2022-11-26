import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/MongoDB.js";
import ImportData from "./DataImport.js";
import IssueRoute from "./Routes/IssueRoutes.js";

dotenv.config();
connectDatabase();
const app = express();
app.use(express.json());

//API
app.use("/api/import", ImportData);
app.use("/api/issues", IssueRoute);


app.get("/", (req, res) => {
  res.send("API IS Running....")
});

const PORT = process.env.PORT || 5001

app.listen(PORT, console.log(`Server start in port ${PORT}`));