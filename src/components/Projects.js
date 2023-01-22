import React from "react";
import eli from '../images/eli.jpg'
import { Data } from "./Data";
import { useNavigate } from "react-router-dom";
const Projects = ()=>{
    const navigate=useNavigate()
    const handleRediect=(id)=>{
        let vid= Data.find(item=>item.id === id)
        navigate('/video/:id',{state:{vidId:vid}})
    }
    return(
        <section className="projectWrapper">
            <a id='project'/>
             <h3>My Projects</h3>
            <span className="projectSpan"></span>
            <div className="projectContainer">
                {Data.map((item,index)=>{
                    return(
                    <div key={index} onClick={()=>handleRediect(item.id)} className="project">
                        <div className="projectImage">
                            <img src={item.image}/>
                        </div>
                        <div className="projectCover">
                            <p>{item.name}</p>
                        </div>
                    </div>
                    )
                })}
            </div>
            <div className="projoNoWrapper">
                <h4>20+</h4>
                <p>Projects completed</p>
            </div>
        </section>
    )
}
export default Projects