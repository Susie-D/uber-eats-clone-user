import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import RestaurantFoodDetails from '../screens/RestaurantFoodDetails';
import BasketDetails from '../screens/BasketDetails';
import Orders from '../screens/Orders';
import RestaurantDetails from '../screens/RestaurantDetails';
import Home from '../screens/Home';
import OrdersDetails from '../screens/OrdersDetails';
import { Foundation, FontAwesome5, MaterialIcons } from '@expo/vector-icons';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='HomeTabs' component={HomeTabs} />
      <Stack.Screen
        name='Restaurant'
        component={RestaurantDetails}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator barStyle={{ backgroundColor: 'white' }}>
      <Tab.Screen
        name='Home'
        component={HomeStackNavigator}
        options={{
          tabBarIcon: () => <Foundation name='home' size={24} color='black' />,
        }}
      />
      <Tab.Screen
        name='Orders'
        component={OrdersStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name='list-alt' size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Profile'
        component={Orders}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name='user-alt' size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const HomeStack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name='Restaurants' component={Home} />
      <HomeStack.Screen name='Restaurant' component={RestaurantDetails} />
      <HomeStack.Screen name='Dish' component={RestaurantFoodDetails} />
      <HomeStack.Screen name='Basket' component={BasketDetails} />
    </HomeStack.Navigator>
  );
};

const OrdersStack = createStackNavigator();

const OrdersStackNavigator = () => {
  return (
    <OrdersStack.Navigator>
      <OrdersStack.Screen name='Orders' component={Orders} />
      <OrdersStack.Screen name='Order' component={OrdersDetails} />
    </OrdersStack.Navigator>
  );
};

export default RootNavigator;
