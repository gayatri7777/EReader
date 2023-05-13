import React, { Component } from 'react';
import { Text, View, TouchableOpacity,StyleSheet } from 'react-native';


export default class Stories3 extends Component {
  render() {
    return (
       <View style={styles.container}>
        <Text style={{ fontSize:30, backgroundColor:"yellow"}}>The fox and the grapes</Text>
        <Text> </Text>
        <Text> A fox lived in a  forest. One day, he was very hungry. It was a hot summer day. He went out of his place and wandered here and there. He is looking up for some food. He visited many places in search of food. Finally, he found a vineyard a mile away. 

He ran and reached there. He saw a chubby bear near the vineyard. The chubby bear asked him politely, “Where are you going?'' The hungry fox glared at him. The chubby bear again tried to ask him the same but before he could complete his question, the ravenous fox entered into the vineyard.

He saw the multicoloured bunches of grapes in the vineyard. He was amazed and became very happy. His mouth started watering. He wished to eat all at once. He jumped to catch the grapes and tried to eat them. But he got nothing, not even a single bunch. He was not close enough to any branch.

He jumped high again and again but failed to catch all the time. His all efforts were of no use as the grapes were far away from his reach. 

He went away from the vineyard. On his way, he again met with the chubby bear. Now, the chubby bear asked him, “Have you eaten the grapes?”.

He said, “The grapes were sour. If I eat them, I might fall ill.”

Moral of the Story
We should accept our incapabilities. If the situation is difficult or uncontrollable, we should use our minds to solve it. Also, we should not hesitate to seek help from our friends and elders. The most important lesson of the story is that it is easy to despise what you cannot have.

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





