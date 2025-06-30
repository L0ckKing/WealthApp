import express from 'express';
import userRoutes from './routes/user.js';
import assetRoutes from './routes/asset.js';
import goalRoutes from './routes/goal.js';
import incomeRoutes from './routes/income.js';
import genericRoutes from './routes/generic.js';
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173"}));

app.use('/api/user', userRoutes);
app.use('/api/asset', assetRoutes);
app.use('/api/goal', goalRoutes);
app.use('/api/income', incomeRoutes);
app.use('/api', genericRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));