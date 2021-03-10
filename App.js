/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React , { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
 
import {Picker} from '@react-native-picker/picker';

import {BRANDS} from './res/data/dummy-data';

const App: () => React$Node = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("java");
  var options ={
    "1": "Home",
    "2": "Food",
    "3": "Car",
    "4": "Bank",
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>        
          <View style={styles.body}>
          <View style={styles.container_logo}>
          <Image
        style={styles.tinyLogo}
        source={require('./res/images/car-manuals-logo.png')}
      />
      </View> 
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)}
          mode={'dropdown'}>
          {BRANDS.map((item, key) => {
              return (<Picker.Item label={item.title} value={key} key={key}/>) 
          })}
      </Picker>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  tinyLogo: {
    flex: 1,
    width: 230,
    resizeMode: 'contain' 
  },
  container_logo: {
    flex: 1,
    marginLeft: 50,
    marginRight: 50,
    height: 80,
    alignItems: "center", 
    justifyContent: "center"
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
