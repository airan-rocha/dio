import React from 'react';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import foto from './assets/perfil.jpg';

import Card, {CardItem} from './Card';

const App = () => {
  function handleRedeSocial(url) {
    Linking.openURL(url);
  }

  return (
    <>
      <ScrollView style={styles.page}>
        <View style={styles.container_cabecalho}>
          <Image source={foto} style={styles.foto} />
          <Text style={styles.nome}>AIRAN BENTO ROCHA</Text>
          <Text style={styles.funcao}>Desenvolvedor Mobile</Text>
          <View style={styles.redes_sociais}>
            <Icon
              name="github"
              size={30}
              color="#000000"
              onPress={() => handleRedeSocial('https://github.com/airan-rocha')}
            />
            <Icon
              name="facebook"
              size={30}
              color="#000000"
              onPress={() =>
                handleRedeSocial('https://www.facebook.com/airansp')
              }
            />
            <Icon
              name="linkedin"
              size={30}
              color="#000000"
              onPress={() =>
                handleRedeSocial('https://www.linkedin.com/in/airan-rocha/')
              }
            />
          </View>
        </View>
        <Card titulo="Formação acadêmica">
          <CardItem>Analista de Sistemas</CardItem>
          <CardItem>Web designer developer</CardItem>
          <CardItem>Desenvolvedor React Native</CardItem>
        </Card>

        <Card titulo="Experiencia Profissional">
          <CardItem>Desenvolvimento de Apps Android</CardItem>
          <CardItem>Desenvolvimento de sites</CardItem>
          <CardItem>Amplo conhecimento de GitHib</CardItem>
        </Card>

        <Card titulo="Idiomas">
          <CardItem>Português (Nativo)</CardItem>
          <CardItem>Inglês (Intermediário)</CardItem>
        </Card>
      </ScrollView>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  page: {
    flex: 1,
    backgroundColor: '#e7e7e7',
  },
  container_cabecalho: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  foto: {
    width: 250,
    height: 250,
    borderRadius: 150,
    borderWidth: 2,
    borderColor: '#0000005c',
  },
  nome: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 10,
  },
  funcao: {
    color: '#939393',
    marginBottom: 10,
  },
  redes_sociais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 20,
  },
});
