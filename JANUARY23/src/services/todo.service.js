import { supabase } from '../config/supabase.js';

export const addTodo = async ({ title, description, userId }) => {
  return await supabase
    .from('todos')
    .insert([
      {
        title,
        description,
        user_id: userId
      }
    ])
    .select()
    .single();
};

export const fetchUserTodos = async (userId) => {
  return await supabase
    .from('todos')
    .select('*')
    .eq('user_id', userId);
};

export const editTodo = async (todoId, updates) => {
  return await supabase
    .from('todos')
    .update(updates)
    .eq('id', todoId)
    .select();
    
};

export const removeTodo = async (todoId) => {
  return await supabase
    .from('todos')
    .delete()
    .eq('id', todoId);
};
