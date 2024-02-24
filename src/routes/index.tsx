import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeRoutes } from "./safe.routes";
import { UnsafeRoutes } from "./unsafe.routes";

export function Routes() {
  const isAuthenticated = true;

  return (
    <View style={{ backgroundColor: "#ffffff", flex: 1 }}>
      <NavigationContainer>
        {isAuthenticated ? <SafeRoutes /> : <UnsafeRoutes />}
      </NavigationContainer>
    </View>
  )
}