import express from 'express';  // local express application
const server = express.Router();  // express router initiation

// Route to serve the HTML page with the motivational message
server.get('/motiv', (req, res) => {

    // Array of motivational messages
    const messages = [
        "Backend developer dont fall in love $$ || invovle in relationship.",
        "Believe in yourself and all that you are.",
        "Your only limit is your mind.",
        "Hardships often prepare ordinary people for an extraordinary destiny.",
        "Don't stop when you're tired. Stop when you're done.",
        "The ones who are crazy enough to think they can change the world, are the ones that do."
    ];
        // Function to get the message of the day
    function getMessageOfTheDay() {
        // Get the current day of the year
        const currentDay = new Date().getDate();
    
        // Rotate messages based on the current day to ensure a different message every day
        // The modulus operator ensures we don't exceed the index range of the array
        const messageIndex = currentDay % messages.length;
    
        // Return the message corresponding to the current day
        return messages[messageIndex];
        
    }
        // Get the message of the current day
        const messageOfTheDay = getMessageOfTheDay();
    console.log(messageOfTheDay);
        // Serve an HTML page with the message of the day
        res.send(`${messageOfTheDay}`);
    });
    
export default server;
