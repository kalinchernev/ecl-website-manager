const fs = require("fs");
const util = require("util");
const exec = util.promisify(require("child_process").exec);

module.exports = ({ program, cwd }) => {
  const build = async () => {
    if (program.args.length <= 0) {
      console.log("Please specify version.");
      console.log("Example: ecl-website build v1");
      return;
    }

    const version = program.args[0];

    if (!fs.existsSync("versions")) {
      fs.mkdirSync("versions");
    }

    await exec("yarn dist", { cwd });

    if (version) {
      switch (version) {
        case "v1": {
          await exec(`mv dist/website ./versions/${version}`, { cwd });
          break;
        }

        default: {
          await exec(`mv dist ./versions/${version}`, { cwd });
          break;
        }
      }
    }
  };

  build();
};
