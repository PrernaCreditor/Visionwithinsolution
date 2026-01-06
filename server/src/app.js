import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contact.routes.js";

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

// ✅ FIX HERE
app.use("/api/support", contactRoutes);

export default app;
