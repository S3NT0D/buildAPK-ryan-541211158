import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/login/login-screen';
import Register from './src/screens/register/register';
import Index from './src/screens/index';
import Xiirpl1 from './src/screens/class/xiirpl1';
import Xiirpl5 from './src/screens/class/xiirpl5';
import Adds from './src/screens/add-student/adds';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar style='auto' />
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Index" component={Index} />
        <Stack.Screen name="Xiirpl1" component={Xiirpl1} />
        <Stack.Screen name="Xiirpl5" component={Xiirpl5} />
        <Stack.Screen name="Adds" component={Adds} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
