import bcrypt from "bcrypt";
import { getUsersData } from "../database/usersAuthdata.js";
import { isSessionExist } from "../util/sessions.js";

export function validateSignupData(req, res, next) {
  let signupData = req.body;
  let name = signupData.name;
  let email = signupData.email;
  let password = signupData.password;

  console.log("Signup Data -> ", signupData);

  if (!name) {
    res.status(400).json({ message: "Name is required" });
    return;
  }
  if (!email) {
    res.status(400).json({ message: "Email is required" });
    return;
  }
  if (!password) {
    res.status(400).json({ message: "Password is required" });
    return;
  }

  let users = getUsersData();
  if (users.find((user) => user.email === signupData.email)) {
    res.status(400).json({ message: `email already exist` });
    return;
  }

  if (password.length < 8) {
    res.status(400).json({ message: `Password too short` });
    return;
  }
  if (!/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@])/.test(password)) {
    res.status(400).json({
      message: "Password must include uppercase, lowercase, number, and @",
    });
    return;
  }

  next();
}

export async function validateSigninData(req, res, next) {
  let signinData = req.body;
  let password = signinData.password;
  let email = signinData.email;

  if (!email && !password) {
    res.status(400).json({ message: `Email and Password are required` });
    return;
  }
  if (!email) {
    res.status(400).json({ message: "Email is required" });
    return;
  }
  if (!password) {
    res.status(400).json({ message: "Password is required" });
    return;
  }

  let users = getUsersData();
  if (!users.find((user) => user.email === email)) {
    res.status(400).json({ message: `email not found` });
    return;
  }
  next();
}
