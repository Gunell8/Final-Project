const express = require("express");
const {
  getMuseumsDataById,
  getMuseumData,
  deleteMuseumInfo,
  createNewMuseumInfo,
  updateMuseumsData,
} = require("../controllers/museum");
const { register, login, logout } = require("../controllers/loginRegister");
const {
  getUsersData,
  getUsersDataById,
  updateUsersData,
  deleteUserInfo,
} = require("../controllers/users");
const {
  getContactsData,
  deleteContactInfo,
  getContactsDataById,
  createNewContactInfo,
} = require("../controllers/contact");
const router = express.Router();
function useRouter(router) {
  router.get("/museums", getMuseumData);
  router.get("/contact", getContactsData);
  router.get("/users", getUsersData);
  router.get("/museums/:id", getMuseumsDataById);
  router.get("/contact/:id", getContactsDataById);
  router.get("/users/:id", getUsersDataById);
  router.delete("/museums/:id", deleteMuseumInfo);
  router.delete("/contact/:id", deleteContactInfo);
  router.delete("/users/:id", deleteUserInfo);
  router.post("/museums", createNewMuseumInfo);
  router.post("/contact", createNewContactInfo);
  router.put("/museums/:id", updateMuseumsData);
  router.put("/users/:id", updateUsersData);
  router.post("/register", register);
  router.post("/login", login);
  router.post("/logout", logout);
}

module.exports = useRouter;
