const router = require('express').Router();
const {
  getUser,
  updateUser,
  createUser,
  deleteUser
} = require('./controllers/userController');

router.get('/users/:id', async (req, res, next) => {
  if (!req.params.id) return res.status(404).json(`No users' id`);
  try {
    const user = await getUser(req.params.id);
    return res.status(200).json(user);
  } catch (err) {
    return res.status(404).json(`Error finding user ${err}`);
  }
});

router.put('/users/:id', async (req, res, next) => {
  if (!req.params.id) return res.status(404).json(`No users' id`);
  try {
    await updateUser(req.params.id, req.body);
    return res.status(200).json(`User updated`);
  } catch (err) {
    return res.status(404).json(`Error updating user ${err}`);
  }
});

router.post('/users', async (req, res, next) => {
  if (Object.entries(req.body).length === 0)
    return res.status(404).json(`No entries provided for creating a user`);
  try {
    await createUser(req.body);
    return res.status(200).json(`User created`);
  } catch (err) {
    return res.status(404).json(`Error creating user ${err}`);
  }
});

router.delete('/users/:id', async (req, res, next) => {
  if (!req.params.id) return res.status(404).json(`No users' id`);
  try {
    await deleteUser(req.params.id);
    return res.status(200).json('User deleted');
  } catch (err) {
    return res.status(404).json(`Error deleting user ${err}`);
  }
});

module.exports = router;
