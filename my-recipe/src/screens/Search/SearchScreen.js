import React, { useEffect, useLayoutEffect, useState } from "react";
import { FlatList, Text, View, Image, TouchableHighlight, Pressable } from "react-native";
import styles from "./styles";
import MenuImage from "../../components/MenuImage/MenuImage";
import { getCategoryName, getRecipesByRecipeName, getRecipesByCategoryName, getRecipesByIngredientName } from "../../data/MockDataAPI";
import { TextInput } from "react-native-gesture-handler";

export default function SearchScreen(props) {
  const { navigation } = props;

  const [value, setValue] = useState("");
  const [data, setData] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <MenuImage
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),
      headerTitle: () => (
        <View style={styles.searchContainer}>
          <Image style={styles.searchIcon} source={require("../../../assets/icons/search.png")} />
          <TextInput
            style={styles.searchInput}
            onChangeText={handleSearch}
            value={value}
          />
          <Pressable onPress={() => handleSearch("")}>
          <Image style={styles.searchIcon} source={require("../../../assets/icons/close.png")} />
          </Pressable>
        </View>
      ),
      headerRight: () => <View />,
    });
  }, [value]);

  useEffect(() => {}, [value]);