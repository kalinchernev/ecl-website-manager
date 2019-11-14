#!/usr/bin/env node

const program = require("commander");

const pkg = require("../package.json");

const cwd = process.env.ECL_DIR || "../europa-component-library";

// Commands
const clean = require("../commands/clean");
const dist = require("../commands/dist");
const install = require("../commands/install");
const status = require("../commands/status");
const use = require("../commands/use");

program.version(pkg.version).usage("ecl-web-manager [command] [option]");

program
  .command("status")
  .description("check current tag/branch")
  .action(() => status({ cwd }));

program
  .command("use")
  .description("checkout a specific place of history")
  .action(() => use({ program, cwd }));

program
  .command("clean")
  .description("remove node_modules, dist, build, etc.")
  .action(() => clean({ cwd }));

program
  .command("install")
  .description("fetch dependencies")
  .action(() => install({ cwd }));

program
  .command("dist")
  .description("build site for production")
  .action(() => dist({ cwd }));

// If no arguments provided, display help menu.
if (process.argv.slice(2).length <= 0) {
  program.help();
} else {
  program.parse(process.argv);
}
