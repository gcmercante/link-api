import debug from "debug";

export default function Debug(name) {
    return debug('link-api').extend(name);
}