import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

let __filepath = fileURLToPath(import.meta.url);
let __dirname = path.dirname(__filepath);
let sessionsDataFile = path.join(__dirname, "./sessions.json");

export function isSessionExist(userId) {
  const sessions = JSON.parse(fs.readFileSync(sessionsDataFile, "utf-8"));
  if (sessions.find((session) => session.userId === userId)) {
    return true;
  }
  return false;
}

export function setLoggedInUser(userId) {
  const session = {
    userId: userId,
  };
  let sessions = JSON.parse(fs.readFileSync(sessionsDataFile, "utf-8"));
  sessions.push(session);
  fs.writeFileSync(sessionsDataFile, JSON.stringify(sessions, null, 2));
  sessions = JSON.parse(fs.readFileSync(sessionsDataFile, "utf-8"));
}

export function setLoggedOutUser(userId) {
  sessions = JSON.parse(fs.readFileSync(sessionsDataFile, "utf-8"));
  const idx = sessions.findIdx((session) => session.userId === userId);
  sessions.splice(idx, 1);
  fs.writeFileSync(sessionsDataFile, sessions, "utf-8");
}
