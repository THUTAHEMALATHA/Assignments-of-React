import { supabase } from '../config/supabase.js'

export const createUser = async (data) => {
  return await supabase.from('users23').insert(data).select().single()
}

export const getAllUsers = async () => {
  return await supabase.from('users23').select('*')
}

export const getUserById = async (id) => {
  return await supabase.from('users23').select('*').eq('id', id).single()
}

export const updateUser = async (id, data) => {
  return await supabase.from('users23').update(data).eq('id', id).select().single()
}

export const deleteUser = async (id) => {
  return await supabase.from('users23').delete().eq('id', id)
}

export const getUserByEmail = async (email) => {
  return await supabase.from('users23').select('*').eq('email', email).single()
}
