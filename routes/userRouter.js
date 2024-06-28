import { Router } from 'express';
import {
  getCurrentUser,
  getApplicationStats,
  updateUser,
} from '../controllers/userController.js';
import { validateUpdateUserInput } from '../middleware/validationMiddleware.js';
import {
  authorizePermissions,
  checkForTestUser,
} from '../middleware/authMiddleware.js';
import upload from '../middleware/multerMiddleware.js';
const router = Router();

router.route('/current-user').get(getCurrentUser);
router
  .route('/admin/app-stats')
  .get([authorizePermissions('admin'), getApplicationStats]);
router
  .route('/update-user')
  .patch(
    checkForTestUser,
    upload.single('avatar'),
    validateUpdateUserInput,
    updateUser
  );

export default router;
