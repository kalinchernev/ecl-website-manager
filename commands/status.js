const { exec } = require("child_process");

module.exports = ({ cwd }) => {
  exec("git status", { cwd }, (err, stdout) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(stdout);
  });
};
