import { useState } from "react";
import { Header } from './components/Header';
import { Tasks } from './components/Tasks';
import { UserSettings } from "./components/UserSettings";

import './styles/global.css';


export function App() {

  const [displayModalConfig, setDisplayModalConfig] = useState(false);

  function handleUserConfigs() {
    if (displayModalConfig == false) {
      setDisplayModalConfig(true)
    } else {
      setDisplayModalConfig(false)
    }
  }


  return (
    <div className="relative flex justify-center h-screen">
      <div className="w-[80%] mx-auto">
        <Header userConfigs={handleUserConfigs} />
        <Tasks />
      </div>
      
      <UserSettings 
        displayModalConfig={displayModalConfig} 
        handleModalDisplay={handleUserConfigs} 
      />
    </div>
  )
}
