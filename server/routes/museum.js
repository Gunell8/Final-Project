const express=require("express");
const { getMuseumsDataById, getMuseumData, deleteMuseumInfo, createNewMuseumInfo, updateMuseumsData } = require("../controllers/museum");
const router = express.Router();
function useRouter(router) {
  router.get("/museums", getMuseumData);
  router.get("/museums/:id", getMuseumsDataById);
  router.delete("/museums/:id", deleteMuseumInfo);
  router.post("/museums", createNewMuseumInfo);
  router.put("/museums/:id", updateMuseumsData);
}

module.exports = useRouter;