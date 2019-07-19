
import throttle from "lodash.throttle";

export const getTransferedImage = src => {
    const prefix = `${baseURL}/api/assets/images`;
    return `${prefix}?source=${src}`;
}

export const getBackground = src => {
    return `background-image: url(${getTransferedImage(src)}); background-size: cover;`
}


export const scrollHandler = function (
    fn,
    time = 500,
    distance = 100
) {
    return throttle(function (e) {
        const target = e.target
        if (target.scrollHeight - target.scrollTop - target.clientHeight < distance) {
            fn.apply(this)
        }

    }, time)
}