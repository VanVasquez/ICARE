import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
} from 'react-native';

const Separator = () => <View style={styles.separator} />;

export default App = () =>{
  return (
    <SafeAreaView style={styles.body}>   
        <View style={styles.container}>
          <Text style={styles.title}>
            HOW ARE YOU TODAY?
          </Text>
          <Separator/>
          <Text style={styles.content}>
            <Text style={styles.text}>
              HAPPY
            </Text>
            <Text style={styles.text}>
              SAD
            </Text>
            <Text style={styles.text}>
              ANGRY
            </Text>
            <Text style={styles.text}>
              THRIFTY
            </Text>
            <Text style={styles.text}>
              CLUELESS
            </Text>
          </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
  body: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f0ffff',
    margin: -10,
  },
  container: {
    flex: 1,
    marginHorizontal: 100,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
    fontSize: 40,
  },
  content: {
    backgroundColor: '#f5f5f5',
    maxHeight: 800,
    maxWidth: 800,
    fontSize: 30, 
    padding: 20,
    borderRadius: 20,
    borderColor: '#EEEEEE',
    shadowColor: 'black', // Shadow color
    shadowOffset: { width: 20, height: 10 }, // Shadow offset
    shadowOpacity: 1, // Shadow opacity
    shadowRadius: 10, // Shadow radius
    elevation: 8, // For Android shadow
  },
  text: {
    textAlign: 'center',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});