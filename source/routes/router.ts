import * as logger from "npmlog"
import { IncomingMessage, ServerResponse } from "http";
import { UserInterface } from "../data/interfaces";
import { getUsers } from "../controllers/users";

// Listener for the server
const requestListener = (request: IncomingMessage, response: ServerResponse) => {
    logger.info(request.method + "\t" + request.url)
    switch (request.method) {
        case "GET":
            switch (request.url) {
                // Get a list of Users endpoint
                case "/api/users":
                    return getUsers(response)
                    break
                case "/api/users/id":

                    break
                default:
                    // Error, resource not found 404
                    response.writeHead(404, { "Content-Type": "application/json" })
                    response.end(JSON.stringify( {sucess: false, messge: "Resource not found" }));
            }
            break
        case "PUT":

            break
        case "POST":
            break
        case "DELETE":
            break
    }
}

export { requestListener }