const { exec } = require("child_process");

module.exports = ({ cwd }) => {
  const installation = exec("yarn install", { cwd });
  installation.stdout.on("data", console.log);
};
