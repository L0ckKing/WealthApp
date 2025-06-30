import express from 'express';
import Joi from 'joi';
import { getAsset, addAsset, updateAsset, deleteRow } from '../index.js';

const router = express.Router();

router.get('/:id', async (req, res) => {
  const asset = await getAsset(req.params.id);
  res.send(asset);
});

router.post('/', async (req, res) => {
  const schema = Joi.object({
    Category: Joi.string().min(1).required(),
    Worth: Joi.number().required(),
    Sold: Joi.number().required(),
    Owner_id: Joi.number().required()
  });

  const { error, value } = schema.validate(req.body);
  if (error) return res.status(400).send('Invalid inputs');

  const result = await addAsset(value.Category, value.Worth, value.Sold, value.Owner_id);
  res.send(result);
});

router.put('/', async (req, res) => {
  const schema = Joi.object({
    id: Joi.number().required(),
    Category: Joi.string().min(1).required(),
    Worth: Joi.number().required(),
    Sold: Joi.number().required(),
    Owner_id: Joi.number().required()
  });

  const { error, value } = schema.validate(req.body);
  if (error) return res.status(400).send('Invalid inputs');

  const result = await updateAsset(value.Category, value.Worth, value.Sold, value.Owner_id, value.id);
  res.send(result);
});

router.delete('/:id', async (req, res) => {
  const result = await deleteRow('assets', req.params.id);
  res.send(result);
});

export default router;