import React, { createContext, useContext, useState } from 'react';
import './Demoshooks.css';

const ThemeContext = createContext(null);

export default function MyApp() {
 const [theme, setTheme] = useState('light');

 return (
    <ThemeContext.Provider value={theme}>
      <div className={`app ${theme}`}>
        <Form />
        <button onClick={()=> setTheme('Black')}>black</button>
        <button onClick={()=> setTheme('Green')}>green</button>
        <label>
          {/* <input
            type="checkbox"
            checked={theme === 'dark'}
            onChange={(e) => {
              setTheme(e.target.checked ? 'dark' : 'light');
            }}
          /> */}
          Use dark mode
        </label>
      </div>
    </ThemeContext.Provider>
 );
}

function Form({ children }) {
 return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
 );
}

function Panel({ title, children }) {
 const theme = useContext(ThemeContext);
 return (
    <section className={`panel ${theme}`}>
      <h1>{title}</h1>
      {children}
    </section>
 );
}

function Button({ children }) {
 const theme = useContext(ThemeContext);
 return (
    <button className={`button ${theme}`}>
      {children}
    </button>
 );
}