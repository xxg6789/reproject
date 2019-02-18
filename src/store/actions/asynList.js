import * as types from "../types";


const asynList=({type,url})=>(dispatch,getState)=>{
    dispatch({type:types.VIEW_LOADING,payload:true});
    fetch(
        url,

    ).then(

        res=>res.json()
    ).then(
        data=>{
            console.log("type",type)
            dispatch({type:types.VIEW_LOADING,payload:false});
            dispatch({type:type,payload:data});
            console.log("数据",data)
        }
    )
}

export default asynList;