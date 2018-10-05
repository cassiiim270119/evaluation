import axios from 'axios';

export default class Proxy {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  post(body) {
    return new Promise((resolve, reject) => {
      axios.post(this.endpoint, body)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
