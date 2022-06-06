import React from 'react'

function ProfessionalExperienceContent() {
    return (
        <div>
            <h4>Write your job title here</h4>
            <p>Company Name | City, State | Beginning Date-End Date</p>
            <p>In 2 lines, summarize your main responsibilities using past tense and provide information about the organization</p>
            <ul>
                <li>Beginning with a powerful action verb, write up to six responsibilities and/or accomplishments in the past tense</li>
                <li>Highlight your most relevant qualifications for the job by listing them first.</li>
                <li>Avoid irrelevant experinces</li>
                <li>Keep descriptions short but add details that show why you're a great candidate</li>
                <li>Show your accomplishments by using numbers and percentages.</li>
            </ul>
        </div>
    )
}

export default function About() {
    return (
        <div className="about">
            <h3>Profile</h3>
            <p>Write a powerful perfomance summary here. 
                Highlight your most valuable skills, qualifications,
                achievements, credentials, and other distinguishing information
                as it relates to and supports your current objective. Integrate keywords and
                qualifications aligned with the company's specific needs. Show why you are uniquely
                qualified, focusing on skills or qualifications, industry expertise, companies worked for,
                degrees, certifications, awards, and/or other professional credentials.
            </p>
            <h3>Professional Experience</h3>
            <ProfessionalExperienceContent />
            <ProfessionalExperienceContent />
            <ProfessionalExperienceContent />

        </div>
    )
}