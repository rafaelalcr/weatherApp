import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/components/Home/Home";
import WeatherPage from "./src/components/weather/WeatherPage";
import SearchCityPage from "./src/components/searchCity/SearchCityPage";
import { RootStack } from "./src/Types/Types";

export default function App() {
  const city: string = "";

  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen
          name="WeatherPage"
          component={WeatherPage}
          initialParams={{ city: city }}
        />
        <RootStack.Screen
          name="SearchCityPage"
          component={SearchCityPage}
          initialParams={{ city: city }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
