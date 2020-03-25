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
import deleteReservationRoute from './routes/reservations/deleteReservation'
import searchReservationRoute from './routes/reservations/searchReservations'
import fetchReservationRoute from './routes/reservations/fetchReservation'
import editReservationRoute from './routes/reservations/editReservation'
import createClientRoute from './routes/clients/createClient'
import deleteClientRoute from './routes/clients/deleteClient'
import searchClientRoute from './routes/clients/searchClients'
import fetchClientRoute from './routes/clients/fetchClient'
import editClientRoute from './routes/clients/editClient'
import importClientsRoute from './routes/clients/importClients'
import createServiceRoute from './routes/services/createService'
import deleteServiceRoute from './routes/services/deleteService'
import fetchServiceRoute from './routes/services/fetchService'
import editServiceRoute from './routes/services/editService'
import searchServiceRoute from './routes/services/searchService'
import createEmployeeRoute from './routes/employees/createEmployee'
import deleteEmployeeRoute from './routes/employees/deleteEmployee'
import fetchEmployeeRoute from './routes/employees/fetchEmployee'
import searchEmployeeRoute from './routes/employees/searchEmployees'
import changePasswordEmployeeRoute from './routes/employees/changePasswordEmployee'
import editEmployeeRoute from './routes/employees/editEmployee'

dotenv.config();   

const app = express()
const PORT = process.env.PORT || 5000;
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
app.use(deleteReservationRoute)
app.use(searchReservationRoute)
app.use(fetchReservationRoute)
app.use(editReservationRoute)
app.use(createClientRoute)
app.use(deleteClientRoute)
app.use(searchClientRoute)
app.use(fetchClientRoute)
app.use(editClientRoute)
app.use(importClientsRoute)
app.use(createServiceRoute)
app.use(deleteServiceRoute)
app.use(fetchServiceRoute)
app.use(editServiceRoute)
app.use(searchServiceRoute)
app.use(createEmployeeRoute)
app.use(deleteEmployeeRoute)
app.use(fetchEmployeeRoute)
app.use(searchEmployeeRoute)
app.use(changePasswordEmployeeRoute)
app.use(editEmployeeRoute)

app.listen(PORT, () => console.log('Now browse to localhost:5000'))