import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {cup, WelcomeLogo} from './assets';
import createStyles from './styles/main.styles';

const Welcome = () => {
  const styles = createStyles();
  return (
    <>
      <View style={styles.container}>
        <View style={styles.backgroundimageview}>
          <ImageBackground style={styles.backgroundimage} source={WelcomeLogo}>
            <View style={styles.image1view}>
              <Image style={styles.image1} source={cup} />
            </View>
            <View style={styles.text1view}>
              <Text style={styles.text1}>
                Coffee so good, your taste buds will love it
              </Text>
            </View>
            <View style={styles.text2view}>
              <Text style={styles.text2}>
                The best grain, the finest roas, the most powerful flavor.
              </Text>
            </View>
            <View style={styles.buttonview}>
              <TouchableOpacity style={styles.Button}>
                <Text style={styles.buttontext}>Get started</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </View>
    </>
  );
};

export default Welcome;
