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
            Sad
          </Text>
          <Separator/>
          <Text style={styles.content}>
            Hey gang, in this React Native tutorial we'll make our own custom button component which can be re-used wherever we need it.Hey gang, in this React Native tutorial we'll make our own custom button component which can be re-used wherever we need it.
          </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "#456380",
  },
  container: {
    marginHorizontal: 100,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
    fontSize: 40,
    color: '#f0ffff',
  },
  content: {
    backgroundColor: '#f5f5f5',
    maxHeight: 800,
    maxWidth: 800,
    textAlign: 'center',
    fontSize: 30, 
    padding: 20,
    borderColor: "#1E4163",
    borderWidth: 10,
    shadowColor: 'black', // Shadow color
    shadowOffset: { width: 20, height: 10 }, // Shadow offset
    shadowOpacity: 1, // Shadow opacity
    shadowRadius: 10, // Shadow radius
    elevation: 8, // For Android shadow
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});