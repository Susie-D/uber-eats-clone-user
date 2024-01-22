import { FlatList, View, Text } from 'react-native';
import OrderListItem from '../components/OrderListItem/OrderListItem';
import orders from '../../assets/data/orders.json';

const Orders = () => {
  return (
    <View style={{ flex: 1, width: '100%', paddingTop: 50 }}>
      <FlatList
        data={orders}
        renderItem={({ item }) => <OrderListItem order={item} />}
      />
    </View>
  );
};

export default Orders;
