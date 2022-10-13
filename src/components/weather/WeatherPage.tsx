import React, { useEffect, useState } from "react";
import WeatherItem from "./WeatherItem";
import { WeatherInfo, WeatherCtx, WeatherProps } from "../../Types/Types";

export default function WeatherPage({ route, navigation }: WeatherProps) {
  const { city } = route.params;

  const [data, setData] = useState<WeatherInfo | null>();

  const fetchData = async (urlCurrent: string, urlForescast: string) => {
    try {
      const responseCurrent = await fetch(urlCurrent);
      const jsonCurrent = await responseCurrent.json();
      const responseForescast = await fetch(urlForescast);
      const jsonForescast = await responseForescast.json();

      setData({
        city: jsonCurrent.location.name,
        date: jsonCurrent.location.localtime,
        tempC: jsonCurrent.current.temp_c,
        tempF: jsonCurrent.current.temp_f,
        icon: jsonCurrent.current.condition.icon,
        iconText: jsonCurrent.current.condition.text,
        wind: jsonCurrent.current.wind_mph,
        precipitation: jsonCurrent.current.precip_mm,
        humidity: jsonCurrent.current.humidity,
        uv: jsonCurrent.current.uv,
        arrayDate: [
          jsonForescast.forecast.forecastday[0].date,
          jsonForescast.forecast.forecastday[1].date,
          jsonForescast.forecast.forecastday[2].date,
        ],
        arrayIcon: [
          jsonForescast.forecast.forecastday[0].day.condition.icon,
          jsonForescast.forecast.forecastday[1].day.condition.icon,
          jsonForescast.forecast.forecastday[2].day.condition.icon,
        ],
        arrayTempC: [
          jsonForescast.forecast.forecastday[0].day.maxtemp_c,
          jsonForescast.forecast.forecastday[1].day.maxtemp_c,
          jsonForescast.forecast.forecastday[2].day.maxtemp_c,
        ],
        arrayTempF: [
          jsonForescast.forecast.forecastday[0].day.maxtemp_f,
          jsonForescast.forecast.forecastday[1].day.maxtemp_f,
          jsonForescast.forecast.forecastday[2].day.maxtemp_f,
        ],
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const urlCurrent = `http://api.weatherapi.com/v1/current.json?key=b9170fb44b5144cba4b182900222107&q=${city}&aqi=no&lang=pt`;
    const urlForescast = `http://api.weatherapi.com/v1/forecast.json?key=b9170fb44b5144cba4b182900222107&q=${city}&days=7&aqi=no&alerts=no&lang=pt`;
    fetchData(urlCurrent, urlForescast);
  }, []);

  const sampleWeatherContext: WeatherInfo = {
    city: city,
    date: data?.date || "",
    tempC: data?.tempC || 0,
    tempF: data?.tempF || 0,
    icon: data?.icon || "",
    iconText: data?.iconText || "",
    wind: data?.wind || 0,
    precipitation: data?.precipitation || 0,
    humidity: data?.humidity || 0,
    uv: data?.uv || 0,
    arrayDate: data?.arrayDate || [],
    arrayIcon: data?.arrayIcon || [],
    arrayTempC: data?.arrayTempC || [],
    arrayTempF: data?.arrayTempF || [],
  };

  return (
    <WeatherCtx.Provider value={sampleWeatherContext}>
      <WeatherItem navigation={navigation} route={route} />
    </WeatherCtx.Provider>
  );
}
