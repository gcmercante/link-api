import Fastify from "fastify";
import router from './router.js';
import debug from '../utils/debug.js';

const log = debug(`server`);
const fastify = Fastify();

router(fastify);

fastify.listen(process.env.PORT, (err, address) => {
    if(err) throw err;
    log(`Server is now listening on ${address}`);
})