import colors from "colors";
import session from "cookie-session";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import path from "path";
import secure from "ssl-express-www";

import connectDB from "./config/db.js";
import passport from "./config/passport.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import articleRoutes from "./routes/articleRoutes.js";
// Google
import authRoutes from "./routes/authRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import rateRoutes from "./routes/rateRoutes.js";
//  API
import stripe from "./routes/stripe.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import uploadRoutesProfilePicture from "./routes/uploadRoutesProfilePicture.js";
import userRoutes from "./routes/userRoutes.js";

// Hello
dotenv.config();

connectDB();

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

if (process.env.NODE_ENV === "production") {
  app.use(secure);
}

app.use(express.json());

// Session
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/products", productRoutes);
app.use("/api/articles", articleRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/rates", rateRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/stripe", stripe);
app.use("/api/uploadprofilepicture", uploadRoutesProfilePicture);
app.use("/api/auth", authRoutes);

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
    console.log("API is running....");
  });
}

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 2350;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
