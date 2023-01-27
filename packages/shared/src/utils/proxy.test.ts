import { isProxyUrlRelative, isValidProxyUrl } from './proxy';

describe.concurrent('isValidProxyUrl(key)', () => {
  it('returns true if the proxyUrl is valid', () => {
    expect(isValidProxyUrl('https://proxy-app.dev/api/__clerk')).toBe(true);
  });

  it('returns true if the proxyUrl is valid', () => {
    expect(isValidProxyUrl('/api/__clerk')).toBe(true);
  });

  it('returns false if the proxyUrl is invalid', () => {
    expect(isValidProxyUrl('proxy-app.dev/api/__clerk')).toBe(false);
  });
});

describe.concurrent('isProxyUrlRelative(key)', () => {
  it('returns true if the proxyUrl starts with `/`', () => {
    expect(isProxyUrlRelative('/api/__clerk')).toBe(true);
  });

  it('returns false if the proxyUrl does not starts with `/`', () => {
    expect(isProxyUrlRelative('proxy-app.dev/api/__clerk==')).toBe(false);
  });
});
