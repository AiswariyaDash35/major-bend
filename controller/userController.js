import express from "express";
import { validateToken } from "../middleware/validate.js";
import { loginUser, registerUser, getFarmers, getMillers, getUserDetails, updatePassword} from "../service/userService.js"

const router=express.Router();
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/farmers").get(getFarmers);
router.route("/millers").get(getMillers);
router.route("/getUserDetails/:userAddress").get(getUserDetails);
router.route("/forgot-password").put(updatePassword);

export {router};
