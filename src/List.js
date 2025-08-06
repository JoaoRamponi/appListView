import React , {UseState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Alert, Image } from 'react-native';

export default function List() {
    const names = [
        {id: 0, nome: 'João', idade: 13, Img: require('../assets/0.webp')},
        {id: 1, nome: 'Pedro', idade: 28, Img: require('../assets/1.jpg')},
        {id: 2, nome: 'Isaque', idade: 8, Img: require('../assets/2.jpg')},
        {id: 3, nome: 'Fabricio', idade: 23, Img: require('../assets/3.jpg')},
        {id: 4, nome: 'Anthony', idade: 10, Img: require('../assets/4.jpg')},
        {id: 5, nome: 'Kaio', idade: 17, Img: require('../assets/5.jpg')},
        {id: 6, nome: 'Xairo', idade: 31, Img: require('../assets/6.jpg')},
        {id: 7, nome: 'Maria', idade: 19, Img: require('../assets/7.jpg')},
        {id: 8, nome: 'Luiz', idade: 23, Img: require('../assets/8.jpg')},
        {id: 9, nome: 'Carlos', idade: 11, Img: require('../assets/9.jpg')},
    ]

    const renderItens = () => {
        return names.map((item) => (
            <TouchableOpacity
            key={item.id}
            style={styles.botao}
            onPress={() => alertItemName(item)}>

                <View style={styles.item}>
                    <Image source={item.Img} style={styles.imagem}></Image>
                    <Text style={styles.texto}> {item.nome} </Text>
                </View>

            </TouchableOpacity>
        ));
    };

    const alertItemName = (item) => {
        alert("Olá seja bem vindo: \nNome: "+ item.nome + "\nIdade: " + item.idade);
    }

    return (
        <ScrollView contentContainerStyle ={styles.container}>
            <Image source={require('../assets/inicio.jpg')} style={styles.imagem2}></Image>
            <Text style={styles.texto}> Lista de Pessoas </Text>
            {renderItens()}
        </ScrollView>
    )
}


const styles = StyleSheet.create({
  container: {
    marginTop: 35
  },
  
  botao: {
    padding: 16,
    marginTop: 3,
    backgroundColor: '#002EDB',
    alignItems: 'center',
    borderBottomWidth: 7,
    borderBottomColor: '#9F64DB'
  },

  texto: {
    fontSize: 22,
    color: '#000',
    fontWeight: 'bold',
    alignSelf: 'center'
  },

  imagem: {
    width: 100,
    height: 100,
    borderRadius: 20,
    alignSelf: 'center'
  },

  imagem2: {
    width: 300,
    height: 300,
    borderRadius: 5,
    alignSelf: 'center'
  }
});
