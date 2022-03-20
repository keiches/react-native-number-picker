import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import NumberPicker from '../../src';

export default function App() {
  const initialValues = [{id: 'pizza', value: 3}];
  const [pizzas, setPizzas] = React.useState(initialValues);
  const pizzaNumbers = [{id: 'pizza', label: '🍕', min: 0, max: 99}];
  return (
    <View style={styles.container}>
      <Text>Picker</Text>
      <NumberPicker
        items={pizzaNumbers}
        values={pizzas}
        onChange={values => setPizzas(values)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
