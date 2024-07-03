import { Router } from 'express';
const router = Router();

import { register, login, logout } from '../controllers/authController.js';
import {
  validateRegisterInput,
  validateLoginInput,
} from '../middleware/validationMiddleware.js';

import rateLimiter from 'express-rate-limit';

const apiLimiter = rateLimiter({
  windowMs: 1000 * 60 * 15,
  max: 15,
  message: { msg: 'IP rate limit exceeded. Try again in 5 min.' },
});

router.route('/register').post(validateRegisterInput, register);
router.route('/login').post(apiLimiter, validateLoginInput, login);
router.route('/logout').get(logout);

export default router;
