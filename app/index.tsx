import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{

        backgroundColor:"black",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{fontSize: 20, fontWeight: "700", color: "white" }}>BEŞİKTAŞ BJK.</Text>
      <Link style= {{fontSize: 20, fontWeight: "300", color:"white",}} href={"/about"}>Hakkımızda</Link>
    </View>
  );
}
