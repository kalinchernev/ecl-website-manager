const { exec } = require("child_process");

module.exports = ({ cwd }) => {
  exec(
    "rm -rf node_modules tmp dist build static/framework",
    { cwd },
    (err, stdout) => {
      if (err) {
        console.error(err);
        return;
      }

      console.log(stdout);
    }
  );
};
