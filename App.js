import React from "react";
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import Home from "./src/screens/Home";
import Login from "./src/screens/auth/Login";
import Register from "./src/screens/auth/Register";
import Forget from "./src/screens/auth/Forget";
import AppRouter from "./src/router/router";
import Eve from "./src/screens/eve";

function App() {
  return (
    <AppRouter/>
  );
}

export default App;
