import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  Platform,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import {
  Feather,
  FontAwesome5,
  FontAwesome,
  AntDesign,
  Ionicons,
} from "@expo/vector-icons";
import { WebView } from "react-native-webview";
import Spinner from "react-native-loading-spinner-overlay";
//const HOME_URL = "https://movieverse2024.site";

// const HOME_URL = "https://www.palette-mobile.store/not-login";
// const DIARY_URL = "https://www.palette-mobile.store/date-diary";
// const GALLERY_URL = "https://www.palette-mobile.store/date-album";
// const CLOTHES_URL = "https://www.palette-mobile.store/date-clothes";
// const MAP_URL = "https://www.palette-mobile.store/dateplanner";
// const BOARD_URL = "https://www.palette-mobile.store/board-guestbook";
// const CHATTING_URL = "https://www.palette-mobile.store/Chat";

const HOME_URL = "https://www.palette-mobile.store/not-login";
const DIARY_URL = "https://www.palette-mobile.store/date-diary";
const GALLERY_URL = "https://www.palette-mobile.store/date-album";
const CLOTHES_URL = "https://www.palette-mobile.store/date-clothes";
const MAP_URL = "https://www.palette-mobile.store/dateplanner";
const BOARD_URL = "https://www.palette-mobile.store/board-guestbook";
const CHATTING_URL = "https://www.palette-mobile.store/Chat";


const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: styles.tabBarStyle,
        activeTintColor: "#e91e63",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeMenu}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Feather name={"home"} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Diary"
        component={Diary}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name={"calendar"} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Gallery"
        component={Gallery}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name={"image"} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Clothes"
        component={Clothes}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name={"skin"} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name={"map-marked-alt"} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Board"
        component={Board}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name={"clipboard"} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Chatting"
        component={Chatting}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name={"chatbubbles-outline"} color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function HomeMenu({ navigation }) {
  const webViewRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useFocusEffect(
    React.useCallback(() => {
      webViewRef.current.injectJavaScript(`location.href=${HOME_URL}`);
      setLoading(false);
    }, [])
  );

  function LoadAnimation() {
    return <Spinner visible={loading} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <WebView
        ref={webViewRef}
        onLoad={() => setLoading(false)}
        source={{ uri: HOME_URL }}
      />
      {loading && <LoadAnimation />}
    </SafeAreaView>
  );
}

function Diary({ navigation }) {
  const webViewRef = useRef(null);
  const [loading, setLoading] = useState(true);

  function LoadAnimation() {
    return <Spinner visible={loading} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <WebView
        ref={webViewRef}
        onLoad={() => setLoading(false)}
        source={{ uri: DIARY_URL }}
      />
      {loading && <LoadAnimation />}
    </SafeAreaView>
  );
}
function Gallery({ navigation }) {
  const webViewRef = useRef(null);
  const [loading, setLoading] = useState(true);

  function LoadAnimation() {
    return <Spinner visible={loading} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <WebView
        ref={webViewRef}
        onLoad={() => setLoading(false)}
        source={{ uri: GALLERY_URL }}
      />
      {loading && <LoadAnimation />}
    </SafeAreaView>
  );
}
function Clothes({ navigation }) {
  const webViewRef = useRef(null);
  const [loading, setLoading] = useState(true);

  function LoadAnimation() {
    return <Spinner visible={loading} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <WebView
        ref={webViewRef}
        onLoad={() => setLoading(false)}
        source={{ uri: CLOTHES_URL }}
      />
      {loading && <LoadAnimation />}
    </SafeAreaView>
  );
}
function Map({ navigation }) {
  const webViewRef = useRef(null);
  const [loading, setLoading] = useState(true);

  function LoadAnimation() {
    return <Spinner visible={loading} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <WebView
        ref={webViewRef}
        onLoad={() => setLoading(false)}
        source={{ uri: MAP_URL }}
      />
      {loading && <LoadAnimation />}
    </SafeAreaView>
  );
}
function Board({ navigation }) {
  const webViewRef = useRef(null);
  const [loading, setLoading] = useState(true);

  function LoadAnimation() {
    return <Spinner visible={loading} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <WebView
        ref={webViewRef}
        onLoad={() => setLoading(false)}
        source={{ uri: BOARD_URL }}
      />
      {loading && <LoadAnimation />}
    </SafeAreaView>
  );
}



function Chatting({ navigation }) {
  const webViewRef = useRef(null);
  const [loading, setLoading] = useState(true);

  function LoadAnimation() {
    return <Spinner visible={loading} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>안녕하세요. 여기는 Chatting 입니다.</Text>
    </SafeAreaView>
  );
}

function Setting({ navigation }) {
  const webViewRef = useRef(null);
  const [loading, setLoading] = useState(true);

  function LoadAnimation() {
    return <Spinner visible={loading} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>안녕하세요. 여기는 Setting 입니다.</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  tabBarStyle: {
    ...Platform.select({
      ios: {
        height: 60,
        paddingTop: 8,
        paddingBottom: 8,
        marginBottom: 10,
      },
      android: {
        height: 60,
        paddingTop: 8,
        paddingBottom: 8,
        // marginBottom: 10, // 안드로이드에서는 marginBottom을 제외
      },
    }),
  },
});
