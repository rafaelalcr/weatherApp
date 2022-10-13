import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Provider, Menu, RadioButton } from "react-native-paper";
import { Button } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import { SearchCityProps } from "../../Types/Types";
import CurrentInfo from "./CurrentInfo";
import MoreInfo from "./MoreInfo";
import NextDays from "./NextDays";

export default function SearchCityItem({ navigation }: SearchCityProps) {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [chooseDegree, setChooseDegree] = useState("Celsius");

  return (
    <LinearGradient colors={["#5c69f2", "#8fb7f3"]} style={styles.container}>
      <Provider>
        <View style={styles.navbar}>
          <Button
            onPress={() => navigation.goBack()}
            buttonStyle={{
              backgroundColor: "transparent",
            }}
            icon={{
              name: "arrow-left",
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
            <RadioButton.Group
              onValueChange={setChooseDegree}
              value={chooseDegree}
            >
              <View style={styles.navbar__item}>
                <RadioButton.Item
                  label="Celsius"
                  value="Celsius"
                  color="#5c69f2"
                  position="leading"
                  status={chooseDegree === "Celsius" ? "checked" : "unchecked"}
                />
              </View>
              <View style={styles.navbar__item}>
                <RadioButton.Item
                  label="Fahrenheit"
                  value="Fahrenheit"
                  color="#5c69f2"
                  position="leading"
                  status={
                    chooseDegree === "Fahrenheit" ? "checked" : "unchecked"
                  }
                />
              </View>
            </RadioButton.Group>
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
  navbar__items: {
    top: 70,
    width: 200,
  },
  navbar__item: {
    flexDirection: "row",
  },
});
