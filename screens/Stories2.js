import React, { Component } from 'react';
import { Text, View, TouchableOpacity,StyleSheet } from 'react-native';


export default class Stories2 extends Component {
  render() {
    return (
       <View style={styles.container}>
        <Text style={{ fontSize:30, backgroundColor:"yellow"}}>The thiefs story</Text>
        <Text> </Text>
        <Text> The Thiefs Story is written by Ruskin Bond. The story is about a young fifteen-year-old boy, Hari Singh, who befriended people in order to rob them. One day, he met Anil during a wrestling match. Anil was a twenty-five-year-old man who was leading his life casually. He was a struggling writer who would make small money with his writing prowess. Hari flattered Anil by trying to befriend him and asked him for some work.

Anil asked Hari if he could cook, to which the young boy replied affirmatively. Hearing this, Anil took him to his room and promised to teach Hari how to read, write, add numbers and cook delicious meals. Sometimes, Anil would give a rupee to Hari as a tip for his efforts. One fine day, Anil received a bundle of notes for his published articles. He kept the money under his mattress, and Hari happened to notice this. At midnight, when Anil was fast asleep, Hari stealthily slipped his hand and stole the money kept under the mattress. He immediately left for the railway station to board a train to Lucknow. Unfortunately, he missed the train and wandered across the streets. As it was pouring heavily, he got drenched completely.

Soon, Hari began to feel agitated and was regretful for stealing money from an honest man like Anil, who treated him so well. He felt guilty for cheating Anil, who taught him how to read and write his name and add numbers. Suddenly, Hari Singh had a change of heart, and he decided to return to Anil. Although the notes had become soggy due to rain, he kept the money in the same spot from where he retrieved it. The following day, when he woke up, he found Anil was normal as usual. The young man offered Hari fifty rupees and said that he had rightfully earned it. Anil further said that he would pay Hari regularly. However, when Hari touched the money, he realised that the money was still damp. Hari understood that Anil was aware of his misdeed the previous night, but the young man still didn’t treat him with disgust or hand him over to the police. On the contrary, Anil promised to teach Hari how to write full sentences. After this incident, Hari Singh was filled with gratitude and respect for Anil, and he decided to mend his ways and become a noble human being like Anil.
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





