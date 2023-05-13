import React, { Component } from 'react';
import { Text, View, TouchableOpacity,StyleSheet } from 'react-native';


export default class Stories4 extends Component {
  render() {
    return (
       <View style={styles.container}>
        <Text style={{ fontSize:30, backgroundColor:"yellow"}}>The honest woodcutter</Text>
        <Text> </Text>
        <Text> The Greek version of the story tells of a woodcutter who accidentally dropped his axe into a river and, because this was his only means of livelihood, sat down and wept. Taking pity on him, the god Hermes (also known as Mercury) dived into the water and returned with a golden axe. Was this what you had lost?, Hermes asked, but the woodcutter said it was not, and returned the same answer when a silver axe was brought to the surface. Only when his own tool is produced does he claim it. Impressed by his honesty, the god allows him to keep all three. Hearing of the man'\''s good fortune, an envious neighbor threw his own axe into the river and wailed for its return. When Hermes appeared and offered him a golden axe, the man greedily claimed it but was denied both that and the return of his own axe.
        Though the tale'\''s moral is that '\''Honesty is the best policy'\'', as the English proverb has it, there existed a medieval Byzantine proverb apparently alluding to the fable, which stated that '\''A river does not always bring axes'\''. But since this was glossed to mean that no person always acts consistently, it is obviously at a considerable remove from the story'\''s application.[3] The sequence of ideas that led to this understanding of the fable also exposes the gap in the envious neighbor'\''s logic. He had observed the proximate cause for enrichment, namely dropping an axe in the river, and overlooked the ultimate cause - the need for scrupulous honesty. The right combination of circumstances had to be there for Hermes to act as he did. Without them, as the neighbor eventually learned, '\''the river does not always bring (golden) axes
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





