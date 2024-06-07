// ExerciseList.jsx
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Animated, { FadeInDown } from 'react-native-reanimated';

const ExerciseList = ({ data }) => {
  const navigation = useNavigation();

  return (
    <View>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60, paddingTop: 20 }}
        columnWrapperStyle={{
          justifyContent: 'space-between'
        }}
        renderItem={({ item, index }) => <ExerciseCard navigation={navigation} index={index} item={item} />}
      />
    </View>
  );
};

const ExerciseCard = ({ item, navigation, index }) => {
  return (
    <Animated.View entering={FadeInDown.duration(400).delay(index * 200).springify()}>
      <TouchableOpacity onPress={() => navigation.navigate('exerciseDetails', { item })} style={styles.card}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: item.gifUrl }}
            style={styles.image}
          />
        </View>
        <Text style={styles.text}>
          {item?.name?.length > 20 ? item.name.slice(0, 20) + '...' : item.name}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    margin: 10,
  },
  imageContainer: {
    width: 150,
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  text: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default ExerciseList;
