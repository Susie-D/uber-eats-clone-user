import { View, Text, FlatList } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import DishListItem from '../components/DishListItem/DishListItem';
import RestaurantDetailsHeader from './RestaurantDetailsHeader';
import restaurants from '../../assets/data/restaurants.json';
import { styles } from './RestaurantDetailsStyles';
import { useRoute, useNavigation } from '@react-navigation/native';

const restaurant = restaurants[0];

const RestaurantDetails = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const id = route.params?.id;
  console.warn(id);

  return (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={() => (
          <RestaurantDetailsHeader restaurant={restaurant} />
        )}
        data={restaurant.dishes}
        key={restaurant.id}
        renderItem={({ item }) => <DishListItem dish={item} />}
        keyExtractor={(item) => item.name}
      />
      <Ionicons
        onPress={() => navigation.goBack()}
        name='arrow-back-circle'
        size={45}
        color='white'
        style={styles.iconContainer}
      />
    </View>
  );
};

export default RestaurantDetails;
