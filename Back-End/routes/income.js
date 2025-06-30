import express from 'express';
import Joi from 'joi';
import { getIncome, addIncome, updateIncome, deleteRow } from '../index.js';

const router = express.Router();

router.get('/:id', async (req, res) => {
  const income = await getIncome(req.params.id);
  res.send(income);
});

router.post('/', async (req, res) => {
  const schema = Joi.object({
    Category: Joi.string().min(1).required(),
    Amount: Joi.number().required(),
    IncomeInterval: Joi.string().required(),
    Owner_id: Joi.number().required()
  });

  const { error, value } = schema.validate(req.body);
  if (error) return res.status(400).send('Invalid inputs');

  const result = await addIncome(value.Category, value.Amount, value.IncomeInterval, value.Owner_id);
  res.send(result);
});

router.put('/', async (req, res) => {
  const schema = Joi.object({
    id: Joi.number().required(),
    Category: Joi.string().min(1).required(),
    Amount: Joi.number().required(),
    IncomeInterval: Joi.string().required(),
    Owner_id: Joi.number().required()
  });

  const { error, value } = schema.validate(req.body);
  if (error) return res.status(400).send('Invalid inputs');

  const result = await updateIncome(value.Category, value.Amount, value.IncomeInterval, value.Owner_id, value.id);
  res.send(result);
});

router.delete('/:id', async (req, res) => {
  const result = await deleteRow('income', req.params.id);
  res.send(result);
});

export default router;