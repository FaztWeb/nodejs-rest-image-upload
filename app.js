import express from "express";
import morgan from "morgan";
import cors from "cors";
// import fileUpload from "express-fileupload";

// routes
import productRoutes from "./routes/products.routes.js";
import indexRoutes from "./routes/index.routes.js";

// Initialization
const app = express();

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
// app.use(
//   fileUpload({
//     useTempFiles: true,
//     tempFileDir: "./uploads",
//   })
// );

// Routes
app.use(indexRoutes);
app.use("/products", productRoutes);

// Error Handling
app.use((req, res) => {
  res.status(404).send("Not Found");
});

export default app;
