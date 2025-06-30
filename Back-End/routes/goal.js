import express from 'express';
import Joi from 'joi';
import { getGoal, addGoal, updateGoal, deleteRow } from '../index.js';

const router = express.Router();

router.get('/:id', async (req, res) => {
  const goal = await getGoal(req.params.id);
  res.send(goal);
});

router.post('/', async (req, res) => {
  const schema = Joi.object({
    Category: Joi.string().min(1).required(),
    Worth: Joi.number().required(),
    Owner_id: Joi.number().required()
  });

  const { error, value } = schema.validate(req.body);
  if (error) return res.status(400).send('Invalid inputs');

  const result = await addGoal(value.Category, value.Worth, value.Owner_id);
  res.send(result);
});

router.put('/', async (req, res) => {
  const schema = Joi.object({
    id: Joi.number().required(),
    Category: Joi.string().min(1).required(),
    Worth: Joi.number().required(),
    Owner_id: Joi.number().required()
  });

  const { error, value } = schema.validate(req.body);
  if (error) return res.status(400).send('Invalid inputs');

  const result = await updateGoal(value.id, value.Category, value.Worth, value.Owner_id);
  res.send(result);
});

router.delete('/:id', async (req, res) => {
  const result = await deleteRow('goals', req.params.id);
  res.send(result);
});

export default router;