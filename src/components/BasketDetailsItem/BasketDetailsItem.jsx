import { View, Text, StyleSheet } from 'react-native';

const BasketDetailsItem = ({ basketDish }) => {
  return (
    <View style={styles.row}>
      <View style={styles.quantityContainer}>
        <Text style={styles.containers}>1</Text>
      </View>
      <Text style={{ fontWeight: 600 }}>{basketDish.name}</Text>
      <Text style={{ marginLeft: 'auto' }}>${basketDish.price}</Text>
    </View>
  );
};

export default BasketDetailsItem;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    paddingHorizontal: 10,
  },
  quantityContainer: {
    backgroundColor: 'lightgrey',
    paddingHorizontal: 5,
    marginRight: 5,
    paddingVertical: 2,
    borderRadius: 3,
  },
});
