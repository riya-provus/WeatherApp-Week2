import type { WeatherResponse } from "../interfaces/WeatherResponse";
import type { ForecastDetails } from "../interfaces/ForecastDetails";
const API_KEY = "446a1e1a882d44c9b2951825260502";
const BASE_URL = "https://api.weatherapi.com/v1";

export const getCurrentWeather = async (query: string): Promise<WeatherResponse> => {
  const res = await fetch(`${BASE_URL}/current.json?key=${API_KEY}&q=${query}`);
  return res.json();
};

export const getForecastWeather = async (query: string, days: number): Promise<ForecastDetails> => {
  const res = await fetch(`${BASE_URL}/forecast.json?key=${API_KEY}&q=${query}&days=${days}`);
  return res.json();
};

export const getFutureWeather = async (query: string, date: string): Promise<ForecastDetails> => {
  const res = await fetch(`${BASE_URL}/future.json?key=${API_KEY}&q=${query}&dt=${date}`);
  return res.json();
};
