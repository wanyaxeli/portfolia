import React,{useState} from "react";
const Nav=()=>{
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
        <Nav>
            <ul>
            <li onClick={handleTab1}  className={tab==='tab1'?'activeNav':""}><a href="#home">Home</a></li>
             <li onClick={handleTab2}   className={tab==='tab2'?'activeNav':""}><a href="#about">About</a></li>
            <li  onClick={handleTab3} className={tab==='tab3'?'activeNav':""}><a href="#skill">Skills</a></li>
            <li onClick={handleTab4}  className={tab==='tab4'?'activeNav':""}><a href="#project">Projects</a></li>
            <li onClick={handleTab5} className={tab==='tab5'?'activeNav':""}><a href="#edu">Education</a></li>
            <li onClick={handleTab6} className={tab==='tab6'?'activeNav':""}><a href="#contact">Contact</a></li>              
            </ul>
        </Nav>
    )
}
export default Nav