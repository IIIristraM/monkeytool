import * as http from 'http';
import { createClient } from 'redis';

const client = createClient({
    url: 'redis://redis:6379'
});

const hostname = '0.0.0.0';
const port = 3000;

async function main() {
    await client.connect();
    await client.set('key', 'value');
    const value = await client.get('key');
    console.log('REDIS', value)

    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Queries processor');
    });

    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });
}

main();
