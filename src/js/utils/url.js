export const extractQueryString = (url) => {
    const matches = url.match(/\?.*$/);
    return matches ? matches[0] : '';
}

export const removeQueryString = (url) => {
    const matches = url.match(/^(.*)\?/);
    return matches ? matches[1] : url;
}