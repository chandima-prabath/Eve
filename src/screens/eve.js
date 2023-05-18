import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
  ImageBackground,
} from 'react-native';

function Eve() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    try {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({message: message}),
      };

      const response = await fetch(
        'http://192.168.8.101:5000/eve/res',
        requestOptions,
      );
      const data = await response.json();

      // Set the response data to the state variable
      setResponse(data);

      // Add the message and response to the messages array
      setMessages([...messages, {message, response: data}]);

      // Clear the message input field
      setMessage('');
    } catch (error) {
      console.error(error);
    }
  };

  const handleTextInputSubmit = () => {
    sendMessage();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={{height:"100%"}} source={require("../assets/images/eve.jpg")}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
        keyboardShouldPersistTaps="handled">
        
          <View style={{marginBottom: 40}}>
            {messages.map((msg, index) => (
              <View key={index} style={styles.messageContainer}>
                <Text style={styles.messageText}>{msg.message}</Text>
                <View
                  style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 12,
                      marginRight: 10,
                    }}
                    source={require('../assets/images/eve.jpg')}
                  />
                  <Text style={styles.responseText}>
                    {JSON.stringify(msg.response)}
                  </Text>
                </View>
              </View>
            ))}
          </View>
      </ScrollView>
      </ImageBackground>
      <KeyboardAvoidingView
        style={{position: 'absolute', bottom: 0, width: '100%'}}
        behavior="margin">
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Message"
            style={styles.input}
            onChangeText={text => setMessage(text)}
            value={message}
            onSubmitEditing={handleTextInputSubmit}
          />
          <TouchableOpacity style={styles.button} onPress={sendMessage}>
            <Text style={styles.buttonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  messageContainer: {
    margin: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: 'rgba(110,130,230,.8)',
    borderRadius: 10,
    borderColor: 'rgb(100,100,255)',
    borderWidth:1
  },
  scrollView: {
    
  },
  scrollViewContent: {
    paddingHorizontal: 10,
    paddingTop: 16,
    paddingBottom: 32,
  },
  messageText: {
    fontSize: 16,
    textAlign: 'right',
    marginRight: 5,
  },
  responseText: {
    fontSize: 16,
    color: 'rgb(50,50,50)',
    textAlign: 'left',
    fontStyle: 'italic',
    maxWidth:"90%"
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingBottom: 15,
    paddingTop: 10,
    borderTopWidth: 1,
    borderColor: 'rgb(100,120,255)',
    backgroundColor: 'rgb(110,130,230)#',
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: 'rgb(100,120,255)',
    borderRadius: 15,
    marginRight: 8,
    backgroundColor: 'rgb(100,120,255)',
  },
  button: {
    backgroundColor: 'rgb(100,100,255)',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'rgb(100,120,255)',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Eve;
