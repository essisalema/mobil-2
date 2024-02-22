import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/Navigation';
import  AppLoading  from 'expo-app-loading';

export default function App() {
  const [splashIsReady, setSplashIsReady] = useState(false);


  const handleFinishLoading = () => {
    setSplashIsReady(true);
  };

  useEffect(() => {
    
    
    const fetchData = async () => {
      
      await new Promise(resolve => setTimeout(resolve, 2000));
    };

    fetchData().then(() => {
      
      handleFinishLoading();
    });
  }, []);

  if (!splashIsReady) {
    
    return (
      <View style={styles.splashContainer}>
        <Image source={require('./assets/splash.png')} style={styles.splashImage} />
        <Text style={styles.splashText} >LOADING....</Text>
        <AppLoading onFinish={handleFinishLoading} />
      </View>
    );
  }

  
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashImage: {
    width: 200, 
    height: 200, 
    resizeMode: 'contain',
  },
  splashText: {
    fontSize: 75,
    marginTop: 45,
  },
});
