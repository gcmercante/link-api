import axios from "axios";
import sync from "../libs/sync.js";

export default function Router(server) {
    server.get('/ping', (request, reply) => {
        reply.send({ result: 'pong' });
    });

    server.post('/deals', async (request, reply) => {
        const { deal } = request.body;
        
        const { data } = await axios.post(url, deal);

        reply.send({ result: data });
    });

    server.get('/deals', async (request, reply) => {
        await sync.getDealsToBling();
    });
}