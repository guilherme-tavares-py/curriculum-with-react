import React from 'react'
import blankpicture  from '../images/blank-profile.png'

function Content() {
    return (
        <div className="personal-information">
            
        <img src={blankpicture} />
        <h3>Contact</h3>
        
        <p>23-589-22-88</p>
        <p>youremail@gmail.com</p>
        <p>City, State</p>
        <p>Linkedin.com/username</p>
       
                    
        <h3>Education</h3>
        <p>YOUR DEGREE NAME / MAJOR</p>
        <p>Education</p>
        <p>University Name</p>

        <h3>Skills</h3>
        <ul>
            <li>Relevant Skill</li>
            <li>Relevant Skill</li>
            <li>Relevant Skill</li>
            <li>Relevant Skill</li>
            <li>Relevant Skill</li>
        </ul>
            
        
    </div>
    )
}
export default function PersonalInformation() {
    return (
       <Content />
    )
}

