const getHash = (path) => {
  if (path) {
    const hash = path.match(/#([a-z0-9]+)/gi);
    if (hash) {
      return hash[0];
    }
  }
};

export default getHash;
