class Worker {
    async sendDeals() {
        
    }

    start() {
        setInterval(async () => {
            await this.sendDeals();
        }, process.env.INTERVAL * 1000);
    }
}

export default new Worker();