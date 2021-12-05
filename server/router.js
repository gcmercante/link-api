export default function Router(server) {
    server.get('/ping', (request, reply) => {
        reply.send({ result: 'pong' });
    });
}