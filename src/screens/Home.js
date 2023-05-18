import {NavigationContainer, useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

function Home() {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <ImageBackground
            style={styles.defaultBg}
            resizeMode="cover"
            source={require('../assets/images/lightPurpleBluebg.jpg')}
          />
          <View style={{padding: 10, marginTop: 15}}>
            <View style={{position: 'absolute', top: -150, left: 100}}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  display: 'flex',
                  flexDirection: 'row',
                }}>
                <Image
                  resizeMode="contain"
                  source={require('../assets/images/eve.jpg')}
                  style={{
                    width: 150,
                    height: 150,
                    borderRadius: 50,
                    borderWidth: 1,
                    borderColor: 'rgb(100,120,255)',
                  }}
                />
                <Text
                  style={{
                    fontSize: 40,
                    color: 'rgb(110,120,255)',
                    fontWeight: 'bold',
                    width: '100%',
                    height: '100%',
                    top: '10%',
                    left: 10,
                  }}>
                  Eve
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{flex: 1, alignItems: 'center'}}>
          <TouchableOpacity
            style={styles.defaultButton}
            onPress={() => {
              navigation.navigate('Eve');
            }}>
            <Text style={styles.defaultButtonText}>Chat</Text>
          </TouchableOpacity>
        </View>

        <View style={{flex: 1, alignItems: 'center'}}>
          <TouchableOpacity
            style={styles.defaultButton}
            onPress={() => {
              navigation.navigate('About');
            }}>
            <Text style={styles.defaultButtonText}>About</Text>
          </TouchableOpacity>
        </View>

        <View style={{flex: 1, alignItems: 'center'}}>
          <TouchableOpacity
            style={{
              padding: 10,
              backgroundColor: 'rgb(200,100,100)',
              borderRadius: 10,
              borderWidth: 1,
              borderColor: 'rgb(200,120,100)',
              width: 100,
              marginBottom: 15,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>


      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  defaultBg: {
    width: '100%',
    height: 200,
  },
  formInput: {
    marginTop: 10,
    padding: 5,
  },
  textInput: {
    padding: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#a5f',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgb(100,120,255)',
  },
  defaultButton: {
    padding: 10,
    backgroundColor: 'rgb(100,100,255)',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgb(100,120,255)',
    width: 100,
    marginBottom: 15,
  },
  defaultButtonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Home;
