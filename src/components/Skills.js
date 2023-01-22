import React,{useState} from "react";
const Skills =()=>{
    const [htm,setHTML] = useState("90%")
    const [react,setReact] = useState("80%")
    const [native,setNAtive] = useState("70%")
    const [typescript,setTs] = useState("30%")
    return(
        <section className="skillsWrapper">
            <a id='skill'></a>
            <h3>My Skills</h3>
            <span className="skillSpan"></span>
            <div className="skillsContainer">
                <div className="skillHolder"> 
                    <div  className="languageWrapper"><p>HTML & CSS</p>
                    <p>{htm}</p>
                    </div>
                    <div className="barWrapper"><div className="bar" style={{width:`${htm}`}}></div></div>
                </div>
                <div  className="skillHolder"> 
                    <div className="languageWrapper"><p>React</p>
                    <p>{react}</p>
                    </div>
                    <div className="barWrapper"><div className="bar" style={{width:`${react}`}}></div></div>
                </div>
                <div  className="skillHolder"> 
                    <div className="languageWrapper"><p>React Native</p>
                    <p>{native}</p>
                    </div>
                    <div className="barWrapper"><div className="bar" style={{width:`${native}`}}></div></div>
                </div>
                <div  className="skillHolder"> 
                    <div className="languageWrapper"><p>Typescript</p>
                    <p>{typescript}</p>
                    </div>
                    <div className="barWrapper"><div className="bar" style={{width:`${typescript}`}}></div></div>
                </div>
            </div>
        </section>
    )
}
export default Skills