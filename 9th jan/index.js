import express from "express";
import fs from "fs/promises";

const app = express();
const PORT = 3000;
const DB_FILE = "./db.json";

app.use(express.json());

// Utility: read DB
async function readDB() {
  const data = await fs.readFile(DB_FILE, "utf-8");
  return JSON.parse(data);
}

// Utility: write DB
async function writeDB(data) {
  await fs.writeFile(DB_FILE, JSON.stringify(data, null, 2));
}

// -------------------- ROUTES --------------------

// GET all students
app.get("/students", async (req, res) => {
  try {
    const students = await readDB();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: "Failed to read students" });
  }
});

// POST add new student
app.post("/students", async (req, res) => {
  const { name, course, year } = req.body;

  if (!name || !course || !year) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const students = await readDB();

  const newStudent = {
    id: students.length ? students[students.length - 1].id + 1 : 1,
    name,
    course,
    year
  };

  students.push(newStudent);
  await writeDB(students);

  res.status(201).json({
    message: "Student added successfully",
    student: newStudent
  });
});

// PUT update student by id
app.put("/students", async (req, res) => {
  const { id, name, course, year } = req.body;

  if (!id) {
    return res.status(400).json({ error: "Student id is required" });
  }

  const students = await readDB();
  const index = students.findIndex(s => s.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Student not found" });
  }

  students[index] = {
    ...students[index],
    name: name ?? students[index].name,
    course: course ?? students[index].course,
    year: year ?? students[index].year
  };

  await writeDB(students);

  res.json({
    message: "Student updated successfully",
    student: students[index]
  });
});

// DELETE student by id
app.delete("/students/:id", async (req, res) => {
  const id = Number(req.params.id);

  const students = await readDB();
  const index = students.findIndex(s => s.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Student not found" });
  }

  const deletedStudent = students.splice(index, 1);
  await writeDB(students);

  res.json({
    message: "Student deleted successfully",
    student: deletedStudent[0]
  });
});

// -------------------- SERVER --------------------

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
