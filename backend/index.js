import express from 'express';
import cors from 'cors';
import mainRouter from './routes/index'
const app = express();
app.use(cors());

app.use('/api/v1',mainRouter);

app.get('/test',(req,res)=>{
    res.send("Active")
})


app.listen(3000, () => console.log('Server running on port 3000'));
