export const isFunction = prop => typeof prop === "function" && typeof prop.nodeType !== "number";

export const isString = prop => typeof prop === 'string'

export const isWindow = prop => prop !== null && prop === prop.window

export const isNumberic = prop => (typeof prop === 'number' || typeof prop === 'string') && !isNaN(Number(prop))

export const isEmptyObj = obj => {
    for (let k in obj) {
        return false
    }
    return true
}