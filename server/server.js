import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import graphqlHTTP from 'express-graphql'
import {makeExecutableSchema} from 'graphql-tools'
import dotenv from 'dotenv'


import { applyMiddleware } from 'graphql-middleware'
import { yupMiddleware } from 'graphql-yup-middleware'

//import resolvers from './resolvers/index'
import typeDefs from './schema/index'
import models from './db/models'

//import {getUserIdMiddleware} from './services/user/login'

import createAccountRoute from './routes/auth/createAccount'
import loginManagerRoute from './routes/auth/loginManager'
import forgotPasswordRoute from './routes/auth/forgotPassword'
import resetPasswordRoute from './routes/auth/resetPassword'


const schema = makeExecutableSchema({
  	typeDefs,
  	//resolvers,  
})

const schemaWithMiddleware = applyMiddleware(schema, yupMiddleware());

dotenv.config();   

const app = express()
app.use(cookieParser())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
//app.use(getUserIdMiddleware)
app.use('/graphql', graphqlHTTP( req => ({
	schema,
   context: {
      models,
      userId: req.userId,
   }, 
  	graphiql: true,
})))

app.use(createAccountRoute)
app.use(loginManagerRoute)
app.use(forgotPasswordRoute)
app.use(resetPasswordRoute)


app.listen(5000, () => console.log('Now browse to localhost:5000/graphql'))