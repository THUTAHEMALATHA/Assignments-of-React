import express from 'express';
import { supabase } from '../config/supabase.js';

const router = express.Router();

router.get('/health', async (req, res) => {
  const { data, error } = await supabase
    .from('users21')
    .select('id')
    .limit(1);

  if (error) {
    return res.status(500).json({
      connected: false,
      error: error.message
    });
  }

  res.json({
    connected: true,
    message: 'Supabase DB connected'
  });
});

export default router;
