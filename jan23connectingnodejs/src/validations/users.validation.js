export const validateUser = (req, res, next) => {
  if (!req.body) {
    return res.status(400).json({ error: 'Request body missing' })
  }

  const { name, email, password, age } = req.body

  if (!name || name.trim() === '') {
    return res.status(400).json({ error: 'Name is required' })
  }

  next()
}
