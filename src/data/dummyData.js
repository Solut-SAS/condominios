const towers = [
  {
    id: 1,
    name: "Torre 1",
    floors: 10,
    annotations: [
      {
        id: 1,
        reportBy: 123,
        personName: "Andrés Maya",
        home: "torre 2 903",
        content: "Se dañó el ascensor de la torre",
        status: "pending",
      },
      {
        id: 2,
        reportBy: 123,
        personName: "Andrés Maya",
        home: "torre 2 903",
        content: "Sin energía",
        status: "pending",
      },
      {
        id: 3,
        reportBy: 123,
        personName: "Andrés Maya",
        home: "torre 2 905",
        content: "Encontré mi casa sin pertenencias",
        status: "pending",
      },
      
    ],
    occupationPercent: 80,
  },
  {
    id: 2,
    name: "Torre 2",
    floors: 10,
    occupationPercent: 10,
  },
  {
    id: 3,
    name: "Torre 3",
    floors: 10,
  },
  {
    id: 4,
    name: "Torre 4",
    floors: 10,
    occupationPercent: 100,
  },
  {
    id: 5,
    name: "Torre 5",
    floors: 10,
    occupationPercent: 100,
  },
  {
    id: 6,
    name: "Torre 6",
    floors: 10,
    occupationPercent: 100,
  },
  {
    id: 7,
    name: "Torre 7",
    floors: 10,
    occupationPercent: 100,
  },
  {
    id: 8,
    name: "Torre 8",
    floors: 8,
    occupationPercent: 100,
  },

  {
    id: 9,
    name: "Torre 9",
    floors: 8,
    occupationPercent: 100,
  },
];

const blocks = [
  {
    id: 1,
    name: "Manzana 1",
    homes: 10,
  },
  {
    id: 2,
    name: "Manzana 2",
    homes: 5,
  },
  {
    id: 3,
    name: "Manzana 3",
    homes: 7,
  },
];

const structure = { towers, blocks };

const commerce = {
  id: 1,
  name: "Torres de santa Marta",
  document: "123456789",
  address: "cra 8a 15-107",
  city: "Dosquebradas",
};

const commerces = [
  {
    id: 1,
    name: "Torres de santa Marta",
    document: "123456789",
    cellphone: "3136962979",
    address: "Cra 8a 15-107",
    city: "Dosquebradas",
  },
  {
    id: 2,
    name: "Reservas de la pradera",
    document: "654346",
    cellphone: "3136962979",
    address: "Cra 8a 15-107",
    city: "Dosquebradas",
  },
];

const floor = [
  {
    id: 1,
    name: "Apartamento 1001",
    status: "Ocupada",
    inquilino: "Andrés Maya",
    vehicles: ["HRA63F", "UXV71C"],
  },
  {
    id: 2,
    name: "Apartamento 1002",
    status: "Ocupada",
    inquilino: "Andrés Maya",
    vehicles: ["HRA63F", "UXV71C"],
  },
  {
    id: 3,
    name: "Apartamento 1003",
    status: "Ocupada",
    inquilino: "Andrés Maya",
    vehicles: ["HRA63F", "UXV71C"],
  },
  {
    id: 4,
    name: "Apartamento 1004",
    status: "En arriendo",
  },
  {
    id: 5,
    name: "Apartamento 1005",
    status: "Desocupado",
  },
];

const guard_annotations = [
  {
    id: 1,
    content: "Se encuentra la lámpara de la cancha averiada",
    date: "2023-01-22",
    time: "18:55",
    reportedBy: "Guarda Maya",
  },
  {
    id: 2,
    content: "Se encontró una bicicleta dentro de la piscina",
    date: "2023-01-22",
    time: "10:00",
    reportedBy: "Guarda Maya",
  },
  {
    id: 3,
    content: "Se encontró una bicicleta dentro de la piscina",
    date: "2023-01-22",
    time: "10:00",
    reportedBy: "Guarda Maya",
  },
  {
    id: 4,
    content: "Se encontró una bicicleta dentro de la piscina",
    date: "2023-01-22",
    time: "10:00",
    reportedBy: "Guarda Maya",
  },
  {
    id: 5,
    content: "Se encontró una bicicleta dentro de la piscina",
    date: "2023-01-22",
    time: "10:00",
    reportedBy: "Guarda Maya",
  },
];

const guests = {
  headers: ["Id", "Nombre", "Estado", "Acción"],
  data: [
    {
      id: 1,
      guestName: "Andres Maya",
      status: "Activo",
    },

    {
      id: 2,
      guestName: "Julián Salgado",
      status: "Activo",
    },
    {
      id: 3,
      guestName: "Jorge Sánchez",
      status: "Activo",
    },
    {
      id: 4,
      guestName: "Ana María",
      status: "Activo",
    },
  ],
};

const invitations = {
  headers: ["Persona", "Desde", "Hasta", "Estado", "Acción"],
  data: [
    {
      id: 1,
      guestName: "Andres Maya",
      dateStart: "2023-02-02",
      dateEnd: "2023-02-10",
      status: "Activo",
    },
    {
      id: 2,
      guestName: "Julián Salgado",
      dateStart: "2023-02-02",
      dateEnd: "Sin caducidad",
      status: "Activo",
    },
    {
      id: 3,
      guestName: "Julián Salgado",
      dateStart: "2023-02-02",
      dateEnd: "Sin caducidad",
      status: "Activo",
    },
  ],
};

const searchResults = [
  {
    id: "1",
    name: "Mzna 2",
  },
  {
    id: "2",
    name: "Mzna 2 Casa 5",
  },
  {
    id: "3",
    name: "Torre 2",
  },
  {
    id: "4",
    name: "Torre 2 APT 1001",
  },
];

const recurrentAnnotations = [
  {
    id: 1,
    to: [
      { id: 1, name: "Torre 2" },
      { id: 2, name: "Mnza 3" },
      { id: 3, name: "Torre 2 903" },
    ],
    content: "Llegaron los recibos de gas, porfavor venir por ellos a portería",
  },
  {
    id: 2,
    to: [
      { id: 4, name: "Torre 6" },
      { id: 9, name: "Mnza 5" },
      { id: 5, name: "Torre 5 905" },
    ],
    content: "Ascensor en mantenimiento",
  },
  {
    id: 3,
    to: [
      { id: 2, name: "Torre 7" },
      { id: 8, name: "Mnza 5" },
      { id: 56, name: "Torre 5 905" },
    ],
    content: "Por favor pagar la administración",
  },
  {
    id: 4,
    to: [
      { id: 34, name: "Torre 8" },
      { id: 8, name: "Mnza 5" },
      { id: 89, name: "Torre 5 905" },
    ],
    content: "Por favor pagar la administración",
  },
];

const recentAnnotations = [
  {
    id: 1,
    to: [
      { id: 1, name: "Torre 2" },
      { id: 2, name: "Mnza 3" },
      { id: 3, name: "Torre 2 903" },
    ],
    content: "Llegaron los recibos de gas, porfavor venir por ellos a portería",
  },
  {
    id: 2,
    to: [
      { id: 4, name: "Torre 5" },
      { id: 43, name: "Mnza 5" },
      { id: 5, name: "Torre 5 905" },
    ],
    content: "Ascensor en mantenimiento",
  },
  {
    id: 3,
    to: [
      { id: 5, name: "Torre 5" },
      { id: 44, name: "Mnza 5" },
      { id: 22, name: "Torre 5 905" },
    ],
    content: "Por favor pagar la administración",
  },
  {
    id: 4,
    to: [
      { id: 6, name: "Torre 5" },
      { id: 54, name: "Mnza 5" },
      { id: 53, name: "Torre 5 905" },
    ],
    content: "Por favor pagar la administración",
  },
];

const guestsFinded = [
  { id: 1, name: "Andres Maya", cellphone: "3123123123" },
  { id: 2, name: "Julián Salgado", cellphone: "3123123123" },
  { id: 3, name: "Jorge Sánchez", cellphone: "3123123123" },
  { id: 4, name: "Ana María", cellphone: "3123123123" },
];

export {
  commerce,
  commerces,
  structure,
  floor,
  guard_annotations,
  guests,
  invitations,
  searchResults,
  recurrentAnnotations,
  recentAnnotations,
	guestsFinded
};
