import express from 'express';
import Joi from 'joi';
import { getUser, getUserID, addUser, updateUser, deleteRow } from '../index.js';

const router = express.Router();

router.get('/:id', async (req, res) => {
  const user = await getUser(req.params.id);
  res.send(user);
});

router.get('/email/:email', async (req, res) => {
  const user = await getUserID(req.params.email);
  res.send(user);
});

router.post('/', async (req, res) => {
  const schema = Joi.object({
    Email: Joi.string().min(1).required(),
    HashedPassword: Joi.string().min(1).required(),
    Networth: Joi.number().required()
  });

  const { error, value } = schema.validate(req.body);
  if (error) return res.status(400).send('Invalid inputs');

  const result = await addUser(value.Email, value.HashedPassword, value.Networth);
  res.send(result);
});

router.put('/', async (req, res) => {
  const schema = Joi.object({
    id: Joi.number().min(1).required(),
    Email: Joi.string().min(1).required(),
    HashedPassword: Joi.string().min(1).required(),
    Networth: Joi.number().required()
  });

  const { error, value } = schema.validate(req.body);
  if (error) return res.status(400).send('Invalid inputs');

  const result = await updateUser(value.id, value.Email, value.HashedPassword, value.Networth);
  res.send(result);
});

router.delete('/:id', async (req, res) => {
  const result = await deleteRow('users', req.params.id);
  res.send(result);
});

export default router;