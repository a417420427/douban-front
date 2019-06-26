
import debounce from "lodash.debounce";

export const getTransferedImage = src => {
    const prefix = `${baseURL}/api/assets/images`;
    return `${prefix}?source=${src}`;
}

export const getBackground = src => {
    return `background-image: url(${getTransferedImage(src)}); background-size: cover;`
}


export const scrollHandler = (
    fn,
    time = 500,
    distance = 100
) => debounce(function (e) {
    const target = e.target
    if (target.scrollHeight - target.scrollTop - target.clientHeight < distance && !this.$loading.isLoaded) {
        // fn.apply(this)
        fn()
    }

}, time)