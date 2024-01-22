import { View, Text, Image } from 'react-native';
import restaurants from '../../assets/data/restaurants.json';
import { styles } from './RestaurantDetailsStyles';

const restaurant = restaurants[0];

const RestaurantDetailsHeader = () => {
  return (
    <View>
      <Image source={{ uri: restaurant.image }} style={styles.image} />
      <View styles={styles.container}>
        <Text style={styles.title}>{restaurant.name}</Text>
        <Text key={restaurant.id} style={styles.subtitle}>
          {`$ ${restaurant.deliveryFee}` +
            ' • ' +
            `${restaurant.minDeliveryTime}-${restaurant.maxDeliveryTime} minutes`}
        </Text>
        <Text style={styles.menuTitle}>Menu</Text>
      </View>
    </View>
  );
};

export default RestaurantDetailsHeader;
