import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contact.routes.js";

const app = express();

app.use(cors({
  origin: "*"
}));

app.use(express.json());

app.use("/api/contact", contactRoutes);

export default app;
