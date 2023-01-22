import React,{useEffect, useState} from "react";
import { useParams ,useLocation} from "react-router-dom";
const Videos=()=>{
    const [play,setPlay] =useState([])
    const {state} = useLocation();
     let item= state.vidId
    function Play (){
        if(item){
            setPlay([item])
        }
        console.log(state)
    }

  useEffect(()=>{
   Play()
  },[])
    return(
       <div className='Vidcover'>
         <div className="videoWrapper">
           {play.map((item,i)=>{
            return(
                <video key={i} controls src={item.url}></video>
            )
           })}
        </div>
       </div>
    )
}
export default Videos