// backend/index.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const subcategoriesRoutes = require("./routes/subcategories");
const auth = require("./middleware/auth");
const categoriesRoute = require("./routes/categories");
const companiesRoutes = require("./routes/companies");
require('dotenv').config();
const path = require('path'); 
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use("/api/companies", companiesRoutes);
app.use("/api", authRoutes);
app.use("/main", categoriesRoute);
app.use("/api/subcategories", subcategoriesRoutes);

app.get("/api/protected", auth, (req, res) => {
  res.json({ msg: "This is a protected route", user: req.user });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
