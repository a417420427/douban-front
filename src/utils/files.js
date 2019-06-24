export const getTransferedImage = src => {
    const prefix = `${baseURL}/api/assets/images`;
    return `${prefix}?source=${src}`;
}

export const getBackground = src => {
    return `background-image: url(${getTransferedImage(src)}); background-size: cover;`
}