import cors from 'cors'
import express, { Application } from 'express'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import { UserRoutes } from './app/modules/users/user.route'

const app: Application = express()

app.use(cors())

// parser used
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Application Routes
app.use('/api/v1/users/', UserRoutes)

// // testing
// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   // console.log(x)
//   // Promise.reject(new Error('hello man'))
//   // res.send('Working successfully!')
//   throw new Error('Testing Brother man')
//   // next('ore baba')
// })

// global error handler
app.use(globalErrorHandler)

export default app
