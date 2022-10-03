import React from "react";
import './Home.css'
import photo from "./resources/IMG-0502-a.jpg"
import gmail from "./resources/gmail-logo-2.png"
import github from "./resources/github.png"

function Home() {
    return (
        <div>
            <div className="container">
                <div className="inner-container">
                    <div className="border">
                        <div className="top">
                            <div className="image">
                                <img src={photo} alt="" />
                            </div>
                            <div className="social">
                                <div className="contact">
                                    <img src={gmail} alt="" />
                                </div>
                                <div className="github">
                                    <img src={github} alt="" />
                                </div>
                            </div>
                            
                        </div>
                        <div className="intro">
                            <div className="left">
                                <div className="intro-top">
                                    Welcome.
                                </div>
                                <div className="intro-bottom">
                                    My name is Sean Narron - a Frontend Developer based in Huntington Beach, California, USA. <br />
                                    I have developed crud apps, chat apps, and am able to utilize backend data on the frontend. <br /><br />
                                    I'm passionate about learnig how the front and the backend work together to create web apps.
                                </div>
                            </div>
                            <div className="right">
                                <div className="projects">
                                    Projects
                                    <div className="project-list">
                                        <table>
                                            <tr>
                                                <td><a href="">project1</a></td><br />
                                            </tr>
                                            <tr>
                                                <td><a href="">project2</a></td><br />
                                            </tr>
                                            <tr>
                                                <td><a href="">project3</a></td><br />
                                            </tr>
                                            
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <footer>ABC</footer> */}
                        <div className="footer">
                            <footer>2022 seannarron.com</footer>
                        </div>
                    </div>
                </div>
            </div>
                
         
            
            
        </div>
    )
}

export default Home