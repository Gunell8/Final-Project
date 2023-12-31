const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const stripe=require("./routes/stripe")
const dotenv = require("dotenv");
const useRouter = require("./routes/museum");
const app = express();

app.use(cookieParser());
app.use(express.json({ limit: "50mb" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
dotenv.config();

let whitelist = ["http://localhost:3000" /** other domains if any */];
let corsOptions = {
  credentials: true,
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

// app.use(cors());
app.use(cors(corsOptions));
app.use("/stripe", stripe);
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
