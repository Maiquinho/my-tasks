import { useState } from "react";

export function useSettingsModal(){
    const [displayModalConfig, setDisplayModalConfig] = useState(false);
  

    function handleUserConfigs() {
        setDisplayModalConfig(!displayModalConfig);
    }

    return {
        handleUserConfigs,
        displayModalConfig
    }
}