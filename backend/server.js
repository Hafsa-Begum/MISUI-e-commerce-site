import express from "express";
import mongoose from 'mongoose';
import userRouter from './routers/userRouter.js'
import productRouter from './routers/productRouter.js'

const app = express();
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/e-commerce-site', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // usecreateindex: true,
    // useFindAndModify: false,
});

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);

app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`)
});