import debug from "debug";
import moment from "moment-timezone";

export default function Debug(name) {
    return debug('link-api').extend(`${name}:${moment().tz(process.env.TIMEZONE).format('DD/MM/YYYY HH:mm')}`);
}