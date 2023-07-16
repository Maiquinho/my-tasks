import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Tasks } from './components/Tasks';
import { UserSettings } from "./components/UserSettings";
import { useSettingsModal } from './hooks/settings/settingsModal';

import './styles/global.css';


export function App() {

  const { handleUserConfigs, displayModalConfig } = useSettingsModal();

  return (
    <>
      <div className="relative dark:bg-gray-800 flex justify-center h-screen">
        <div className="w-[80%] mx-auto flex flex-col">
          <Header userConfigs={handleUserConfigs} />
          <Tasks />
          <Footer />
        </div>

        <UserSettings
          displayModalConfig={displayModalConfig}
          handleModalDisplay={handleUserConfigs}
        />
      </div>
    </>
  )
}
