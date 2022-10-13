import { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Button } from "react-native-elements";
import { Provider, Menu, RadioButton } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { WeatherProps } from "../../Types/Types";
import CurrentInfo from "./CurrentInfo";
import MoreInfo from "./MoreInfo";
import NextDays from "./NextDays";

export default function WeatherItems({ navigation }: WeatherProps) {
  const [openNavSearch, setOpenNavSearch] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [chooseDegree, setChooseDegree] = useState("Celsius");

  const navSearchHandler = () => {
    if (searchInput.length === 0) {
      setOpenNavSearch((prev) => !prev);
    } else {
      navigation.navigate("SearchCityPage", { city: searchInput });
      setSearchInput("");
      setOpenNavSearch(false);
    }
  };

  return (
    <LinearGradient colors={["#5c69f2", "#8fb7f3"]} style={styles.container}>
      <Provider>
        <View style={styles.navbar}>
          {openNavSearch && (
            <TextInput
              style={styles.navbar__searchinput}
              onChangeText={setSearchInput}
              value={searchInput}
              placeholder="Search City"
              underlineColorAndroid="transparent"
            />
          )}
          <Button
            onPress={navSearchHandler}
            buttonStyle={{
              backgroundColor: "transparent",
            }}
            icon={{
              name: "search",
              type: "font-awesome",
              size: 25,
              color: "white",
            }}
          />
          <Menu
            style={styles.navbar__items}
            visible={dropdownVisible}
            onDismiss={() => setDropdownVisible(false)}
            anchor={
              <Button
                onPress={() => setDropdownVisible(true)}
                buttonStyle={{
                  backgroundColor: "transparent",
                }}
                icon={{
                  name: "bars",
                  type: "font-awesome",
                  size: 25,
                  color: "white",
                }}
              />
            }
          >
            <View style={styles.navbar__item}>
              <RadioButton.Item
                label="Celsius"
                value="Celsius"
                color="#5c69f2"
                position="leading"
                status={chooseDegree === "Celsius" ? "checked" : "unchecked"}
                onPress={() => setChooseDegree("Celsius")}
              />
            </View>
            <View style={styles.navbar__item}>
              <RadioButton.Item
                label="Fahrenheit"
                value="Fahrenheit"
                color="#5c69f2"
                position="leading"
                status={chooseDegree === "Fahrenheit" ? "checked" : "unchecked"}
                onPress={() => setChooseDegree("Fahrenheit")}
              />
            </View>
          </Menu>
        </View>
        <CurrentInfo chooseDegree={chooseDegree} />
        <MoreInfo />
        <NextDays chooseDegree={chooseDegree} />
      </Provider>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {
    flexDirection: "row",
    position: "absolute",
    top: 30,
    right: 0,
  },
  navbar__searchinput: {
    backgroundColor: "white",
    borderRadius: 20,
    borderColor: "white",
    height: 40,
    width: 180,
    textAlign: "center",
  },
  navbar__items: {
    top: 70,
    width: 200,
  },
  navbar__item: {
    flexDirection: "row",
  },
});
