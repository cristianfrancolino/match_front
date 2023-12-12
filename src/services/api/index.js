import http from './http';

export default {
  async get(url) {
    try {
      const response = await http.get(url);
      return response;
    } catch (err) {
      return false;
    }
  },
  async post(url, send) {
    try {
      const response = await http.post(url, send);
      return response;
    } catch (err) {
      return false;
    }
  },
  async put(url, send) {
    try {
      const response = await http.put(url, send);
      return response;
    } catch (err) {
      return false;
    }
  },
  async delete(url) {
    try {
      await http.delete(url);
      return true;
    } catch (err) {
      return false;
    }
  },
};
