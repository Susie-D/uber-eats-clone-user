import { FlatList, StyleSheet, View } from 'react-native';
import restaurants from '../../assets/data/restaurants.json';
import RestaurantItem from '../components/RestaurantItem/RestaurantItem';

const Home = () => {
  return (
    <View style={styles.page}>
      <FlatList
        data={restaurants}
        renderItem={({ item }) => <RestaurantItem restaurant={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});

export default Home;
