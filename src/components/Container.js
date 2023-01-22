import React,{useState} from "react";
import { Outlet,useLocation,useNavigate } from "react-router-dom";
import eli from '../images/eli.jpg'
import Links from "./Links";
import Nav from "./Nav";
import Vertical from "./VerticalNav";
const Container = ()=>{
    const navigate=useNavigate()
    const location = useLocation()
    const{pathname}=location
    const splitPath=pathname.split('/')
    const [tab,setTab]=useState('tab1')
    const [nav,setNav]=useState({display:'showNav'})
    const [show,setShow]=useState({show:''})
    const handleTab1 =()=>{
        setTab('tab1')
        navigate('/')
    }
    const handleTab2 =()=>{
            setTab('tab2')
            navigate('/')  
    }
    const handleTab3 =()=>{
            setTab('tab3')
            navigate('/')
    }
    const handleTab4 =()=>{
            setTab('tab4')
            navigate('/')
    }
    const handleTab5 =()=>{
            setTab('tab5')
            navigate('/')
    }
    const handleTab6 =()=>{
            setTab('tab6')
            navigate('/')
    }
    return(
        <section className="appContainer">
              <Vertical nav={nav} setNav={setNav}/>
        <div className="wrapper">
             <aside className="horizontalNav">
                <div className="innerAsideWrapper">
                    <div className="listContainer">
                        <img src={eli}/>
                        <div className="nameContainer">
                            <h3>Elias Wanyama<span>.</span> </h3>
                            <p>frontend developer</p>
                        </div>
                        {splitPath[1]===''?<ul>
                            <li onClick={handleTab1}  className={tab==='tab1'?'active':""}><a href="#home">Home</a></li>
                            <li onClick={handleTab2}   className={tab==='tab2'?'active':""}><a href="#about">About</a></li>
                            <li  onClick={handleTab3} className={tab==='tab3'?'active':""}><a href="#skill">Skills</a></li>
                            <li onClick={handleTab4}  className={tab==='tab4'?'active':""}><a href="#project">Projects</a></li>
                            <li onClick={handleTab5} className={tab==='tab5'?'active':""}><a href="#edu">Education</a></li>
                            <li onClick={handleTab6} className={tab==='tab6'?'active':""}><a href="#contact">Contact</a></li>
                        </ul>:<ul>
                            <li onClick={handleTab1}  className={tab==='tab1'?'active':""}>Home</li>
                            <li onClick={handleTab2}   className={tab==='tab2'?'active':""}>About</li>
                            <li  onClick={handleTab3} className={tab==='tab3'?'active':""}>Skills</li>
                            <li onClick={handleTab4}  className={tab==='tab4'?'active':""}>Projects</li>
                            <li onClick={handleTab5} className={tab==='tab5'?'active':""}>Education</li>
                            <li onClick={handleTab6} className={tab==='tab6'?'active':""}>Contact</li>
                        </ul>}
                    </div>
                </div>
             </aside>
            <main>
                <Links/>
            </main>
        </div>
        </section>
    )
}
export default Container