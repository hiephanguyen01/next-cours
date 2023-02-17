/** @type {import('next').NextConfig} */


const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "maximilian",
        mongodb_password: "2YkcXq43KyPk0vqp",
        mongodb_clustername: "cluster0",
        mongodb_database: "my-site-dev",
      },
      reactStrictMode: true,
    };
  }

  return {
    env: {
      mongodb_username: "maximilian",
      mongodb_password: "2YkcXq43KyPk0vqp",
      mongodb_clustername: "cluster0",
      mongodb_database: "my-site",
    },
    reactStrictMode: true,
  };
};
