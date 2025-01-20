import { View, Text } from 'react-native';
import React from 'react';
import { Link } from "expo-router";
const Home = () => {
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
  )
}

export default Home;