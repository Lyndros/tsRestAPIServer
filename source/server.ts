import http from "http"
import * as logger from "npmlog"
import { requestListener } from "./routes/router"
import { SERVER_PORT, SERVER_HOSTNAME } from "./config"

const myServer = http.createServer()
myServer.addListener("request", requestListener)

// Our server will listen hostname:port
myServer.listen(SERVER_PORT, SERVER_HOSTNAME, () => {
  logger.info(`Server is up and running on ${SERVER_HOSTNAME}:${SERVER_PORT}`)
});



