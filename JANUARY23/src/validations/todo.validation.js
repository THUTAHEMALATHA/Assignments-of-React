export const validateCreateTodo = (data) => {
  const { title, userId } = data;

  if (!title) return 'Title is required';
  if (!userId) return 'User ID is required';

  return null;
};

export const validateUpdateTodo = (data) => {
  if (
    data.title === undefined &&
    data.description === undefined &&
    data.is_completed === undefined
  ) {
    return 'At least one field must be updated';
  }

  return null;
};
