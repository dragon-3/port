import React, { useEffect } from "react";
import './Home.css'
import photo from "./resources/IMG-0502-a.jpg"
import gmail from "./resources/gmail-logo-2.png"
import github from "./resources/github.png"
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'

function Home() {

    const weatherUrl = `https://weather-search-wl1j.vercel.app/`;
    const navigate = useNavigate();

    const navigateToWeatherApp = () => {
        window.location.replace(`https://weather-search-wl1j.vercel.app/`)
    }

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
                                <a href="mailto:seannarron9@gmail.com" target="_blank"><img src={gmail} alt="" /></a>
                                </div>
                                <div className="github">
                                <a href="https://github.com/dragon-3" target="_blank"><img src={github} alt="" /></a>
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
                                                <td><a href="https://weather-search-wl1j.vercel.app/" target="_blank">Weather</a></td><br />
                                            </tr>
                                            <tr>
                                                <td><a href="https://todo-crud-one.vercel.app/" target="_blank">Todo</a></td><br />
                                            </tr>
                                            <tr>
                                                <td><a href="https://chat-2-sigma.vercel.app/" target="_blank">Chat</a></td><br />
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