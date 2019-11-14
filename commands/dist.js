const { exec } = require("child_process");

module.exports = ({ cwd }) => {
  const dist = exec("yarn dist", { cwd });
  dist.stdout.on("data", console.log);
};
