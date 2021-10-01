import React from "react";
import { StyleSheet, ScrollView, Text, Image } from "react-native";

const Info = ({ data, status = true }) => {
  const {
    order = "",
    name = "",
    height = "",
    weight = "",
    base_experience = "",
    abilities = [],
    held_items = [],
    moves = [],
    sprites = {},
  } = data;

  const abl = abilities.map((item) => item?.ability)?.map((item) => item?.name) || [];
  const held = held_items.map((item) => item?.item)?.map((item) => item?.name) || [];
  const mv = moves.map((item) => item?.move)?.map((item) => item?.name) || [];
  const sp = Object.values(sprites)?.filter((item) => item && typeof item == "string") || [];

  const Items = ({ data }) =>
    data.map((item, key) => (
      <Text key={key}>
        {key != 0 && <Text> , </Text>}
        <Text>{item}</Text>
      </Text>
    ));

  return (
    <ScrollView style={styles.container}>
      {status && (
        <>
          <Text style={styles.textWrapper}>
            <Text style={styles.text1}>order : </Text>
            <Text style={styles.text2}>{order}</Text>
          </Text>

          <Text style={styles.textWrapper}>
            <Text style={styles.text1}>name : </Text>
            <Text style={styles.text2}>{name}</Text>
          </Text>

          <Text style={styles.textWrapper}>
            <Text style={styles.text1}>height : </Text>
            <Text style={styles.text2}>{height}</Text>
          </Text>

          <Text style={styles.textWrapper}>
            <Text style={styles.text1}>weight : </Text>
            <Text style={styles.text2}>{weight}</Text>
          </Text>

          <Text style={styles.textWrapper}>
            <Text style={styles.text1}>base experience : </Text>
            <Text style={styles.text2}>{base_experience}</Text>
          </Text>

          <Text style={styles.textWrapper}>
            <Text style={styles.text1}>abilities : </Text>
            <Text style={styles.text2}>
              <Items data={abl} />
            </Text>
          </Text>

          <Text style={styles.textWrapper}>
            <Text style={styles.text1}>held items : </Text>
            <Text style={styles.text2}>
              <Items data={held} />
            </Text>
          </Text>

          <Text style={styles.textWrapper}>
            <Text style={styles.text1}>moves : </Text>
            <Text style={styles.text2}>
              <Items data={mv} />
            </Text>
          </Text>

          <Text style={styles.textWrapper2}>
            <Text style={styles.text1}>sprites : </Text>
            {sp.map((item, key) => (
              <Image
                key={key}
                source={{
                  uri: item,
                }}
                style={styles.image}
              />
            ))}
          </Text>
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 40,
  },
  textWrapper: {
    marginBottom: 5,
  },
  textWrapper2: {},
  text1: {
    fontSize: 16,
    fontWeight: "bold",
  },
  text2: {
    fontSize: 16,
  },
  image: {
    width: 96,
    height: 96,
  },
});

export default Info;
