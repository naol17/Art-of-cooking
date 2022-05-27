import { StyleSheet, Dimensions } from 'react-native';

const { width: viewportWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
      },
      carouselContainer: {
        minHeight: 250
      },
      carousel: {},
      image: {
        ...StyleSheet.absoluteFillObject,
        width: '100%',
        height: 250
      },
      imageContainer: {
        flex: 1,
        justifyContent: 'center',
        width: viewportWidth,
        height: 250
      },