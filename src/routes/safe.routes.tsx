import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TabsRoutes } from "./tabs.routes";

const { Navigator, Screen } = createNativeStackNavigator();

export function SafeRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen name="TabsRoutes" component={TabsRoutes} />
    </Navigator>
  )
}