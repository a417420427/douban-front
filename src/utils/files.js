export const getTransferedImage = src => {
    const prefix = `${BaseUrl}/assets/images`;
    return `${prefix}?source=${src}`;
}

export const getBackground = src => {
    return `background-image: url(${getTransferedImage(src)}); background-size: cover;`
}