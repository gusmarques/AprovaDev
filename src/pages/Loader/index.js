import React, { useRef, useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions, Animated, } from 'react-native';
import Anime from '../../assets/logoo.png'


export default function Loader({ navigation }) {

  const moveAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(moveAnim, {
        duration: 2000,
        toValue: Dimensions.get('window').width / 1.6,
        delay: 0,
        useNativeDriver: false,
      }),
      Animated.timing(moveAnim, {
        duration: 2000,
        toValue: 0,
        delay: 0,
        useNativeDriver: false,
      }),
    ]).start();
    Animated.timing(fadeAnim, {
      duration: 2000,
      toValue: 1,
      delay: 2000,
      useNativeDriver: false,
    }).start();

    setTimeout(function go() {
      navigation.navigate('Conta')
    }, 4500)

  }, [moveAnim, fadeAnim]);



  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Animated.Image
          style={[styles.image, { opacity: fadeAnim }]}
          source={Anime}
        />
        <Animated.View style={[styles.logoContainer, { marginLeft: moveAnim }]}>
          <Text style={[styles.logoText]}>A</Text>
          <Animated.Text style={[styles.logoText, { opacity: fadeAnim }]}>
            prova Dev
          </Animated.Text>
        </Animated.View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  logoText: {
    fontSize: 20,
    marginTop: 20,
    color: 'white',
    fontWeight: '700',
  },
  contentContainer: {
    top: '40%',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 150,
  },
  logoContainer: {
    flexDirection: 'row',
  },
});
