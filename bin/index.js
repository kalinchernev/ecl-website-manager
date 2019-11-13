#!/usr/bin/env node

const { exec } = require("child_process");
const program = require("commander");

const pkg = require("../package.json");

const cwd = process.env.ECL_DIR || "../europa-component-library/";

program.version(pkg.version).usage("ecl-web-manager [command] [option]");

program
  .command("status")
  .description("check current tag/branch")
  .action(() => {
    exec("git status", { cwd }, (err, stdout) => {
      if (err) {
        console.error(err);
        return;
      }

      console.log(stdout);
    });
  });

program
  .command("use")
  .description("switch to a specific tag")
  .action(() => {
    if (program.args.length <= 0) {
      console.log("Please specify a tag");
      return;
    }

    exec(`git checkout ${program.args[0]}`, { cwd }, (err, stdout) => {
      if (err) {
        console.error(err);
        return;
      }

      console.log(stdout);
    });
  });

// If no arguments provided, display help menu.
if (process.argv.slice(2).length <= 0) {
  program.help();
} else {
  program.parse(process.argv);
}
