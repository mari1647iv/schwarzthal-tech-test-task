import axios from 'axios';

class ITunesService {
  API_ENDPOINT = 'https://itunes.apple.com';

  async searchMusic(term: string) {
    axios.defaults.headers.common['accept'] = 'application/json';

    let response;
    response = await axios.get(`${this.API_ENDPOINT}/search?term=${term}`);
    return response.data.results;
  }
}

const itunesService = new ITunesService()

export default itunesService