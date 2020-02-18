import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import graphqlHTTP from 'express-graphql'
import {makeExecutableSchema} from 'graphql-tools'

import { applyMiddleware } from 'graphql-middleware'
import { yupMiddleware } from 'graphql-yup-middleware'

import resolvers from './resolvers/index'
import typeDefs from './schema/index'
import models from './db/models'

import {getUserIdMiddleware} from './services/user/login'

import verifyRouter from './routes/auth/verify'
import resetPasswordRouter from './routes/auth/resetPassword'


const schema = makeExecutableSchema({
  	typeDefs,
  	resolvers,  
})

const schemaWithMiddleware = applyMiddleware(schema, yupMiddleware());

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(getUserIdMiddleware)
app.use('/graphql', graphqlHTTP( req => ({
	schema,
   context: {
      models,
      userId: req.userId,
   }, 
  	graphiql: true,
})))

app.use(verifyRouter)
app.use(resetPasswordRouter)

app.listen(5000, () => console.log('Now browse to localhost:5000/graphql'))