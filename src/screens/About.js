import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

function About() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <ImageBackground
            style={styles.defaultBg}
            resizeMode="cover"
            source={require('../assets/images/lightPurpleBluebg.jpg')}
          />
          <View style={styles.profileContainer}>
            <Image
              resizeMode="contain"
              source={require('../assets/images/eve.jpg')}
              style={styles.profileImage}
            />
            <Text style={styles.appName}>Eve</Text>
          </View>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>
            Welcome to Eve, your intelligent Companion AI for enhanced chat
            experiences. Designed and developed by Chandima Prabath, also known
            as Prince Hans, Eve brings a new level of interaction and assistance
            to your conversations. With Eve by your side, you can enjoy
            personalized suggestions, smart responses, and seamless integration
            with your favorite messaging apps. Discover the power of Eve and let
            her elevate your chats like never before.
          </Text>
          <Text style={styles.infoText}>
            Eve is continuously evolving and improving to provide you with the
            best experience. While currently in the early development phase,
            this Eve client app allows you to interact with the pre-alpha
            version of Eve. We appreciate your feedback and support as we work
            towards creating the perfect Eve for you.
          </Text>
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
  profileContainer: {
    top: -170,
    padding: 10,
    marginTop: 15,
    alignItems: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 1,
    borderColor: 'rgb(100, 120, 255)',
  },
  appName: {
    fontSize: 40,
    color: 'rgb(110, 120, 255)',
    fontWeight: 'bold',
    marginTop: 10,
  },
  infoContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    top: -150,
  },
  infoText: {
    textAlign: 'center',
    fontSize: 16,
  },
});

export default About;
