import { useNavigation } from '@react-navigation/native';
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

function Login() {

  const navigation=useNavigation();

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <ImageBackground
            style={styles.defaultBg}
            resizeMode="cover"
            source={require('../../assets/images/auth_bg.jpg')}
          />
          <View style={{padding: 10,marginTop:15}}>
            <View style={{position: 'absolute', top: -150, left: 10}}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image
                  resizeMode="contain"
                  source={require('../../assets/images/eve.jpg')}
                  style={{width: 150, height: 150, borderRadius: 50, borderWidth: 1, borderColor: 'rgb(100,120,255)'}}
                />
              </View>
            </View>

            <View style={styles.formInput}>
              <TextInput
                style={styles.textInput}
                placeholder="Your Email Address"></TextInput>
            </View>
            <View style={styles.formInput}>
              <TextInput
                style={styles.textInput}
                placeholder="Password"
                secureTextEntry={true}></TextInput>
            </View>
            <View style={styles.formInput}>
              <TouchableOpacity onPress={()=>{navigation.navigate("Forget")}}>
                <Text
                  style={{
                    color: '#db2218',
                    textAlign: 'right',
                    fontSize: 16,
                    fontWeight: 'bold',
                  }}>
                  Forgot password?
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.formInput}>
              <TouchableOpacity style={styles.defaultButton} onPress={()=>{navigation.navigate("Home")}}>
                <Text
                  style={{textAlign: 'center', fontSize: 16, color: 'white',fontWeight:"bold"}}>
                  Login
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.formInput}>
              <Text style={{textAlign: 'center', fontSize: 16, color: 'gray'}}>
                or
              </Text>
            </View>
            <View style={styles.formInput}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <TouchableOpacity style={{marginRight: 10}}>
                  <Image
                    source={require('../../assets/images/google.png')}
                    style={{width: 30, height: 30, borderRadius: 1000}}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={{marginLeft: 10}}>
                  <Image
                    source={require('../../assets/images/facebook.png')}
                    style={{width: 30, height: 30, borderRadius: 1000}}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.formInput}>
              <View
                style={{
                  height: 1,
                  backgroundColor: '#ddd',
                  width: '100%',
                }}></View>
            </View>
            <View style={styles.formInput}>
              <TouchableOpacity  onPress={()=>{navigation.navigate("Register")}}>
                <Text
                  style={{
                    color: '#bbb',
                    textAlign: 'left',
                    fontSize: 16,
                    fontWeight: 'bold',
                  }}>
                  Don't Have an Account? <Text style={{color:"rgb(100,100,255)"}}>Register Now</Text>
                </Text>
              </TouchableOpacity>
            </View>
          </View>
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
    borderColor: 'rgb(100,120,255)'
  },
  defaultButton: {
    padding: 12,
    backgroundColor: 'rgb(100,100,255)',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgb(100,120,255)'
  },
});

export default Login;
