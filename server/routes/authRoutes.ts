import express from 'express';
import { registerUser, loginUser } from '../controllers/authControllers';
import User from '../models/User'; 

const router = express?.Router();

// Existing routes
router.post('/register', registerUser);
router.post('/login', loginUser);


router.get('/users', async (req, res) => {
  try {
    const users = await User?.find({}, 'name age email gender'); 
    res.json(users);
  } catch (err) {
    res?.status(500)?.json({ message: 'Server error while fetching users' });
  }
});

export default router;
