"use strict";

const exec = process.env.npm_execpath;
const yarn = exec.indexOf("yarn");

if (yarn === -1) {
    throw new Error("Use yarn install.")
}