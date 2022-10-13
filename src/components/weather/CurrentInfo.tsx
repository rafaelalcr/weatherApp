import { useContext } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Button } from "react-native-elements";
import { WeatherCtx } from "../../Types/Types";

const CurrentInfo = (props: { chooseDegree: string }) => {
  const weatherContext = useContext(WeatherCtx);

  let temperature: number;
  let grade: string;

  if (props.chooseDegree === "Celsius") {
    temperature = weatherContext?.tempC || 0;
    grade = "°C";
  } else {
    temperature = weatherContext?.tempF || 0;
    grade = "°F";
  }

  return (
    <View style={styles.currentinfo__card}>
      <View style={styles.currentinfo__icon}>
        <Button
          icon={{
            name: "home",
            type: "font-awesome",
            size: 20,
            color: "white",
          }}
          buttonStyle={{
            backgroundColor: "transparent",
          }}
        />
        <Text style={styles.currentinfo__icontext}>{weatherContext?.city}</Text>
      </View>
      <Text style={styles.currentinfo__date}>{weatherContext?.date}</Text>
      <View style={styles.currentinfo__items}>
        <Image
          source={{ uri: `https:${weatherContext?.icon}` }}
          style={{ width: 100, height: 100 }}
        />
        <Text style={styles.currentinfo__item}>
          {temperature}
          {grade}
        </Text>
      </View>
      <Text style={styles.currentinfo__text}>{weatherContext?.iconText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  currentinfo__card: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    top: 100,
  },
  currentinfo__icon: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
    marginBottom: 15,
  },
  currentinfo__icontext: {
    color: "white",
    fontSize: 20,
  },
  currentinfo__date: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 10,
  },
  currentinfo__items: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  currentinfo__item: {
    color: "white",
    fontWeight: "bold",
    fontSize: 50,
  },
  currentinfo__text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 15,
  },
});

export default CurrentInfo;
