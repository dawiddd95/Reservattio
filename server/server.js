import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'

import createAccountRoute from './routes/auth/createAccount'
import loginManagerRoute from './routes/auth/loginManager'
import forgotPasswordRoute from './routes/auth/forgotPassword'
import resetPasswordRoute from './routes/auth/resetPassword'
import loggedAccountRoute from './routes/account/loggedAccount'
import createReservationRoute from './routes/reservations/createReservation'
import createClientRoute from './routes/clients/createClient'
import deleteClientRoute from './routes/clients/deleteClient'
import searchClientRoute from './routes/clients/searchClients'
import fetchClientRoute from './routes/clients/fetchClient'
import editClientRoute from './routes/clients/editClient'

import createServiceRoute from './routes/services/createService'
import deleteServiceRoute from './routes/services/deleteService'
import fetchServiceRoute from './routes/services/fetchService'
import editServiceRoute from './routes/services/editService'
import searchServiceRoute from './routes/services/searchService'

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
app.use(deleteClientRoute)
app.use(searchClientRoute)
app.use(fetchClientRoute)
app.use(editClientRoute)

app.use(createServiceRoute)
app.use(deleteServiceRoute)
app.use(fetchServiceRoute)
app.use(editServiceRoute)
app.use(searchServiceRoute)

app.listen(5000, () => console.log('Now browse to localhost:5000'))