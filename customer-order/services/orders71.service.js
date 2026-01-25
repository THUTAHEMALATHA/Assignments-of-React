import { supabase } from "../config/supabase";

export const createOrder = async(payload) =>{
    const {data,error} = await supabase
    .from('orders71')
    .insert(payload)
    .select()
    .single();

  if (error)  throw error;
  return data; 
};

export const getOrdersByCustomer =async(customerId) =>{
    const {data,error} =await supabase
    .from('orders71')
    .select('*')
    .eq('customer_is', customerId);

  if(error) throw error;
  return data;  
}