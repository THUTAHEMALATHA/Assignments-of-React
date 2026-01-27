import { supabase } from '../config/supabase.js';

export const createUser = async (user) => {
  return await supabase
    .from('users')
    .insert([user])
    .select()
    .single();
};

export const removeUser = async (userId) => {
  return await supabase
    .from('users')
    .delete()
    .eq('id', userId);
};
