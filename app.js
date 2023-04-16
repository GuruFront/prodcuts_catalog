const express = require('express');
const productRouter = require('./routes/product_routes')
const cors = require('cors');
const errorHandler = require('./middlewares/errorHandler');


const PORT = process.env.PORT || 8080

const app = express();

app.use(errorHandler);

app.use(cors({
    origin: `${process.env.DEVELOPMENT ?
        'http://localhost:3000' :
        'https://products-catalog-frontend.vercel.app/'}`
}));
app.use(express.json())
app.use('/api', productRouter)


app.listen(PORT, () => {
    console.log('Server started on port: ', PORT)
})
