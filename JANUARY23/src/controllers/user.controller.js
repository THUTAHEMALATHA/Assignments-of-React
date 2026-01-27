import { createUser, removeUser } from '../services/user.service.js';

export const signupUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: 'All fields required' });
  }

  const { data, error } = await createUser({ name, email, password });

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  return res.status(201).json(data);
};

export const deleteUser = async (req, res) => {
  const { userId } = req.params;

  const { error } = await removeUser(userId);

  if (error) {
    return res.status(400).json({ error: error.message });
  }

 return res.json({ message: 'User and todos deleted' });
};
