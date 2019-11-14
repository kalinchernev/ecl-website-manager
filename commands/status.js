const path = require("path");
const { exec } = require("child_process");

module.exports = ({ cwd }) => {
  console.log(`Current working directory: ${path.resolve(cwd)}\n`);
  exec("git status", { cwd }, (err, stdout) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(stdout);
  });
};
