import { isString } from "./validator";

export const baseName = path => {
    if (!isString(path)) {
        return ''
    }
    if (path.indexOf('/') === -1) return path
    if (path.endsWith('/')) {
        path = path.substr(0, path.length - 1)
    }
    return path.substr(path.lastIndexOf('/') + 1)
}