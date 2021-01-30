import React  from 'react';
import { StyleSheet,View, Text, TouchableOpacity,Image } from 'react-native';
import { DrawerNavigatorItems } from 'react-navigation-drawer';
import {DrawerActions } from 'react-navigation-drawer'
import { Feather } from '@expo/vector-icons'
import avatar from '../../assets/avatar.jpeg'

function Drawer({navigation, ...props}) {

  
  return (
    <View style={styles.container}>
             <View style={{flexDirection:'row', justifyContent:'space-between',borderBottomWidth:1, backgroundColor:'#444'}}>
             <View style={{padding:10,marginTop:30,}}>
             <Image source={avatar} style={styles.avatar} />
             <Text style={{marginVertical:10, fontWeight:'bold', fontSize:15, color:'#fff'}}>Gustavo Marques</Text>
             </View>
             <TouchableOpacity
                 onPress={ () => navigation.dispatch(DrawerActions.closeDrawer())}
                >
                    <Feather name="x" color="#fff" size={30}   style={{ marginHorizontal:10, marginTop:40}}/>
                </TouchableOpacity>
             </View>
       <DrawerNavigatorItems  {... props} />
      
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop:20
  },
  avatar:{ 
     width:70,
     maxWidth:70, 
     height:70, 
     borderRadius:50,
     borderWidth:3,
     borderColor:'#fff'
    }
});


export default Drawer;