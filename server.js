const express = require('express');
const port = 5000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/gate', require('./routes/gateRoutes'));


app.listen(port, () => console.log(`Server started on port ${port}`));