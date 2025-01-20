import React from 'react';
import { Stack } from 'expo-router/stack';

const RootLayout = () => {
  return (
   <Stack>
    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />    
    <Stack.Screen name='index'/>
    <Stack.Screen name='about'/>
   </Stack>
  )
}

export default RootLayout;