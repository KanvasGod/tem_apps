const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();

// libray
app.use(express.static(__dirname + '/public'));
app.use(express.json());

const Portfolio = require('./routes/portfolio');
app.use('/', Portfolio);

const dudes = require('./routes/dudes');
app.use('/dedicateddudes', dudes);

app.listen(PORT, () => {
    console.log(`Temp apps on port: ${PORT}`);
})