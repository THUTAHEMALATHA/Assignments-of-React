import fs from "fs";

const DB_PATH = "./src/db.json";

export const readTodos = () => {
  const data = JSON.parse(fs.readFileSync("./src/db.json", "utf-8"));

  return data.todos;
};

export const writeTodos = (todos) => {
  fs.writeFileSync(
    DB_PATH,
    JSON.stringify({ todos }, null, 2)
  );
};
