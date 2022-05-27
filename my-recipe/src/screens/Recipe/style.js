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
      paginationContainer: {
        flex: 1,
        position: 'absolute',
        alignSelf: 'center',
        paddingVertical: 8,
        marginTop: 200
      },
      paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 0
      },