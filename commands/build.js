const util = require("util");
const exec = util.promisify(require("child_process").exec);

module.exports = ({ program, cwd }) => {
  const build = async () => {
    if (program.args.length <= 0) {
      console.log("No name has been specified for the built site.");
      console.log("Result will be left at ECL's repo folder.");
    }

    const version = program.args[0];

    await exec("yarn dist", { cwd });

    if (version) {
      switch (version) {
        case "v1": {
          await exec(`mv dist/website ../${version}`, { cwd });
          break;
        }

        default: {
          await exec(`mv dist ../${version}`, { cwd });
          break;
        }
      }
    }
  };

  build();
};
