import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import TopMenu from "../../components/TopMenu";
import { lang } from "../../env";
import useObjectives from "../../repositories/useObjectives";
import useTrainingLevel from "../../repositories/useTrainingLevel";
import { filterByLang } from "../../utils/utils";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import LevelSelector from "../../components/LevelSelector";
import useDays from "../../repositories/useDays";

const NewRutineStepThree = ({
  rutineForm,
  setRutineForm,
  afiliatesOrderedByGroup,
  setSelectedTab,
  selectedTab,
}) => {
  const { days, loadingDays } = useDays();
  const { trainingLevels, loadingTrainingLevels } = useTrainingLevel();
  const [levelsByLanguageSelected, setLevelsByLanguageSelected] = useState([]);
  const [objectivesByLanguageSelected, setObjectivesByLanguageSelected] =
    useState([]);

  useEffect(() => {
  console.log(days)
  }, [days]);
  const handleSelectLevel = (level) => {
    console.log(level);
    setRutineForm({
      ...rutineForm,
      levelId: level._id,
    });
  };
  const handleSelectObjective = (objective) => {
    console.log(objective);
    setRutineForm({
      ...rutineForm,
      objectiveId: objective._id,
    });
  };
  const handleStepBack=()=>{
    setSelectedTab('A')
    setRutineForm({
      ...rutineForm,
      objectiveId:null,
      levelId:null
    })
  }
  console.log(rutineForm);
  const buttons = (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 64,
       
      }}
    >
        <View>
          <TouchableOpacity
            onPress={() => handleStepBack()}
          >
            <MaterialIcon
              name={"arrow-back"}
              color="black"
              size={25}
            ></MaterialIcon>
          </TouchableOpacity>
        </View>
      <View>
        <Text>Seleccionar dia</Text>
      </View>
      {rutineForm.objectiveId && rutineForm.levelId ? (
        <TouchableOpacity onPress={() => setSelectedTab("B")}>
          <MaterialIcon name={"check"} color="black" size={25}></MaterialIcon>
        </TouchableOpacity>
      ) : (
        <View>
          <MaterialIcon
            name={"check"}
            color="transparent"
            size={25}
          ></MaterialIcon>
        </View>
      )}
    </View>
  );
  return (
    <View style={styles.container}>
      <TopMenu buttons={buttons}>
     
      
      </TopMenu>
         <View style={{display:'flex',justifyContent:'space-evenly',alignItems:'center', height:'90%'}}>
       
        </View>
    </View>
  );
};
export default NewRutineStepThree;
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