import * as React from 'react';
import { View, Text ,SafeAreaView,StyleSheet,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

function HomeScreen() {
    return (
      <SafeAreaView style={{ flex: 1, paddingHorizontal:20,backgroundColor:'white'}}>
          <View style={styles.header}>
              <View>
                  <Text>Welcome to</Text>
                  <Text>Plant shop</Text>
              </View>
              <Icon name="bacon"/>
          </View>
          <View style={styles.searchContainer}>
              <Icon name="search"/>
              <TextInput placeholder="search" />
          </View>
          
      </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    header:{
        marginTop:30,
        flexDirection:'row',
        justifyContent:'space-between'

    },
    searchContainer:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'gray',
        paddingHorizontal:20
    }
    
})
export default HomeScreen;