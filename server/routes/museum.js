const express = require("express");
const {
  getMuseumsDataById,
  getMuseumData,
  deleteMuseumInfo,
  createNewMuseumInfo,
  updateMuseumsData,
} = require("../controllers/museum");
const { register, login } = require("../controllers/loginRegister");
const {
  getUsersData,
  getUsersDataById,
  updateUsersData,
  deleteUserInfo,
} = require("../controllers/users");
const router = express.Router();
function useRouter(router) {
  router.get("/museums", getMuseumData);
  router.get("/users", getUsersData);
  router.get("/museums/:id", getMuseumsDataById);
  router.get("/users/:id", getUsersDataById);
  router.delete("/museums/:id", deleteMuseumInfo);
  router.delete("/users/:id", deleteUserInfo);
  router.post("/museums", createNewMuseumInfo);
  router.put("/museums/:id", updateMuseumsData);
  router.put("/users/:id", updateUsersData);
  router.post("/register", register);
  router.post("/login", login);
}

module.exports = useRouter;
