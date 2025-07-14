import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filepath = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filepath);
const usersDataFile = path.join(__dirname, "./usersAuthdata.json");

let usersData = [];

function readUsersAuthData() {
  let usersDataJSON = fs.readFileSync(usersDataFile, "utf-8");
  usersData = JSON.parse(usersDataJSON);
}

function writeUsersAuthData() {
  let usersDataStringify = JSON.stringify(usersData, null, 2);
  fs.writeFileSync(usersDataFile, usersDataStringify, "utf-8");
}

export function getUsersData() {
  readUsersAuthData();
  return usersData;
}

export function writeUsersData(user) {
  usersData.push(user);
  writeUsersAuthData();
}
