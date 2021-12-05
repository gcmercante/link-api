import axios from "axios";

export default function Router(server) {
    server.get('/ping', (request, reply) => {
        reply.send({ result: 'pong' });
    });

    server.post('/addDeal', async (request, reply) => {
        const { deal } = request.body;
        const url = `${process.env.PIPEDRIVE_DOMAIN}/deals?api_token=${process.env.PIPEDRIVE_TOKEN}`;
        reply.send({ url, deal })
        // const result = await axios.post(url, deal);
        // reply.send({ result })
    });
}