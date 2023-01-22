import React,{useState} from "react";
const Vertical=({nav,setNav})=>{
    const [tab,setTab]=useState('tab1')
    const handleTab1 =()=>{
        setTab('tab1')
    }
    const handleTab2 =()=>{
            setTab('tab2')  
    }
    const handleTab3 =()=>{
            setTab('tab3')
    }
    const handleTab4 =()=>{
            setTab('tab4')
    }
    const handleTab5 =()=>{
            setTab('tab5')
    }
    const handleTab6 =()=>{
            setTab('tab6')
    }
    return(
        <div className={'verticalNavWrapper  showNav'}>
          <nav>
          <ul>
                <li onClick={handleTab1}  className={tab==='tab1'?'activeTab':""}><a href="#home">Home</a></li>
                <li onClick={handleTab2}   className={tab==='tab2'?'activeTab':""}><a href="#about">About</a></li>
                <li  onClick={handleTab3} className={tab==='tab3'?'activeTab':""}><a href="#skill">Skills</a></li>
                <li onClick={handleTab4}  className={tab==='tab4'?'activeTab':""}><a href="#project">Projects</a></li>
                <li onClick={handleTab5} className={tab==='tab5'?'activeTab':""}><a href="#edu">Education</a></li>
                <li onClick={handleTab6} className={tab==='tab6'?'activeTab':""}><a href="#contact">Contact</a></li>
          </ul>
          </nav>
        </div>
    )
}
export default Vertical