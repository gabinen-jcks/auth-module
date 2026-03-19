module.exports = function validateToken(token) {
  // Basic JWT format validation: three base64url-encoded parts separated by dots
  if (typeof token !== 'string') return false;
  const jwtRegex = /^[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+$/;
  return jwtRegex.test(token);
};