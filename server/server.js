import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'

import createAccountRoute from './routes/auth/createAccount'
import loginManagerRoute from './routes/auth/loginManager'
import forgotPasswordRoute from './routes/auth/forgotPassword'
import resetPasswordRoute from './routes/auth/resetPassword'
import loggedAccountRoute from './routes/account/loggedAccount';
import createReservationRoute from './routes/reservations/createReservation'
import createClientRoute from './routes/clients/createClient'
import createServiceRoute from './routes/services/createService'


dotenv.config();   

const app = express()
app.use(cookieParser())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())


app.use(createAccountRoute)
app.use(loginManagerRoute)
app.use(forgotPasswordRoute)
app.use(resetPasswordRoute)
app.use(loggedAccountRoute)
app.use(createReservationRoute)
app.use(createClientRoute)
app.use(createServiceRoute)

app.listen(5000, () => console.log('Now browse to localhost:5000'))