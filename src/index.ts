import express, { Express, Request, Response } from 'express';
import mongoose from 'mongoose';
import tenantsRouter from './routes/tenants';
import rulesRouter from './routes/rules';
import telemetryRouter from './routes/telemetry';

const app: Express = express();
const port = 3000;

app.use(express.json());

app.use('/tenants', tenantsRouter);
app.use('/rules', rulesRouter);
app.use('/telemetry', telemetryRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Alarynt Core API');
});

const mongoUri = 'mongodb://localhost:27017/alarynt-core';

mongoose.connect(mongoUri)
  .then(() => console.log('MongoDB connected'))
  .catch((err: any) => console.error('MongoDB connection error:', err));


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
}); 