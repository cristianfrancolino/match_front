import MockAdapter from 'axios-mock-adapter';

export function loadMocks(http) {
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

  // Desires
  mock.onGet('/desires').reply(200, [
    {
        id: 1,
        name: "Tomar un café",
        description: "¡Buen día, amigos cafeteros! ☕ ¿Alguien se anima a compartir un delicioso café conmigo? 🌟 Estoy buscando compañía para disfrutar de una buena charla, risas y, por supuesto, un aroma irresistible a café recién hecho.",
        place: "Junín"
    },
    {
        id: 2,
        name: "Ir de pesca",
        description: "",
        place: "Lanús"
    },
    {
        id: 3,
        name: "Ir al cine",
        description: "",
        place: "Junín"
    },
  ]);
}
