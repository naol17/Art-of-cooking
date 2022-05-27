import React, { useLayoutEffect, useRef, useState } from "react";
import { ScrollView, Text, View, Image, Dimensions, TouchableHighlight } from "react-native";
import styles from "./styles";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { getIngredientName, getCategoryName, getCategoryById } from "../../data/MockDataAPI";
import BackButton from "../../components/BackButton/BackButton";
import ViewIngredientsButton from "../../components/ViewIngredientsButton/ViewIngredientsButton";

const { width: viewportWidth } = Dimensions.get("window");

export default function RecipeScreen(props) {
    const { navigation, route } = props;
  
    const item = route.params?.item;
    const category = getCategoryById(item.categoryId);
    const title = getCategoryName(category.id);
  
    const [activeSlide, setActiveSlide] = useState(0);
  
    const slider1Ref = useRef();
  
    useLayoutEffect(() => {
      navigation.setOptions({
        headerTransparent: "true",
        headerLeft: () => (
          <BackButton
            onPress={() => {
              navigation.goBack();
            }}
          />
        ),
        headerRight: () => <View />,
      });
    }, []);
    const renderImage = ({ item }) => (
        <TouchableHighlight>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: item }} />
          </View>
        </TouchableHighlight>
      );
    
      const onPressIngredient = (item) => {
        var name = getIngredientName(item);
        let ingredient = item;
        navigation.navigate("Ingredient", { ingredient, name });
      };
      return (
        <ScrollView style={styles.container}>
          <View style={styles.carouselContainer}>
            <View style={styles.carousel}>
              <Carousel
                ref={slider1Ref}
                data={item.photosArray}
                renderItem={renderImage}
                sliderWidth={viewportWidth}
                itemWidth={viewportWidth}
                inactiveSlideScale={1}
                inactiveSlideOpacity={1}
                firstItem={0}
                loop={false}
                autoplay={false}
                autoplayDelay={500}
                autoplayInterval={3000}
                onSnapToItem={(index) => setActiveSlide(0)}
              />      