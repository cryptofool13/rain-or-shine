export const currentParser = ({ main, weather }) => {
  const parsed = {};
  parsed.temp = main.temp + " °F";
  parsed.hi = main.temp_max + " °F";
  parsed.lo = main.temp_min + " °F";
  parsed.desc = weather[0].description;
  parsed.code = weather[0].id.toString();

  return parsed;
};

export const forecastParser = ({ list }) => {
  const parsed = [];

  for (let i = 0; i < list.length; i += 8) {
    let day = {};
    day.temp = list[i].main.temp + " °F";
    day.desc = list[i].weather[0].description;
    day.code = list[i].weather[0].id.toString();
    day.dt = list[i].dt_txt.split(" ");
    parsed.push(day);
  }
  return parsed;
};

export const icon = code => {
  if (!code) {
    return null;
  }
  if (code === "800") {
    return "clear.png";
  }

  let cd = code.slice()[0];

  switch (cd) {
    case "8":
      return "clouds.png";
    case "7":
      return "atmos.png";
    case "6":
      return "snow.png";
    case "5":
      return "rain.png";
    case "3":
      return "drizzle.png";
    case "2":
      return "thunder.png";
  }
};
