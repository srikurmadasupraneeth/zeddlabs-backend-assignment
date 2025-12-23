const express = require('express');
const app = express();
const apiRoutes = require('./routes/api'); 
app.use(express.json());

//it is the main endpoint to check the server is running succesfully or not 
app.get('/', (req, res) => {
  res.status(200).json({ message: "Server is running successfully" });
});


app.use('/api', apiRoutes); 

// it handles if there are any wrong endpoints
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

const PORT = 4000; //it gives the server port 
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});