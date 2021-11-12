import {catchClause} from '@babel/types';
import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';

const App = () => {
  const [numero, setNumero] = useState(0);

  let valorMaxRandom = 999;

  function handleNumero() {
    const novo_numero = Math.floor(Math.random() * valorMaxRandom);
    setNumero(novo_numero);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Gerador de Números Aleatórios</Text>
      <View style={styles.areaView}>
        <Text style={styles.numero}>{numero}</Text>
        <TouchableOpacity onPress={handleNumero} style={styles.botao}>
          <Text>Gerar Número</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.rodape}>Gera valores de 0 a {valorMaxRandom}</Text>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ff6666',
    flex: 1,
    alignItems: 'center',
  },
  titulo: {
    color: '#ffe433',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingVertical: 25,
    paddingHorizontal: 10,
    backgroundColor: '#4EC5F1',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  areaView: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  numero: {
    fontSize: 34,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  botao: {
    backgroundColor: '#ffffff',
    width: '80%',
    paddingHorizontal: 5,
    paddingVertical: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  rodape: {
    paddingVertical: 20,
    color: '#ffffff',
  },
});
