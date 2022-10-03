import React from "react";
import './Home.css'

function Home() {
    return (
        <div>
            <div className="container">
                <div className="inner-container">
                    <div className="border">
                    <div className="top">
                        {/* top */}
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
                                projects
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
                    </div>

                    
                </div>
            </div>
                
         
            
            
        </div>
    )
}

export default Home