import React,{useEffect,useState} from 'react';
import { Text, View } from 'react-native';
import { lang } from '../../env';
import useObjectives from '../../repositories/useObjectives';
import useTrainingLevel from '../../repositories/useTrainingLevel';
import { filterByLang } from '../../utils/utils';

const NewRutineStepTwo=()=>{
    const {objectives,loadingObjectives}=useObjectives()
    const {trainingLevels,loadingTrainingLevels}=useTrainingLevel()
    const [levelsByLanguageSelected,setLevelsByLanguageSelected]=useState([])
    const [objectivesByLanguageSelected,setObjectivesByLanguageSelected]=useState([])
    useEffect(() => {
   if(objectives.length>0 && trainingLevels.length>0){
 
    const trainingLevelsFilteredByLang=filterByLang(trainingLevels)
const objectivesFilteredByLang=filterByLang(objectives)

    setLevelsByLanguageSelected(trainingLevelsFilteredByLang)
    setObjectivesByLanguageSelected(objectivesFilteredByLang)
   }
  
    }, [objectives,trainingLevels])
    
    return <View>
        {levelsByLanguageSelected.map((level)=>{
            return <Text key={level._id}>{level.value}</Text>
        })}
        {objectivesByLanguageSelected.map((level)=>{
            return <Text key={level._id}>{level.value}</Text>
        })}
    </View>
}
export default NewRutineStepTwo