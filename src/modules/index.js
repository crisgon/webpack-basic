import { sum } from "./sum.js";
import "../styles/global.scss";

const body = document.querySelector("body");

const value = sum(2, 3);

console.log({ value });

body.innerHTML += value;
