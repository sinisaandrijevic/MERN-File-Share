const baseDir = __dirname;

const Config = {
  PORT: 5000,
  BACKEND_DOMAIN: "http://localhost:5000",
  BASE_DIR: baseDir,
  FILE_LINK_EXPIRY_IN_MINUTES: 10,
  CRYPTR_TOKEN: "secret",
  ADMIN_USER: "admin",
  ADMIN_PASS: "password",
};

module.exports = {
  Config,
};
