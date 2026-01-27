import { db } from "./firebase";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const todosCol = collection(db, "todos");

export const fetchTodosByUser = async (uid) => {
  const q = query(todosCol, where("uid", "==", uid));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
};

export const createTodo = (uid, title) =>
  addDoc(todosCol, { uid, title, completed: false, createdAt: Date.now() });

export const updateTodoTitle = (id, title) =>
  updateDoc(doc(db, "todos", id), { title });

export const toggleTodoStatus = (id, completed) =>
  updateDoc(doc(db, "todos", id), { completed });

export const deleteTodo = (id) => deleteDoc(doc(db, "todos", id));
