import * as http from 'http';
import {URL} from 'url';
import { MongoClient  } from 'mongodb'

const hostname = '0.0.0.0';
const port = 3000;

const connectionStr = 'mongodb://root:example@mongo:27017/admin';
const client = new MongoClient(connectionStr);

async function main() {
    await client.connect()
    const dbres = await client.db().command({ping: 1})

    const server = http.createServer(async (req, res) => {
        req.pipe(http.request(new URL('http://queries-processor:3000/'), (cres) => {
            // passthrough status code and headers
            res.writeHead(cres.statusCode!);
            res.write(`(Mongo ${JSON.stringify(dbres)}) `)
            cres.pipe(res)
        }));
    });
    
    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });
}

main()
