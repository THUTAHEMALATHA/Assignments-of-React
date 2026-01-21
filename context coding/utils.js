import fs from "fs";

export const readDB = () => JSON.parse(fs.readFileSync("./db.json"));
export const writeDB = (data) =>
    fs.writeFileSync("./db.json",JSON.stringify(data,null,2));

export const getTodayDate = () => new Date().toISOString().split("T")[0];