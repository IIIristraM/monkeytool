import * as http from 'http';
import {URL} from 'url';

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
    req.pipe(http.request(new URL('http://queries-processor:3000/'), (cres) => {
        // passthrough status code and headers
        res.writeHead(cres.statusCode!);
        res.write('(Proxy) ')
        cres.pipe(res);
    }));
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
