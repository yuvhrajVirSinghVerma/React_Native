import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { CheckBox, Pressable, StyleSheet, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import Multiselect from 'multiselect-react-dropdown';
import { default as ReactSelect } from "react-select";
import { input } from "./ip";
import { output } from "./op";

export default function App() {
  let [val, setValue] = useState("");
  let [options,setoptions]=useState({})

  useEffect(()=>{
    let obj={}
    
    input.map((i)=>{
      // 
      let arr=[]
      i.filters.map((ele)=>{
        let newobj={}
        newobj["label"]=ele.record_id
        newobj["value"]=ele.record_id
        arr.push(newobj)
      })
      obj[i.filterCode]=arr
    })
    setoptions(obj)
    console.log(obj)
    
  },[])


  // console.log(input);

  // let converted_data = {};
  // input.map((i) => {
  //   let arr=[]
  //   i.filters.map((ele) => {
  //         arr.push(ele)
  //   });
  //   converted_data[i.filterCode]=arr
  // });
  // console.log("converted : ",converted_data);
  // console.log("original output    : ",output)

  //========================
  // let options=[]
  // let test = {};
  // input.map((i) => {
  //   test[i.filterCode] = i.filters;
    
  //   i.filters.map((ele)=>{
  //     let obj={}
  //     obj["label"]=ele.record_id
  //     obj["value"]=ele.record_id
  //     options.push(obj)
  //   })
    
  // });
  // setKey(keys)



let map=new Map();
function handleChange(val){
  if(val[0]!=undefined)select.push(val[0].label)
  
}

// function handleclose(){
//   let uniqueArray = Array.from(new Set(select));
//   localStorage.setItem("value",JSON.stringify(uniqueArray))
// }
  return (
    <View style={styles.container}>
      {input.map((i,ind) => {
        // console.log(i.filters);

        return (
          <View key={ind} >
            <Text
            //  onPress={() => {
            //   // console.dir(e.target.nextElementSibling.style.display)
            //   // isvis?e.target.nextElementSibling.style.display="":e.target.nextElementSibling.style.display="none"
            //   // console.log(isvis)
            //   // setisvis(!isvis)
            // }}
            >{i.filterCode}</Text>

            <View>
            <ReactSelect 
            showCheckbox
            // Value={val}
            onChange={(val)=>handleChange(val)}
            // onMenuClose={()=>handleclose()}
        
            options={options[i.filterCode]}
            displayValue="label"
            ></ReactSelect>
              {/* {i.filters.map((ele) => {
                let options=[]
                let obj={}
                obj["label"]=ele.record_id
                obj["value"]=ele.record_id
                options.push(obj)
                return (
                  <View>
                    <Text>{ele.record_id}</Text>
                    <ReactMultiSelectCheckboxes options={options}></ReactMultiSelectCheckboxes>
                  </View>
                );
              })
              } */}
            </View>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"row",
    backgroundColor: "#fff",
    justifyContent:"space-between",
    // alignItems:"center"
  },
  
  
  
});
