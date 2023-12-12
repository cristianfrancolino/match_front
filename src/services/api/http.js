import Axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const http = Axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

if (import.meta.env.VITE_MOCK === 'true') {
  const mock = new MockAdapter(http, { delayResponse: 300 });

  // Account
  mock.onPost('/login', { email: 'test@test.com', password: 'test1234' }).reply(200);
  mock.onPost('/login').reply(401);
  mock.onPost('/recover_password').reply(200);
  mock.onPost('/register').reply(200);
  mock.onPost('/logout').reply(200);

  // Profile
  mock.onGet('/me').reply(200, {
    name: 'Test user',
    email: 'test@test.com',
    interests: [
      { id: 1, name: 'interest 1' },
      { id: 2, name: 'interest 2' },
      { id: 3, name: 'interest 3' },
    ],
  });
}

export default http;
