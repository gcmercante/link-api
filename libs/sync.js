import axios from "axios";
import { json2xml } from "xml-js";
import debug from '../utils/debug.js';

const log = debug(`sync`);

class Sync {
    constructor() {
        this.pipedriveUrl = `${process.env.PIPEDRIVE_DOMAIN}/deals?api_token=${process.env.PIPEDRIVE_TOKEN}`;
        this.blingUrl = `${process.env.BLING_URL}`;
    }

    async getDealsToBling() {
        const promises = [];

        const { data } = await axios.get(this.pipedriveUrl);

        const requests = await this.buildRequest(data.data);
        requests.forEach(xml => {
            const request = {
                apikey: process.env.BLING_TOKEN,
                xml: encodeURIComponent(xml)
            };
            console.log(encodeURIComponent(xml));
            promises.push(axios.post(this.blingUrl, request));
        });

        const result = await Promise.all(promises);

        return result;
    }

    async buildRequest(data) {
        const requests = [];
        const options = {compact: true, ignoreComment: true, spaces: 4};

        data.forEach(deal => {
            const request = {
                pedido: {
                    cliente: {
                        nome: deal.user_id.name
                    },
                    itens: [
                        {
                            descricao: deal.title,
                            qtde: 1,
                            vlr_unit: deal.value
                        }
                    ]
                }
            };

            requests.push('<?xml version="1.0" encoding="UTF-8"?>\n' + json2xml(request, options));
        });
        
        return requests;
    }
}

export default new Sync();