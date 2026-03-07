// server.js
import 'dotenv/config'; 
import { createServer } from './app.js';

const server = createServer();
const port = process.env.PORT;

// Start server AFTER attempting to connect to the database
server.listen(port, () => {
  console.log(`🚀 API running on http://localhost:${port}`);
});