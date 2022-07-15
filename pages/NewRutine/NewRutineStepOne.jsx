import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
  SafeAreaView,
} from "react-native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
} from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";
import AfiliateSelector from "../../components/AfiliateSelector";

const NewRutineStepOne = ({
  rutineForm,
  setRutineForm,
  afiliatesOrderedByGroup,
  setSelectedTab,
  selectedTab,
}) => {
  const afiliatesEntries = Object.entries(afiliatesOrderedByGroup);

  const handleSelectAfiliate = (afiliate) => {
    setRutineForm({
      ...rutineForm,
      userId: afiliate._id,
    });
  };
  const TopMenu = ({ children }) => {
    return (
      <View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: 64,
            borderBottomColor: "gray",
            borderBottomWidth: 1,
          }}
        >
          {rutineForm.userId ? (
            <TouchableOpacity
              onPress={() =>
                setRutineForm({
                  userId: null,
                  days: null,
                })
              }
            >
              <Text>x</Text>
            </TouchableOpacity>
          ) : (
            <View>
              <Text>Atras</Text>
            </View>
          )}
          <View>
            <Text>Seleccionar</Text>
          </View>
          {rutineForm.userId ? (
            <TouchableOpacity onPress={() => setSelectedTab("B")}>
              <Text>Adelante</Text>
            </TouchableOpacity>
          ) : (
            <View>
              <Text></Text>
            </View>
          )}
        </View>
        {children}
      </View>
    );
  };

  const renderEachAfiliate = (afiliate) => {
    return (
      <AfiliateSelector
        handleOnPress={handleSelectAfiliate}
        afiliate={afiliate.item}
        rutineForm={rutineForm}
        key={afiliate.item._id}
      ></AfiliateSelector>
    );
  };

  const renderAlphabetically = (group) => {
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "column",

          //alignItems: "start",
        }}
      >
        <View style={{ width: 10 }}>
          <Text>{group.item[0]}</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingHorizontal: 10,
            width: "100%",
          }}
        >
          <FlatList
            data={group.item[1]}
            renderItem={renderEachAfiliate}
            keyExtractor={(item) => item._id}
          ></FlatList>
          {/*  {group[1]?.map((afiliate) => {
              return (
                <AfiliateSelector
                  handleOnPress={handleSelectAfiliate}
                  afiliate={afiliate}
                  rutineForm={rutineForm}
                  key={afiliate.id}
                ></AfiliateSelector>
              );
            })}*/}
        </View>
      </View>
    );
  };
  return (
    <View>
      <TopMenu>
        <View style={{ paddingHorizontal: 20 }}>
          <View>
            <Text>Lista de afiliados</Text>
          </View>
          <SafeAreaView>
            <FlatList
              data={afiliatesEntries}
              renderItem={renderAlphabetically}
              keyExtractor={(item) => item[0]}
            ></FlatList>
          </SafeAreaView>
        </View>
      </TopMenu>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontFamily: "Roboto_400Regular",
  },
  imageCn: {
    width: "100%",
    height: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  boxChallenge: {
    height: 75,
    width: 75,
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  imageCnWithForm: {
    width: "100%",
    height: "35%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  imageAndTextCn: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "45%",
  },
  image: {
    width: 100,
    height: 100,
  },
  firstText: {
    color: "#B4B4B4",
  },
  container: {
    height: "100%",
    //display: 'flex',
    backgroundColor: "#fff",
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  btnCn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    width: "100%",
    height: 50,
  },
  blueBtn: {
    backgroundColor: "#08318B",
  },
  transparentBtn: {
    marginTop: 20,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#E5E5E5",
  },
  blueBtnText: {
    color: "#FFFFFF",
    fontSize: 10,
  },
  transparentBtnText: {
    color: "#08318B",
    fontSize: 10,
  },
  linesAndTextCn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 10,
  },
  linesCn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "90%",
  },
  line: {
    backgroundColor: "#B4B4B4",
    height: 1,
    width: "45%",
  },
  inputCn: {
    marginTop: 20,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#E5E5E5",
  },
  inputCnFocused: {
    borderColor: "#08318B",
  },
  input: {
    width: "100%",
    marginLeft: 16,
  },
});
export default NewRutineStepOne;
