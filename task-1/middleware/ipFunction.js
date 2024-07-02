

// Middleware to get client's IP address
const getClientIp = (req) => {
  const clientIp = requestIp.getClientIp(req);
  return clientIp.includes('::ffff:') ? clientIp.substring(7) : clientIp;
};
