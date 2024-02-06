import React from "react";

const About = () =>{
    return (
        <div className="about my-4" style={{ textAlign: 'center' }}>
        <h2>About</h2>   
        <div className="container my-4">
            <div className="row">
                <div className="col-md-6">
                <img src="/assets/bg.jpg" className="card-img" alt="Banner Image" height="300px" />
                </div>
                <div className="col-md-6">
                <h4 style={{ marginRight: "438px" }}>Our Story</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>  
                </div>
            </div>
        </div>      
        </div>
    )
}

export default About;