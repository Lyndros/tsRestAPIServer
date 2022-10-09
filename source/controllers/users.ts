// In order to access our data store (users.json)
import fs from "fs"
import * as logger from "npmlog"

// To handle requests and responses
import { IncomingMessage, ServerResponse } from "http";

// Data structure
// import { User } from "../data/interfaces";

const getUsers = (response: ServerResponse) => {
   return fs.readFile(__dirname+"/../data/datastore.json", "utf8", 
    (err, data) => {
      if (err) {
        response.writeHead(500, { "Content-Type": "application/json" })
        response.end(JSON.stringify({ success: false, error: err } ))
      }
      else{
        // no error, send the data
        response.writeHead(200, { "Content-Type": "application/json" })
        response.end(JSON.stringify({ success: true, message: JSON.parse(data) }))
      }
    })
}

export { getUsers }





