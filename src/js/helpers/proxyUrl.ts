export const proxyUrl = (url: string, proxy: string) => {
    return url.startsWith('http') && !url.includes('localhost') ? proxy + url : url
}