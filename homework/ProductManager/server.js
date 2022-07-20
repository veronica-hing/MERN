const express = require('express');
const cors = require('cors');
const app = express();

require('./server/config/mongoose.config');
const port = 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

require('./server/routes/product.routes')(app);
app.listen(port, () => console.log(`listening on ${port} for product manager`));