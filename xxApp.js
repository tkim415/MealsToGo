import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurents.screen';
import { ThemeProvider } from 'styled-components/native'
import { theme } from './src/infrastructure/theme'
import { Text } from 'react-native'
import { Oswald_400Regular } from '@expo-google-fonts/oswald'
import { Lato_400Regular } from '@expo-google-fonts/lato'
import { useFonts } from 'expo-font'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeArea } from './src/components/utility/safe-area.components';
import { Ionicons } from '@expo/vector-icons'
import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.context';

// console.log(StatusBar.currentHeight)

const Tab = createBottomTabNavigator()

const TAB_ICON = {
  Restaurants: "restaurant",
  Map: "map",
  Settings: "settings"
}

const Settings = () => <SafeArea><Text>Settings</Text></SafeArea>

const Map = () => <SafeArea><Text>Map</Text></SafeArea>
const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name]

  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  }
}

export default function App() {

  const [fontsLoaded] = useFonts({
    Oswald_400Regular,
    Lato_400Regular
  })

  if (!fontsLoaded) {
    return <Text>Loading...</Text>
  }

  return (
    <>
      <ThemeProvider theme={theme} >
        <RestaurantsContextProvider>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={createScreenOptions}
              tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
              }}
            >
              <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
              <Tab.Screen name="Map" component={Map} />
              <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
          </NavigationContainer>
        </RestaurantsContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
