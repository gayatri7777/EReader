
import React, { Component } from 'react';
import { Text, View, TouchableOpacity,StyleSheet } from 'react-native';


export default class Stories6 extends Component {
  render() {
    return (
       <View style={styles.container}>
        <Text style={{ fontSize:30, backgroundColor:"yellow"}}>The golden eggs</Text>
        <Text> </Text>
        <Text> Once upon a time, there lived a cloth merchant in a village with his wife and two children. They were indeed quite well-off. They had a beautiful hen which laid an egg every day. It was not an ordinary egg, rather, a golden egg. But the man was not satisfied with what he used to get daily. He was a get rich-trice kind of a person.

The man wanted to get all the golden eggs from his hen at one single go. So, one day he thought hard and at last clicked upon a plan. He decided to kill the hen and get all the eggs together.

So, the next day when the hen laid a golden egg, the man caught hold of it, took a sharp knife, chopped off its neck and cut its body open.  There was nothing but blood all around & no trace of any egg at all. He was highly grieved because now he would not get even one single egg.

His life was going on smoothly with one egg a day but now, he himself made his life miserable. The outcome of his greed was that he started becoming poorer & poorer day by day and ultimately became a pauper. How jinxed and how much foolish he was.

    </Text>
      <Text> </Text>
       <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('HomeScreen')}>
              <Text style={{ fontSize:20, color:"white"}}>Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{ 
     alignItems: 'center',
     justifyContent: 'center',
     marginTop: 100 
    },
 
    buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor:"green",
    margin: 10,
    width: 200,
    height: 50,
  }
})





