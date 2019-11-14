const { exec } = require("child_process");

module.exports = ({ program, cwd }) => {
  if (program.args.length <= 0) {
    console.log("Please specify a tag, branch, etc.");
    return;
  }

  exec(`git checkout ${program.args[0]}`, { cwd }, (err, stdout) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(stdout);
  });
};
