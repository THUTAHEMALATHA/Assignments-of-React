import bcrypt from 'bcrypt'
import * as service from '../services/users.service.js'

export const createUser = async (req, res) => {
  try {
    const { name, email, password, age, role } = req.body

    const { data: existing } = await service.getUserByEmail(email)
    if (existing) {
      return res.status(409).json({ error: 'Email already exists' })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const { data, error } = await service.createUser({
      name,
      email,
      password: hashedPassword,
      age,
      role
    })

    if (error) throw error
    res.status(201).json(data)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

export const getUsers = async (req, res) => {
  const { data, error } = await service.getAllUsers()
  if (error) return res.status(500).json({ error: error.message })
  res.json(data)
}

export const getUser = async (req, res) => {
  const { id } = req.params

  const { data, error } = await service.getUserById(id)
  if (error || !data) {
    return res.status(404).json({ error: 'User not found' })
  }
  res.json(data)
}

export const updateUser = async (req, res) => {
  const { id } = req.params

  const { data, error } = await service.updateUser(id, req.body)
  if (error || !data) {
    return res.status(404).json({ error: 'User not found' })
  }
  res.json(data)
}

export const deleteUser = async (req, res) => {
  const { id } = req.params

  const { error } = await service.deleteUser(id)
  if (error) {
    return res.status(404).json({ error: 'User not found' })
  }
  res.json({ message: 'User deleted successfully' })
}
