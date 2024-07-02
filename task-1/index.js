const express = require('express');
const ipMiddleware = require('./middleware/ipFunction');
const route = require('./routes/index');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use((req, res, next) => {
    console.log(req.ip);
    next();
})
// app.use(ipMiddleware);
app.use('/api', route)

app.listen(port, ()=>{
    console.log(`listening on ${port}`);
})
