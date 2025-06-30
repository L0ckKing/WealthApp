import express from 'express';
import { getTable, deleteRow } from '../index.js';

const router = express.Router();

router.get('/:table', async (req, res) => {
  const table = await getTable(req.params.table);
  res.send(table);
});

router.delete('/user/:table/:id', async (req, res) => {
  const result = await deleteRow(req.params.table, req.params.id);
  res.send(result);
});

export default router;