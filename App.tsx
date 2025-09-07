// src/screens/SplashScreen.tsx

import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const SplashScreen = () => {
  // const navigation = useNavigation();

  return (
    <LinearGradient
      colors={["#8B5CF6", "#FF3CAC"]} // purple → neon pink
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      className="flex-1 items-center justify-center px-6"
    >
      {/* App Title */}
      <Text className="text-4xl font-sans font-extrabold text-white mb-3 tracking-tight">
        NOMAD
      </Text>

      {/* Tagline */}
      <Text className="text-white text-lg mb-12 text-center">
        Turn every kilometer into rewards.
      </Text>

      {/* Next Button */}
      <TouchableOpacity className="bg-white px-8 py-3 rounded-full shadow-lg active:opacity-80">
        <Text className="text-neonPink text-lg font-semibold">Next →</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default SplashScreen;
