import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from "react-native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
} from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";
import useAfiliates from "../../repositories/useAfiliates";
import { groupByKey } from "../../utils/utils";
import NewRutineStepOne from "./NewRutineStepOne";
import NewRutineStepTwo from "./NewRutineStepTwo";
import NewRutineStepThree from "./NewRutineStepThree";
import NewRutineStepFour from "./NewRutineStepFour";

const NewRutine = () => {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_400Regular_Italic,
  });
  const { afiliates, loadingAfiliates } = useAfiliates();
  const [afiliatesOrderedByGroup, setAfiliatesOrderedByGroup] = useState([]);
  const [selectedTab, setSelectedTab] = useState("A");
  const [rutineForm, setRutineForm] = useState({
    userId: null,
    days: null,
    objectiveId:null,
    levelId:null,
    trainingDays:[]
  });

const sortAfiliates=(usersFilteredByAfiliateRol)=>{
  usersFilteredByAfiliateRol.map((afiliate) => {
    afiliate.alphabet = afiliate.userName.split("")[0];
    return afiliate;
  });
  const sortedAfiliates=usersFilteredByAfiliateRol.sort((a, b) => a.userName.localeCompare(b.userName));
  return sortedAfiliates
}

  useEffect(() => {
    if (afiliates.length > 0) {
    
      const usersFilteredByAfiliateRol=afiliates.filter((afiliate)=>afiliate.roleId?.name!=="Trainer")
     
    

const sortAfiliatesResult=sortAfiliates(usersFilteredByAfiliateRol)

      const orderedAfiliates = groupByKey(sortAfiliatesResult, "alphabet");
    
      setAfiliatesOrderedByGroup(orderedAfiliates);
    }
  }, [afiliates]);


  const SelectedTab = () => {
    switch (selectedTab) {
      case "A":
        return (
        <NewRutineStepOne rutineForm={rutineForm} setRutineForm={setRutineForm} afiliatesOrderedByGroup={afiliatesOrderedByGroup} selectedTab={selectedTab} setSelectedTab={setSelectedTab}></NewRutineStepOne>
        )
      case "B":
        return (
        <NewRutineStepTwo rutineForm={rutineForm} setRutineForm={setRutineForm}  selectedTab={selectedTab} setSelectedTab={setSelectedTab}></NewRutineStepTwo>
        );
      case "C":
        return (
         <NewRutineStepThree rutineForm={rutineForm} setRutineForm={setRutineForm}  selectedTab={selectedTab} setSelectedTab={setSelectedTab}></NewRutineStepThree>
        );
        case "D":
        return (
         <NewRutineStepFour rutineForm={rutineForm} setRutineForm={setRutineForm}  selectedTab={selectedTab} setSelectedTab={setSelectedTab}></NewRutineStepFour>
        );
      default:
        return; 
    }
  };

  if (!fontsLoaded || !afiliates) {
    return <AppLoading />;
  }else if(afiliates.length===0){
    return (<View style={[styles.container, { paddingHorizontal: 20,display:'flex',justifyContent:'center',alignItems:'center' }]}>
    <ActivityIndicator size="large"  color="#0000ff"/>
  </View>)
  } else {
    return (
      <View style={[styles.container]}>
        {SelectedTab()}
      </View>
    );
  }
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
export default NewRutine;
