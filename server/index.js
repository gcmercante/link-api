import Fastify from "fastify";
import Router from './router.js';
import Debug from '../utils/debug.js';
import moment from "moment-timezone";

const { PORT, TIMEZONE } = process.env;
const log = Debug(`server:${moment().tz(TIMEZONE).format('DD-MM-YYYY HH:mm')}`);
const fastify = Fastify();

Router(fastify);

fastify.listen(PORT, (err, address) => {
    if(err) throw err;
    log(`Server is now listening on ${address}`);
})