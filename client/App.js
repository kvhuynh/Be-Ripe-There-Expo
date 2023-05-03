import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button } from 'react-native';
import { testBackEnd } from "./src/services/internalApiService"

export default function App() {


  // useEffect(() => {
    
  // })

  return (
    <>   
    <SafeAreaView style={styles.container} >
      <Button title="press me" onPress={testBackEnd}></Button>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5DD',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
