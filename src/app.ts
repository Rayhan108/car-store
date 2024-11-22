import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { carRoute } from './app/confiq/modules/car/car.route'

const app :Application = express()
//parsers
app.use(express.json())
app.use(cors())
app.use('/api/cars', carRoute);
app.get('/', (req:Request, res:Response
) => {
  res.send({status:200,message:'Hello World!'})
})

export default app