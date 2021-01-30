import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image,ScrollView } from 'react-native';
import { DrawerActions } from 'react-navigation-drawer'
import { Feather } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons';
import { Header } from 'react-native-elements'
import axios from 'axios';


export default function Pedidos({ navigation }) {

  const [user, setUser] = useState([])
  const [userSearch, setUsers] = useState([])
  const [search, setSearch] = useState('')
  const [controlApi, setControlApi] = useState(false);



  useEffect(() => {

    if (controlApi === false) {
      async function loadUser() {
        const response = await axios.get('https://api.mocki.io/v1/00184612', {

        })
        setUser(response.data)
        setUsers(response.data)

      }
      loadUser()
      setControlApi(true)

    } else {
      setUsers(user.filter(item => item.title.includes(search)));
    }

  }, [search,])


  return (
    <>
      <Header
        leftComponent={<Feather name="menu" color="#fff" size={25} onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />}
        centerComponent={<Text style={{ color: '#F6F5F5', fontSize: 15 }}>Meus Pedidos</Text>}
          containerStyle={{
          backgroundColor:'#000',
          paddingTop:'15%',
          borderBottomWidth:2,
          borderBottomColor:'0px 4px 4px rgba(0, 0, 0, 0.25),blur(4px)'

        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.searchSection}>
          <FontAwesome style={styles.searchIcon} name="search" size={20} color='#000' />
          <TextInput
            style={styles.searchBar}
            ref={(ref) => { ref }}
            placeholder="Pesquise o Pedido desejado"
            onChangeText={text => { setSearch(text.charAt(0).toUpperCase() + text.slice(1)) }}
            keyExtractor={search => search._id.toString()}
            value={search}
            placeholderTextColor='#000'
            placeholderTextSize="10"
          />
        </View>
         {userSearch.map(item => (
          <View style={{ flexDirection:'row', marginHorizontal: 10, marginVertical: 10, alignItems: 'center', padding: 10 }}
            key={item.title}
             >
            <Image source={{ uri: item.image }} style={{ width: 50, height: 50, marginRight: 20 }} />
            <Text key={item.title}>{item.title}</Text>
          </View>
           ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginLeft: 13,
    marginRight: 10,
    marginVertical: 10,
    color: '#000',
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 20
  },
  searchIcon: {
    padding: 10,
    paddingHorizontal: 10,
  },
  searchBar: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#000',
    fontSize: 13,
    textTransform: 'capitalize',
    borderRadius: 10

  },
});
