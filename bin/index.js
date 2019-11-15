#!/usr/bin/env node

const program = require("commander");

const pkg = require("../package.json");

const cwd = process.env.ECL_DIR || ".";

// Commands
const clean = require("../commands/clean");
const build = require("../commands/build");
const install = require("../commands/install");
const status = require("../commands/status");
const use = require("../commands/use");

program.version(pkg.version).usage("ecl-web-manager [command] [option]");

program
  .command("status")
  .description("verify current state")
  .action(() => status({ cwd }));

program
  .command("use")
  .description("checkout what")
  .action(() => use({ program, cwd }));

program
  .command("clean")
  .description("start from scratch")
  .action(() => clean({ cwd }));

program
  .command("install")
  .description("fetch dependencies")
  .action(() => install({ cwd }));

program
  .command("build")
  .description("build a given site")
  .action(() => build({ program, cwd }));

// If no arguments provided, display help menu.
if (process.argv.slice(2).length <= 0) {
  program.help();
} else {
  program.parse(process.argv);
}
