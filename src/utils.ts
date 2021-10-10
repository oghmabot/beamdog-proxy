export const isValidIPAndPort = (addr: string): boolean => {
  if (addr.includes(':')) {
    const re = (
      /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
    );
    const [ip, port] = addr.split(':');
    return re.test(ip) && parseInt(port) <= 65535;
  }
  return false;
};

export const isValidBeamdogDbKey = (key: string): boolean => key.length === 44 && key.endsWith('=');

export const isValidBeamdogIdentifier = (id: string): boolean => (
  !!id && (isValidIPAndPort(id) || isValidBeamdogDbKey(id))
);
