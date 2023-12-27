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
        location: {
          name: "Junín",
          lat: -34.578087,
          long: -60.958526
        }
    },
    {
        id: 2,
        name: "Ir de pesca",
        description: "¡Saludos, amantes de la pesca! 🎣 ¿Quién se apunta a compartir una jornada tranquila junto al agua? 🌊 Estoy en busca de compañeros para disfrutar de la naturaleza, charlas relajadas y, por supuesto, ¡la emoción de capturar esos peces inolvidables! ¿Quién dice sí a una aventura de pesca?",
        location: {
          name: "Manchester",
          lat: 53.474953,
          long: -2.269848
        }
    },
    {
        id: 3,
        name: "Ir al cine",
        description: "¡Hola, cinéfilos! 🎬 ¿Alguien está listo para sumarse a una experiencia cinematográfica llena de diversión? 🍿 Estoy buscando compañía para disfrutar de una buena película, compartir risas y comentar nuestras impresiones después. ¿Quién se anima a un plan de cine que incluya grandes historias y palomitas de maíz?",
        location: {
          name: "Lanús",
          lat: -34.707114,
          long: -58.386091
        }
    },
  ]);
}
