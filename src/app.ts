import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import usersRouter from './app/modules/users/users.route'
const app: Application = express()

app.use(cors())

// parser used
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Application Routes

app.use('/api/v1/users/', usersRouter)

// testing
app.get('/', async (req: Request, res: Response) => {
  res.send('Working successfully!')
})

export default app
