import React from "react";
import eli from '../images/eli.jpg'
import doc from '../assets/Elias Resume.pdf'
const About =()=>{
    return(
        <section className="aboutWrapper">
            <a id='about'></a>
            <h3>About me</h3>
            <span className="headerSpan"></span>
            <div className="aboutDescriptionWrapper">
              <div className="me-image">
                 <img src={eli}/>
              </div>
              <div className="me-text">
                <p className="me"><span>Hi,</span><br/>I am Elias Wanyama a  web and mobile frontend  developer from Kenya, specialized  in react.js and react native</p>
                <div className="me-details-wrapper">
                    <div>
                        <p>Name: Elias Wanyama</p>
                        <p>Email: eliwanyax@gmail.com</p>
                    </div>
                    <div>
                        <p>Location: Nairobi,Kenya</p>
                    </div>
                </div>
                <div className="btnWrapper">
                    <button><a href= {doc} download="Wanyama Elias Resume"><i className="fa fa-download" aria-hidden="true"></i> download resume</a></button>
                    <button><a href="mailto:eliwanyax@gmail.com"><i className="fa fa-envelope" aria-hidden="true"></i>  Hire me</a></button>
                </div>
              </div>
            </div>
        </section>
    )
}
export default About