#!/usr/bin/env node

const { execSync } = require('child_process');

const runCommand = command => {
    try {
        execSync(`${command}`, { stdio: `inherit` });
    } catch (e) {
        console.error(`Failed to execute ${command}`, e);
        return false;
    }
    return true;
}

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/JuanQuez/create-nodepress-quez ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;

console.log(
    "                                                  \n"+
    "    \x1b[1m\x1b[33m\x1b[40m INSTALLING YOUR PROJECT WITH NAME \x1b[0m\n"+
    `                \x1b[1m\x1b[32m${repoName}\x1b[0m               \n`+
    "                                         \n"+    
    "  █▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█\n"+
    "  █ \x1b[33m██ ██ ██ ██ ██ ██ ██ ██ ██\x1b[0m          █\n"+
    "  █ \x1b[33m██ ██ ██ ██ ██ ██ ██ ██ ██\x1b[0m          █\n"+
    "  █▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█\n"+
    "                                         \n"+
    "    █    █▀▀▀█ █▀▀█ █▀▀▄ ▀█▀ █▄  █ █▀▀█  \n"+
    "    █    █   █ █▄▄█ █  █  █  █ █ █ █ ▄▄  \n"+
    "    █▄▄█ █▄▄▄█ █  █ █▄▄▀ ▄█▄ █  ▀█ █▄▄█  \n"+
    "                                         \n"
    );
const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) process.exit(-1);

console.log(
    "                                               \n"+
    "         \x1b[1m\x1b[36m\x1b[40m INSTALLING DEPENDENCIES \x1b[0m\n"+
    "                                                 "
    );
const installedDeps = runCommand(installDepsCommand);
if (!installedDeps) process.exit(-1);

console.log(
"                                         \n"+    
"  █▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█\n"+
"  █\x1b[32m ██ ██ ██ ██ ██ ██ ██ ██ ██ ██ ██ ██ \x1b[0m█\n"+
"  █\x1b[32m ██ ██ ██ ██ ██ ██ ██ ██ ██ ██ ██ ██ \x1b[0m█\n"+
"  █▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█\n"+
"                                         \n"+
"               █▀▀█ █▀▀▀█ █              \n"+
"               █ ▄▄ █   █ █              \n"+
"               █▄▄█ █▄▄▄█ ▄              \n"+
"                                         \n"+
"          \x1b[1m\x1b[32m ¡Tu creación está lista! \x1b[0m\n"+
` Ingresa \x1b[1m\x1b[32m "cd ${repoName}" \x1b[0m y despues "code ."\n`+
`No olvides crear tu base de datos y agregarla\n` +
`           En el archivo \x1b[1m\x1b[32m ".env" \x1b[0m\n` 
);
