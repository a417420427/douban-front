export const toArray = prop => [].slice.call(prop)

export const objectToArray = prop => {
    let instance = []
    for (let k in prop) {
        instance.push(prop[k])
    }
    return instance
}

export const arrayToObject = prop => {
    const instance = {}
    prop.forEach((v, index) => {
        instance[index] = v
    })
    return instance
}



export const compose = (...funcs) => {
    if (funcs.length === 0) {
        return arg => arg
    }

    if (funcs.length === 1) {
        return funcs[0]
    }
    return funcs.reduce((a, b) => (...args) => a(b(...args)))
}


export const createCache = () => {
    let keys = []
    return (key, value) => {
        if (value) {
            keys.push({ [key]: value })
        }
    }
}

