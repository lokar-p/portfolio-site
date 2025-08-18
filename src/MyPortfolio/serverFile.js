
import express from 'express';
import path from 'path';


const server = express();

const   PORT = process.env.PORT || 5000

server.use(express.static(path.join(__dirname , 'build')));


server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
  
  server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });