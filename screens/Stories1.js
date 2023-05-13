import React, { Component } from 'react';
import { Text, View, TouchableOpacity,StyleSheet } from 'react-native';


export default class Stories1 extends Component {
  render() {
    return (
       <View style={styles.container}>
        <Text style={{ fontSize:30, backgroundColor:"yellow"}}>A Question of Trust</Text>
        <Text> </Text>
        <Text> The story is about a 50 year old man who makes locks and lives with his housekeeper. He is a good citizen but not an honest one as he commits a robbery every year. He plans his robberies in such a way that the money he gets from there lasts him for at least an year and he is able to buy rare and expensive books with it. He buys these books because he is really fond of collecting rare and expensive books. He plans to commit a robbery at a grange named Shotover Grange. He takes all the information about the house like where the family had gone, how many servants were there in the house, what was the name of the dog, the wiring in the house, the safe in the house and even information like how much worth of jewels were there in the safe. The real twist in the story comes when he reaches the grange to commit a robbery and a woman claiming to be the owner’s wife enters. She gives him an option that she will forget that she had seen him if he opens the safe for her as she has forgotten the code of the safe and has to go to a party. He does not realize that he is opening the safe for another thief and that she is not the actual owner of the house. He leaves happily thinking that he is safe but doesn’t realize the fact that he had opened the safe for someone else that too without wearing his gloves. 3 days later a police officer comes and arrests him saying that his fingerprints had been found at the shot-over grange. He then realizes that he had been fooled by a lady who was herself a thief and from the same background as his. He is sent to the jail and becomes an assistant librarian. He feels angry whenever someone talks about honor among thieves as he had been cheated by one from his community.
    </Text>
      <Text> </Text>
       <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('HomeScreen')}>
              <Text style={{ fontSize:0, color:"white"}}>Back</Text>
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





