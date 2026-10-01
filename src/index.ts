import express from 'express';
import { pool } from './db';

const app = express();

app.get('/health', async (_req, res) => {
    const { rows } = await pool.query('SELECT NOW()');
    res.json({
        ok: true,
        timestamp: rows[0].now,
    })
});

const port = Number(process.env.PORT || 3000);
app.listen(port, () => {
    console.log(`API is running on port ${port}`);
});