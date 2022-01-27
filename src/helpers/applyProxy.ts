export const applyProxy = (url: string, proxy: string | null = null) => {
  url = url.replace('http:', location.protocol)
  if (proxy && !url.startsWith('/')) url = proxy + url
  return url
}