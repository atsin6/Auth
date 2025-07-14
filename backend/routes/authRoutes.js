import Router from "express";
const router = Router();

import { nanoid } from "nanoid";
import bcrypt from "bcrypt";
import { getUsersData, writeUsersData } from "../database/usersAuthdata.js";
import {
  validateSignupData,
  validateSigninData,
} from "../middleware/validateSignupData.js";
import {
  isSessionExist,
  setLoggedInUser,
  setLoggedOutUser,
} from "../util/sessions.js";

router.get("/isworking", (req, res) => {
  res.send(`authRouter is working!`);
});

router.post("/signup", validateSignupData, async (req, res) => {
  let userSignupData = req.body;
  let email = userSignupData.email;

  userSignupData.username = email.split("@")[0];
  userSignupData.id = nanoid();

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(userSignupData.password, salt);
    userSignupData.password = hashedPassword;

    writeUsersData(userSignupData);
    res.status(200).json({ message: `User Registered`, data: userSignupData });
  } catch (err) {
    console.error(`Error hashing password`);
    res.status(500).json({ message: `Server Error` });
  }
});

router.post("/signin", validateSigninData, async (req, res) => {
  let { email, password } = req.body;

  try {
    let users = getUsersData();
    let user = users.find((user) => user.email === email);
    let userId = user.id;

    const isMatch = await bcrypt.compare(password, user.password);
    const sessionCheck = isSessionExist(user.id);

    if (isMatch && !sessionCheck) {
      setLoggedInUser(userId);
      res.status(200).json({ message: `You are successfully LoggedIn` });
      console.log(`${email} -> Signed in successful`);
    } else if (isMatch && sessionCheck) {
      res.status(200).json({ message: `You are LoggedIn` });
    } else {
      res.status(500).json({ message: `Password Invalid!` });
    }
  } catch (err) {
    res.status(500).json({ message: `SERVER ERROR` });
  }
});

router.post("/signout", async (req, res) => {
  const { userId } = req.body;
  setLoggedOutUser(user.id);
  res.status(200).json({ message: "Logged out successfully." });
});

export default router;
