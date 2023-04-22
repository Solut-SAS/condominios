const ENV = "production";
const configPath = `./env/${ENV}.json`;

let config = await (async () => await import(configPath))();

export const APIS = [
  { name: "commerce", url: config.COMMERCE_URL },
  { name: "auth", url: config.AUTH_URL },
];
