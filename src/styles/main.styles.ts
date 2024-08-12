import {Button, StyleSheet} from 'react-native';

export default () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#D4A56D',
      justifyContent: 'center',
      alignItems: 'center',
    },
    backgroundimageview: {
      height: '100%',
      width: '100%',
    },
    backgroundimage: {
      height: '100%',
      width: '100%',
    },
    image1view: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 270,
      marginTop: '35%',
    },
    image1: {
      height: '100%',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text1view: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '6%',
    },
    text1: {
      color: 'white',
      fontWeight: '600',
      fontSize: 24,
      maxWidth: '50%',
      textAlign: 'center',
    },
    text2view: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '5%',
    },
    text2: {
      color: 'white',
      fontWeight: '400',
      fontSize: 14,
      maxWidth: '60%',
      textAlign: 'center',
    },
    buttonview: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '7%',
    },
    Button: {
      borderRadius: 25,
      height: 50,
      width: 250,
      backgroundColor: '#00512C',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttontext: {color: 'white'},
  });
};
