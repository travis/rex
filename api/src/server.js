import dotenv from './dotenv'
import app, {apolloServer} from './app'

const {
  PORT = 8088
} = process.env;


app.listen(
  { port: PORT },
  () => console.log(`🚀 Server ready at http://localhost:${PORT}${apolloServer.graphqlPath}`),
)
