const {getAllUsers,getUserById,deleteUser,updateUserRole} = require('../Controllers/userController.js');
const router = require('express').Router();

router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.delete('/:id', deleteUser);
router.put('/:id/role', updateUserRole);

module.exports = router;