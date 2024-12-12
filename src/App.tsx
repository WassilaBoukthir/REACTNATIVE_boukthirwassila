import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ProductList from './screens/ProductList';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ProductList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
});

export default App;
