const { args } = Deno;
import { log1, log2, log3, log4, log5, logI } from "./modules/colors.ts";
import { convertTimestamp } from "./modules/convertTimeStamp.ts";
import { Data } from "./interfaces/interfaces.ts";
import { parse } from "http://deno.land/std/flags/mod.ts";

// This is my API key - you can get one at openweathermap.org
// let APIkey: string = "132b1233eec54c6cc3f8f4267eb977ab";
let APIkey: string = "36233953037a89094f23e0253eb7d453";
// API key ends

// Getting City name as argument
let { c } = parse(args);
let city: string = c;

// It outputs ---- output --- that's it (stupid I know!)
logI();


// Base url
let url: string =
  `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`;

// Function to display result - I want to keep it as seperate file/module
const showResult = ({ name, temp, desc, sunR, sunS }: Data): void => {
  log1(`            City          :   ${name}`);
  log2(`            Temp          :   ${temp}℃`);
  log3(`            Description   :   ${desc}`);
  log4(`            Sun Rise      :   ${sunR}`);
  log5(`            Sun Set       :   ${sunS}`);
};

// http call to openweathermap API to get weather data
const getData = async (url: string): Promise<void> => {
  const data = await (await fetch(url)).json();
  if (data.cod && data.cod !== 200) {
    log3(`          Error Code    :   ${data.cod}`);
    log2(`          Message       :   Something went wrong`);
    return;
  }
  const WeatherData: Data = {
    name: data.name,
    temp: parseFloat((data.main.temp - 273.15).toFixed(2)),
    desc: data.weather[0].description,
    sunR: convertTimestamp(data.sys.sunrise),
    sunS: convertTimestamp(data.sys.sunset),
  };

  showResult(WeatherData);
};

// Finally calling the function
getData(url);
