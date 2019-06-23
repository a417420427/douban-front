export const getTransferedImage = src => {
    const prefix = `http://${BaseUrl}:3000/api/assets/images`;
    return `${prefix}?source=${src}`;
}

export const getBackground = src => {
    return `background-image: url(${getTransferedImage(src)}); background-size: cover;`
}