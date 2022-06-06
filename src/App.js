import React from "react"
import PersonalInformation from "./components/PersonalInformation"
import Title from "./components/Title"
import About from "./components/About"
export default function App() {
    return (
        <div>
            <PersonalInformation />
            <Title  />
            <About />
        </div>
    )
}