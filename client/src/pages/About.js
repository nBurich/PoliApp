import React from 'react';
import { Link } from 'react-router-dom'

const About = () => (
    <div>
        <h1>About Page</h1>
        <Link className="link" to="/">Go back to the home page</Link>
    </div>
    <div>
        <p>
            This site provides updated information about the current political climate. The purpose is to provide people with information and give them a place to debate and discuss this topics. 
            It is highly enforced to not use vulgar or derocatory language towards each other. We have different views and opinions, but the goal of life is to find solutions together. 
        </p>
    </div>
);

export default About;
