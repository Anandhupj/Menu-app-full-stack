// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const dotenv = require('dotenv');
// // dotenv.config();
// const menuRoutes = require('./routes/menuRoutes')

// const app = express();
// app.use(cors());
// app.use(express.json());
// const port = 5000;

// app.use('/api',menuRoutes);



// mongoose
//   .connect('mongodb://localhost:27017/MTmenu', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.error("MongoDB connection error:", err));

// // app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
//   });
  
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const menuRoutes = require("./routes/menuRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// Use .env variables
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/MTmenu";

// Connect to MongoDB
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(" MongoDB connection error:", err));

// Routes
app.use("/api", menuRoutes);

// Start server
app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});
