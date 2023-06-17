const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const useRouter = require("./routes/museum");
const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

dotenv.config();

useRouter(app);
const PORT = process.env.PORT || 8000;
const DB = process.env.DB_URL.replace("<password>", process.env.PASSWORD);
mongoose.set("strictQuery", true);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}/museums`);
      console.log("connect");
    });
  })
  .catch((err) => {
    console.log("error");
    console.log(err);
    process.exit();
  });