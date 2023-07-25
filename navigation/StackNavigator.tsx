import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'


const ProfileStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();


function HomeStackScreens() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="HomeScreen" component={HomeScreen} options={{title:""}}></HomeStack.Screen>
        </HomeStack.Navigator>
    )
}

function ProfileStackScreens() {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen name="HomeScreen" component={ProfileScreen}></ProfileStack.Screen>
        </ProfileStack.Navigator>
    )
}

const Tab = createBottomTabNavigator();




function Navigation() {

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home"
                    component={HomeStackScreens}
                    options={{
                        tabBarLabel: 'Home',
                        headerShown: false,
                        tabBarLabelStyle: { color: 'black' },
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <Entypo name="home" size={24} color="black" />

                            ) : (
                                <AntDesign name="home" size={24} color="black" />
                            )
                    }} />
                <Tab.Screen name="ProfileScreen" component={ProfileStackScreens}
                    options={{
                        tabBarLabel: 'Profile',
                        headerShown: false,
                        tabBarLabelStyle: { color: 'black' },
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <Ionicons name="person" size={24} color="black" />

                            ) : (
                                <Ionicons name="person-outline" size={24} color="black" />
                            )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
export default Navigation