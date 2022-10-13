import { useRef, useState, useEffect } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  View,
  Easing,
  TextInput,
} from "react-native";
import { Button } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import { HomeProps } from "../../Types/Types";

export default function Home({ navigation }: HomeProps) {
  const ref = useRef(View.prototype);
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [yPos, setYPos] = useState(0);
  const [city, setCity] = useState("");
  const [showError, setShowError] = useState(false);

  const welcomeAnimation = () => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 1000,
      delay: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  const textAnimation = () => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 1000,
      delay: 2000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    ref.current.measure((x, y, w, h, xAbs, yAbs) => setYPos(yAbs));
    welcomeAnimation();
    textAnimation();
  }, []);

  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -yPos - 150],
  });

  const searchHandler = () => {
    if (city.length === 0) {
      setShowError(true);
    } else {
      navigation.navigate("WeatherPage", { city: city });
    }
  };

  return (
    <LinearGradient colors={["#5c69f2", "#8fb7f3"]} style={styles.container}>
      <View style={styles.container}>
        <Animated.View ref={ref} style={{ transform: [{ translateY }] }}>
          <Text style={styles.title}>Weather App</Text>
        </Animated.View>
        <Animated.View ref={ref} style={{ opacity: animatedValue }}>
          <View style={styles.search_section}>
            <TextInput
              style={styles.search_input}
              onChangeText={setCity}
              value={city}
              placeholder="Current city"
              underlineColorAndroid="transparent"
            />
            <Button
              onPress={searchHandler}
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
          </View>
          <View style={{ marginTop: 5 }}>
            {showError && (
              <Text style={styles.input_error}>Enter the name of a city.</Text>
            )}
          </View>
        </Animated.View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
  },
  search_section: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  search_input: {
    backgroundColor: "white",
    borderRadius: 20,
    borderColor: "white",
    height: 40,
    width: 180,
    textAlign: "center",
  },
  input_error: {
    textAlign: "center",
    color: "white",
    marginRight: 50,
  },
});
