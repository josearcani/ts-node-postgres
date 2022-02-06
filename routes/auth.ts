import { Router } from 'express';
import { login, googleSignIn } from '../controllers/auth';

const router = Router();

router.post('/login', login);

export default router;