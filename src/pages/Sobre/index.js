import React from 'react';
import { StyleSheet, Linking, Text, View, Image, ScrollView } from 'react-native';
import { DrawerActions } from 'react-navigation-drawer'
import { Header } from 'react-native-elements'
import { Feather } from '@expo/vector-icons';

import avatar from '../../assets/avatar.jpeg'
import banner from '../../assets/banner.png'


export default function Sobre({ navigation }) {
  return (
    <>
      <Header
        leftComponent={<Feather name="menu" color="#fff" size={25} onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />}
        centerComponent={<Text style={{ color: '#F6F5F5', fontSize: 15 }}>Sobre</Text>}
        containerStyle={{
          backgroundColor: '#000',
          paddingTop: 40,
          borderBottomWidth: 2,
          borderBottomColor: '0px 4px 4px rgba(0, 0, 0, 0.25),blur(4px)'

        }}
      />
      <ScrollView style={styles.container}>
        <View >
          <Image source={banner} style={styles.banner} />
        </View>
        <View >
          <Text style={styles.title}>Sobre o Aplicativo</Text>
          <Text style={styles.text}>O aplicativo <Text style={{fontWeight:'bold'}}>Aprova Dev</Text> foi criado para avaliar o desempenho na elaboração de aplicativos otimizados para
             a plataforma Android com o framework React Native.
           </Text>
        </View>
        <View >
          <Text style={styles.title}>Versão 1.0.0</Text>
          <Text style={styles.text}>Essa versão contempla todas funcionalidades exigidas para avaliar o nivel de programação de um desenvolvedor React Native: {'\n'}{'\n'}
             - Navegação via menu Drawer (Hamburguer).{'\n'}
             - Criação de loader como splash screen {'\n'}
             - Estilização do Componente Menu {'\n'}
             - Lista de pedidos dinamicos {'\n'}
             - Filtro pesquisa em lista dinamica de pedidos{'\n'}
             - Criação de formulário de cadastro{'\n'}
             - Criação de paginas e componentes
            </Text>
        </View>
        <View>
          <Text style={styles.title}>Sobre o Autor</Text>
          <View style={styles.avatarView}>
            <Image source={avatar} style={styles.avatar} />
            <Text style={styles.avatarName}>Gustavo Marques,</Text>
          </View>
          <View>
            <Text style={styles.text}>Sou programador há 3 anos. Comecei a codar com a ajuda de um amigo já programador
              que me mostrou o caminho. Dali para a frente eu não parei mais. Estudei, HTML, CSS, Wordpress e comecei a fazer alguns sites
              para pequenos empresários.
              {'\n'}
              {'\n'}
              Logo após, tive o prazer de iniciar em um agência de publicidade, onde tive a oportunidade de colocar mais ideias em prática
              e realizar projetos maiores, desenhando os websites e após desenvolvendo. Após essa experiencia incrível, fui para um startup
              a qual presenciei a ascensão de mercado e metas de desenvolvimento sendo batidas.
              {'\n'}
              {'\n'}
              Sou entusiasta de um projeto de aplicativo, que foi elaborado por conta da pandemia para que todos prestadores de serviços de minha cidade,
              pudesse anunciar serviços e criar um perfil com informaçãoes sobre pagamento e seu dia a dia.
            </Text>
          </View>
          <View>
            <Text style={styles.title}>Redes Sociais</Text>
            <View style={styles.iconsView}>
              <Feather name="github" color="#000" size={30} style={{ marginRight: 15 }}
                onPress={() =>
                  Linking.canOpenURL("https://github.com/gusmarques/").then(supported => {
                    if (supported) {
                      return Linking.openURL(
                        `https://github.com/gusmarques/`
                      );
                    } else {
                      return Linking.openURL(
                        `https://github.com/gusmarques/`
                      );
                    }
                  })}
              />
              <Feather name="linkedin" color="#000" size={30}
                onPress={() =>
                  Linking.canOpenURL("https://www.linkedin.com/in/gustavomarques-36014a71/").then(supported => {
                    if (supported) {
                      return Linking.openURL(
                        `https://www.linkedin.com/in/gustavomarques-36014a71/`
                      );
                    } else {
                      return Linking.openURL(
                        `https://www.linkedin.com/in/gustavomarques-36014a71/`
                      );
                    }
                  })}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff',
    padding:10

  },
  title: {
    fontSize:17,
    marginVertical:20,
    fontWeight:'bold'
  },
  text: {
    fontSize: 14,
  },
  avatarView: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginVertical:10
  },
  avatar: {
    width:70,
    maxWidth:70,
    height:70,
    borderRadius:50
  },
  avatarName:{
    marginHorizontal:10,
    fontSize:15,
    fontWeight:'bold'
  },
  iconsView: {
    flexDirection:'row',
    marginVertical:10,
    marginBottom:40
  },
  banner:{
    width: undefined, 
    height: 150, 
    borderRadius: 10 
  }
});
