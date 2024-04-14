import { useEffect, useState } from 'react';
import l from './App.module.css'
import Nav from './components/nav/Nav'
import { UserHome} from "./view"

function App() {
  // let modeDark = true;

  const [dark, setDark] = useState(() => {
    const mode = JSON.parse(localStorage.getItem('darkMode'));
    return mode || false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(dark));
  }, [dark]);
 
  const toggleDarkMode =()=>{
    setDark(!dark)
    
  }

  return (
    <div className={dark ? l.appDark : l.app }>
       <Nav toggleDarkMode={toggleDarkMode}/>
       <UserHome/>
    </div>
  )
}

export default App
