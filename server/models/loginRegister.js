const mongoose = require("mongoose");
const { Schema } = mongoose;
const usersSchema = Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  image: {
    type: String,
  },
  birthday: {
    type: String,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
  isAdmin: { type: Boolean, default: false },
});

const Users = module.exports = mongoose.model("users", usersSchema);
module.exports = Users;
