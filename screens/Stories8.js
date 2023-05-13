[
{
        "title": "The Midas Touch",
        "author": "Saurabh Aswani",
        "created_on": "14th February, 2021",
        "description": "A story of a king and his greed.",
        "story": "In ancient Greek, there was a king named Midas. He had a lot of gold and everything he needed. He also had a beautiful daughter. Midas loved his gold very much, but he loved his daughter more than his riches.\n\nOne day, a Satyr named Silenus got drunk and passed out in Midas’ rose garden. Believing that Satyrs always bring good luck, Midas let Silenus rest in his palace until he is sober, against the wishes of his wife and daughter. Silenus is a friend of Dionysus, the God of wine and celebration. Upon learning Midas’s kindness towards his friend, Dionysus decides to reward the King.\n\nWhen asked to wish for something, Midas says, “I wish everything I touch turns to gold”. Although Dionysus knew it was not a great idea, he granted Midas his wish.\n\nHappy that his wish was granted, Midas went around touching random things in the garden and his palace and turned them all into gold. He touched an apple, and it turned into a shiny gold apple. His subjects were astonished but happy to see so much gold in the palace.\n\nIn his happiness, Midas went and hugged his daughter, and before he realized it, he turned her into a lifeless, golden statue! Aghast, Midas ran back to the garden and called for Dionysus. He begged Him to take away his power and save his daughter. Dionysus gives Midas a solution to change everything back to how it was before the wish. Midas learned his lesson and lived the rest of his life contended with what he had.\n\n",
        "moral": "Do not get greedy. Be happy and content with what you have."
    }  
]
import React, { Component } from 'react';
import { Text, View, TouchableOpacity,StyleSheet } from 'react-native';


export default class Stories8 extends Component {
  render() {
    return (
       <View style={styles.container}>
        <Text style={{ fontSize:30, backgroundColor:"yellow"}}>The Midas Touch</Text>
        <Text> </Text>
        <Text> In ancient Greek, there was a king named Midas. He had a lot of gold and everything he needed. He also had a beautiful daughter. Midas loved his gold very much, but he loved his daughter more than his riches.One day, a Satyr named Silenus got drunk and passed out in Midas’ rose garden. Believing that Satyrs always bring good luck, Midas let Silenus rest in his palace until he is sober, against the wishes of his wife and daughter. Silenus is a friend of Dionysus, the God of wine and celebration. Upon learning Midas’s kindness towards his friend, Dionysus decides to reward the King.When asked to wish for something, Midas says, “I wish everything I touch turns to gold”. Although Dionysus knew it was not a great idea, he granted Midas his wish.Happy that his wish was granted, Midas went around touching random things in the garden and his palace and turned them all into gold. He touched an apple, and it turned into a shiny gold apple. His subjects were astonished but happy to see so much gold in the palace.In his happiness, Midas went and hugged his daughter, and before he realized it, he turned her into a lifeless, golden statue! Aghast, Midas ran back to the garden and called for Dionysus. He begged Him to take away his power and save his daughter. Dionysus gives Midas a solution to change everything back to how it was before the wish. Midas learned his lesson and lived the rest of his life contended with what he had.

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





