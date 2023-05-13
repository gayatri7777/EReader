import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Header } from 'react-native';
import AppHeader from '../assets/components/AppHeader';


export default class HomeScreen extends React.Component {
render() {
    return (
     <View style = {styles.Container}>
        <AppHeader />
       <View>
        <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('Stories1')}>
         <Text> A question of trust </Text> 
        </TouchableOpacity>

         <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('Stories2')}>
         <Text> The thiefs story </Text> 
        </TouchableOpacity>

 <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('Stories3')}>
         <Text> The fox and the grapes </Text> 
        </TouchableOpacity>

         <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('Stories4')}>
         <Text> The honest woodcutter</Text> 
        </TouchableOpacity>

         <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('Stories5')}>
         <Text> The thirsty crow </Text> 
        </TouchableOpacity>

         <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('Stories6')}>
         <Text> The golden eggs </Text> 
        </TouchableOpacity>

         <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('Stories7')}>
         <Text> The Boy Who Cried Wolf </Text> 
        </TouchableOpacity>
        
         <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('Stories8')}>
         <Text> The Midas Touch </Text> 
        </TouchableOpacity>
       </View>
       </View>
          </View>
    );
    }
    }
    const styles = StyleSheet.create({
  buttonsContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor:"yellow",
    margin: 10,
    width: 300,
    height: 50,
  },
});





