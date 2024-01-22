import { FlatList, Image, View, Text, StyleSheet } from 'react-native';
import orders from '../../assets/data/orders.json';
import restaurants from '../../assets/data/restaurants.json';
import BasketDetailsItem from '../components/BasketDetailsItem/BasketDetailsItem';

const order = orders[0];

const OrderDetailsHeader = () => {
  return (
    <View style={styles.page}>
      <Image source={{ uri: order.Restaurant.image }} style={styles.image} />
      <View styles={styles.container}>
        <Text style={styles.title}>{order.Restaurant.name}</Text>
        <Text key={order.Restaurant.id} style={styles.subtitle}>
          {order.status} - 2 days ago
        </Text>
        <Text style={styles.menuTitle}>Your orders</Text>
      </View>
    </View>
  );
};

const OrdersDetails = () => {
  return (
    <View>
      <FlatList
        ListHeaderComponent={OrderDetailsHeader}
        data={restaurants[0].dishes}
        renderItem={({ item }) => <BasketDetailsItem basketDish={item} />}
      />
    </View>
  );
};

export default OrdersDetails;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  iconContainer: {
    position: 'absolute',
    top: 40,
    left: 10,
  },
  imageIcon: {},
  image: {
    width: '100%',
    aspectRatio: 4 / 3,
  },
  menuTitle: {
    marginVertical: 10,
    fontSize: 24,
    fontWeight: 600,
    letterSpacing: 0.7,
    marginLeft: 10,
    marginTop: 20,
  },
  title: {
    fontSize: 35,
    fontWeight: '600',
    marginVertical: 10,
    margin: 10,
  },
  subtitle: {
    fontSize: 15,
    color: '#525252',
    marginLeft: 10,
  },
});
