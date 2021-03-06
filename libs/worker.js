import debug from '../utils/debug.js';
import sync from './sync.js';

const log = debug('worker');

class Worker {
    async sendDeals() {
        log('ok');
    }

    start() {
        setInterval(async () => {
            await this.sendDeals();
        }, process.env.INTERVAL * 1000);
    }
}

export default new Worker();