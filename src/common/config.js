// const ENV = "development";
const configPath = `./env/development.json`;
const SERVER_URL = "https://api-condo.onrender.com";

// const config = await (async () => await import(configPath))();

export const APIS = [
  { name: "commerce", url: SERVER_URL },
  { name: "auth", url: SERVER_URL },
];
