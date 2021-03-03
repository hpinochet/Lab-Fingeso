const express = require('express');
const app = express();
const cors = require('cors');

require('./database');

app.use(cors()); //antes de llegar a las rutas se procea con 'cors'

app.use('/', require('./routes/index'));

app.listen(3000, () => {
    console.log('Server on port 3000')
});