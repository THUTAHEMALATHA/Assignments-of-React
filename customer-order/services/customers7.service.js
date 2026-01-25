import { supabase } from '../config/supabase.js';

export const createCustomer = async (payload) =>{
    const { data, error}  = await supabase
    .from('customers7')
    .insert(payload)
    .select()
    .single()


if(error) throw error;
return data;
};

export const getCustomers = async() =>{
    const { data, error} = await supabase
    .from('customers7')
    .select('*')

 if(error) throw error;
 return data;   
};

export const deleteCustomer = async(id) =>{
    const { data, error} = await supabase
    .from('customers7')
    .delete()
    .eq('id', id)
    
  if(error) throw error;
  return{ message : 'customer deleted'}  
};