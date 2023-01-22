import React from "react";
import About from "../components/About";
import Contact from "../components/Contacts";
import Edu from "../components/Education";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import eli from '../images/eli.jpg'
const Home =()=>{
    return(
        <>
            <div className="homeWrapper">
                    <a id='home'/>
                    <div className="banner">
                     <div className="control"></div>
                     <div className="bannerholder">
                        <img src={eli}/>
                     </div>
                        </div>
                    <div className="bannerCover">
                        <div className="contextHolder">
                            <div className="contextWrapper">
                                <h3>I'm Elias Wanyama<span>.</span></h3>
                                <p>“Any fool can write code that a computer can understand. Good programmers 
                                    write code that humans can understand.” – Martin Fowler</p>
                                <button><a href="mailto:eliwanyax@gmail.com"><i className="fa fa-envelope" aria-hidden="true"></i>  Hire me</a></button>   
                            </div>   
                        </div> 
                    </div>   
                </div>
                <About/>
                <Skills/>
                <Projects/>
                <Edu/>
                <Contact/>
        </>
    )
}
export default Home