import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import React,{useState,useEffect} from 'react'

let data=
  [
    {
      CHECK_LIST_ID: "1646",
      CHECK_LIST_NAME: "Purchase Order",
      CHECK_STATUS: "1",
      REMARKS: "",
      label: "Purchase Order",
      value:  "1646",
    },
    {
      CHECK_LIST_ID: "1647",
      CHECK_LIST_NAME: "Tech Pack",
      CHECK_STATUS: "1",
      REMARKS: "",
    },
    {
      CHECK_LIST_ID: "1648",
      CHECK_LIST_NAME: "Gold Seal Sample",
      CHECK_STATUS: "0",
      REMARKS: "",
    },
    {
      CHECK_LIST_ID: "1649",
      CHECK_LIST_NAME: "Vendor Production File",
      CHECK_STATUS: "0",
      REMARKS: "",
    },
    {
      CHECK_LIST_ID: "1650",
      CHECK_LIST_NAME: "FPT Report",
      CHECK_STATUS: "0",
      REMARKS: "",
    },
    {
      CHECK_LIST_ID: "1651",
      CHECK_LIST_NAME: "GPT Report",
      CHECK_STATUS: "1",
      REMARKS: "",
    },
    {
      CHECK_LIST_ID: "1652",
      CHECK_LIST_NAME: "Fabric Shrinkage Report",
      CHECK_STATUS: "0",
      REMARKS: "",
    },
    {
      CHECK_LIST_ID: "1653",
      CHECK_LIST_NAME: "Fit Approved Report",
      CHECK_STATUS: "0",
      REMARKS: "",
    }
]

let data2=
[
  {
    OBSER_FIXED_VALUE_ID: "1654",
    OBSER_FIXED_VALUE_NAME: "Fabric/Trims Inspection and Testing Audit",
    OBSERVATION: "aa",
    ACTIONS: "bb",
  },
  {
    OBSER_FIXED_VALUE_ID: "1655",
    OBSER_FIXED_VALUE_NAME: "Cutting Quality Audit",
    OBSERVATION: "cc",
    ACTIONS: "dd",
  },
  {
    OBSER_FIXED_VALUE_ID: "1656",
    OBSER_FIXED_VALUE_NAME: "Fusing Quality Audit",
    OBSERVATION: "",
    ACTIONS: "",
  },
  {
    OBSER_FIXED_VALUE_ID: "1657",
    OBSER_FIXED_VALUE_NAME: "Sewing Quality Audit",
    OBSERVATION: "",
    ACTIONS: "",
  },
  {
    OBSER_FIXED_VALUE_ID: "1658",
    OBSER_FIXED_VALUE_NAME: "Measurement Comments",
    OBSERVATION: "",
    ACTIONS: "",
  },
  {
    OBSER_FIXED_VALUE_ID: "1659",
    OBSER_FIXED_VALUE_NAME: "Other Comments",
    OBSERVATION: "",
    ACTIONS: "",
  },
]


export default function App() {

  let [val,setValue]=useState(null);
  let [val2,setValue2]=useState(null);
  let [isfocus,setisfocus]=useState(false)
  let [showSearch,setShowSearch]=useState(false)
  let [showerror,setShowerror]=useState(false)
  let [dt1,setdata]=useState(data)//data1
  let [dt2,setdata2]=useState(data2)//data2

  function handle(){
    console.log("called")
    val?setShowSearch(true):setShowSearch(false)
    val?setShowerror(false):setShowerror(true)

  }
//===============useEffect==============================
  useEffect(()=>{
    //for data1
  let arr=[]
    dt1.forEach((i)=>{
      arr.push({...i,label:i.CHECK_LIST_NAME,value:i.CHECK_LIST_ID})
    })
    setdata(arr)

//for data2
    let arr2=[]
    dt2.forEach((i)=>{
      arr2.push({...i,label:i.OBSER_FIXED_VALUE_NAME,value:i.OBSER_FIXED_VALUE_ID})
    })
    setdata2(arr2)


  },[])
  
  return (
    <View style={styles.container}>
      <View style={styles.dropdown_container}>
          <Text style={styles.label_text}>Val1  :</Text>
          <Dropdown style={styles.dropdown}
          placeholder={"Select Item"}
          //===================changes===============
          labelField="label"
          valueField='value'
          // ======================================
          data={dt1}
          searchPlaceholder="Search"
          search
          inputSearchStyle={styles.search}
          value={isfocus?val:"select item"}
          showsVerticalScrollIndicator={false}
          onChange={(val)=>{
            setValue(val.value)//changes
            setisfocus(true)
            setShowerror(false)
          }
          }
          onBlur={()=>setisfocus(false)}
          />
      </View>

{showerror?<Text style={styles.error}>Val1 can't be empty</Text>:<Text></Text>}

    <View style={styles.dropdown_container}>
      <Text style={styles.label_text}>Val2  :</Text>
      <Dropdown style={styles.dropdown}
            placeholder={val2?val2:"Select Item"}
            //===============changes=============
            labelField={"label"}
            valueField="value"
            //===================================
            data={val?dt2:[]}
            searchPlaceholder="Search"
            inputSearchStyle={styles.search}
            search={showSearch}
            value={val2}
            onFocus={()=>handle()}
            showsVerticalScrollIndicator={false}
            onChange={(val)=>{
              setValue2(val.value)}//changes
            }
            
            />
    </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    color:"red"
  },
  dropdown:{
    width:"170px",
    border :"2px solid #b119cf",
    marginBottom:"20px",
    height:70,

  },
  search:{
    height:40,
    width:100,
    border:0
  },
  error:{
    color:"red",
    position: "relative",
    left: "16px"
  },
  dropdown_container:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    width: "250px",
  },
  label_text:{
    color:"#1121e5",
    fontWeight:800
  }
});
