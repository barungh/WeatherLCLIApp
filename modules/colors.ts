import {
  rgb24,
  italic,
  cyan,
} from "https://deno.land/std@0.52.0/fmt/colors.ts";

let cheese = { r: 255, g: 190, b: 134 };
let titaniumYellow = { r: 244, g: 228, b: 9 };
let fuchsia = { r: 255, g: 0, b: 255 };
let redSalsa = { r: 251, g: 54, b: 64 };
let midnightBlue = { r: 3, g: 26, b: 107 };
let babyPowder = { r: 253, g: 255, b: 252 };

let log1 = (str: any) => console.log(rgb24(str + "", titaniumYellow));
let log2 = (str: any) => console.log(rgb24(str + "", fuchsia));
let log3 = (str: any) => console.log(rgb24(str + "", redSalsa));
let log4 = (str: any) => console.log(rgb24(str + "", cheese));
let log5 = (str: any) => console.log(rgb24(str + "", babyPowder));
let logM = () => {
  return `
            -------- Output --------
    `;
};
let logI = () => console.log(italic(cyan(logM())));

export { log1, log2, log3, log4, log5, logI };
