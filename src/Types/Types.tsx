import { createContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export interface WeatherInfo {
  city: string;
  date: string;
  tempC: number;
  tempF: number;
  icon: string;
  iconText: string;
  wind: number;
  precipitation: number;
  humidity: number;
  uv: number;
  arrayDate: string[];
  arrayIcon: string[];
  arrayTempC: number[];
  arrayTempF: number[];
}

export const WeatherCtx = createContext<WeatherInfo | null>(null);

export type RootStackParamList = {
  Home: undefined;
  WeatherPage: { city: string };
  SearchCityPage: { city: string };
};

export const RootStack = createStackNavigator<RootStackParamList>();

export type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">;
export type WeatherProps = NativeStackScreenProps<
  RootStackParamList,
  "WeatherPage"
>;
export type SearchCityProps = NativeStackScreenProps<
  RootStackParamList,
  "SearchCityPage"
>;
