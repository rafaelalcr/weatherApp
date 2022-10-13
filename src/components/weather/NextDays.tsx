import { useContext } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { WeatherCtx } from "../../Types/Types";

const NextDays = (props: { chooseDegree: string }) => {
  const weatherContext = useContext(WeatherCtx);

  return (
    <View style={styles.nextdays__card}>
      <View style={styles.nextdays__items}>
        <Text style={styles.nextdays__item}>
          {weatherContext?.arrayDate[0]}
        </Text>
        <Image source={{uri: `https:${weatherContext?.arrayIcon[0]}`}} style={{width: 50, height: 50}} />
        <Text style={styles.nextdays__item}>
          {props.chooseDegree === "Celsius"
            ? weatherContext?.arrayTempC[0]
            : weatherContext?.arrayTempF[0]}
          {props.chooseDegree === "Celsius" ? "°C" : "°F"}
        </Text>
      </View>
      <View style={styles.nextdays__items}>
        <Text style={styles.nextdays__item}>
          {weatherContext?.arrayDate[1]}
        </Text>
        <Image source={{uri: `https:${weatherContext?.arrayIcon[1]}`}} style={{width: 50, height: 50}} />
        <Text style={styles.nextdays__item}>
          {props.chooseDegree === "Celsius"
            ? weatherContext?.arrayTempC[1]
            : weatherContext?.arrayTempF[1]}
          {props.chooseDegree === "Celsius" ? "°C" : "°F"}
        </Text>
      </View>
      <View style={styles.nextdays__items}>
        <Text style={styles.nextdays__item}>
          {weatherContext?.arrayDate[2]}
        </Text>
        <Image source={{uri: `https:${weatherContext?.arrayIcon[2]}`}} style={{width: 50, height: 50}} />
        <Text style={styles.nextdays__item}>
          {props.chooseDegree === "Celsius"
            ? weatherContext?.arrayTempC[2]
            : weatherContext?.arrayTempF[2]}
          {props.chooseDegree === "Celsius" ? "°C" : "°F"}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nextdays__card: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    top: 180,
    marginLeft: "auto",
    marginRight: "auto",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
    padding: 20,
    backgroundColor: "#eaf3fb",
    opacity: 0.95,
    width: 350,
  },
  nextdays__items: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginLeft: 15,
    marginRight: 15,
  },
  nextdays__item: {
    color: "#5c69f2",
    fontSize: 15,
  },
});

export default NextDays;
