import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useState, useEffect} from "react";

const colorBlue = "#0000d0";
const colorRed = "#dc3545";
const colorGreen = "#28a700";

export default function App() {
  [color, setColor] = useState("#FF0000");

  useEffect(() => {
    setInterval(() => {
      if(color === colorRed)
        setColor(colorBlue)
      else 
        setColor(colorRed)
    }, 1000);
  }, [])

  return (
    <View 
      style={styles.container}
    >
      <Text style={{
        color: color,
        backgroundColor: colorGreen,
        fontWeight: 900,
        fontSize: "24px",
        paddingHorizontal: "10px",
        paddingVertical: "5px",
        borderRadius: "5px",
      }}
      >Chrealvin - 00000045606</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
