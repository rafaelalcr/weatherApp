import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { WeatherCtx } from "../../Types/Types";

const MoreInfo = () => {
  const weatherContext = useContext(WeatherCtx);

  return (
    <View style={styles.moreinfo__card}>
      <View style={styles.moreinfo__items}>
        <Text style={styles.moreinfo__item}>Wind</Text>
        <Text style={styles.moreinfo__item}>{weatherContext?.wind} km/h</Text>
      </View>
      <View style={styles.moreinfo__items}>
        <Text style={styles.moreinfo__item}>Prec.</Text>
        <Text style={styles.moreinfo__item}>
          {weatherContext?.precipitation} mm
        </Text>
      </View>
      <View style={styles.moreinfo__items}>
        <Text style={styles.moreinfo__item}>Hum.</Text>
        <Text style={styles.moreinfo__item}>{weatherContext?.humidity} %</Text>
      </View>
      <View style={styles.moreinfo__items}>
        <Text style={styles.moreinfo__item}>UV</Text>
        <Text style={styles.moreinfo__item}>{weatherContext?.uv}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  moreinfo__card: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    top: 130,
    marginLeft: "auto",
    marginRight: "auto",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
    width: 350,
    padding: 20,
    backgroundColor: "#eaf3fb",
    opacity: 0.95,
  },
  moreinfo__items: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginLeft: 15,
    marginRight: 15,
  },
  moreinfo__item: {
    color: "#5c69f2",
    fontSize: 20,
  },
});

export default MoreInfo;
