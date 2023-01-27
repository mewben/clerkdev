export function isValidProxyUrl(key: string) {
  return key.startsWith('https://') || key.startsWith('/');
}

export function isProxyUrlRelative(key: string) {
  return key.startsWith('/');
}
