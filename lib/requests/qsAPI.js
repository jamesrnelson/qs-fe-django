const baseURL = () => {
  const host = window.location.hostname
  if (host === "localhost" || host === "127.0.0.1") {
    return `http://localhost:8000`
  } else {
    return `https://polar-journey-23475.herokuapp.com`
  }

}

module.exports = {
  baseURL
}
