const authenticate = require("../../lib/tokens/authenticate");
const epxpress = require("express");
const router = epxpress.Router();
const createProfile = require("./createProfile");
const getProfile = require("./getProfile");
const updateProfile = require("./updateProflie");
const deleteProfile=require('./deleteProfile');

router.post("/createProfile", authenticate, createProfile);
router.get("/getProfile", authenticate, getProfile);
router.patch("/updateProfile", authenticate, updateProfile);
router.delete("/deleteProfile",authenticate,deleteProfile)
module.exports = router;
