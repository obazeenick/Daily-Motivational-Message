import express from 'express'; // local express application
import daily from './collector/mSg.js'; // custom group 11

const server = express(); // express initiation 
const PORT = 3000; // port assign

//  middleware linking Home route

server.use('/message', daily) // use in importing group11.js

// 404 error middleware that end execution when all the above midleware couldnt meet the above condition
server.use((req, res) => {
    res.status(404).send('Not found, contact your host');
});

// Start the server
server.listen(PORT, () => {
console.log(`Nick Server running at http://localhost:${PORT}`);
});

