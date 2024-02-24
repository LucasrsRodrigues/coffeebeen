import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomePage } from "@screens/HomePage";

import HomeIcon from "@assets/icons/menu/home.svg";
import CoffeeIcon from "@assets/icons/menu/coffee.svg";
import ProfileIcon from "@assets/icons/menu/profile.svg";
import TagIcon from "@assets/icons/menu/tag.svg";
import { Caffee } from "@screens/Caffee";
import { Reward } from "@screens/Reward";
import { Profile } from "@screens/Profile";
import { useTheme } from "styled-components/native";

const { Navigator, Screen } = createBottomTabNavigator();

export function TabsRoutes() {
  const { colors } = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary_500
      }}
    >
      <Screen
        name="HomePage"
        component={HomePage}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size, focused }) => (
            <HomeIcon
              fill={focused ? color : "none"}
              stroke={focused ? colors.white : colors.secondary_300}
            />
          )
        }}
      />

      <Screen
        name="CoffePage"
        component={Caffee}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size, focused }) => (
            <CoffeeIcon
              fill={focused ? color : "none"}
              stroke={focused ? colors.white : colors.secondary_300}
            />
          )
        }}
      />

      <Screen
        name="RewardPage"
        component={Reward}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size, focused }) => (
            <TagIcon
              fill={focused ? color : "none"}
              stroke={focused ? colors.white : colors.secondary_300}
            />
          )
        }}
      />

      <Screen
        name="ProfilePage"
        component={Profile}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size, focused }) => (
            <ProfileIcon
              fill={focused ? color : "none"}
              stroke={focused ? colors.white : colors.secondary_300}
            />
          )
        }}
      />
    </Navigator>
  )
}