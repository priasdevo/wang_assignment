import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './modules/example/pages/index';
import TaskPage from './modules/task/pages/index'
import * as serviceWorker from './serviceWorker';

export default function Apps() {
    const [isDarkMode, setIsDarkMode] = React.useState(false);

    React.useEffect(() => {
      const body = document.querySelector('body');
      if (isDarkMode) {
        body.classList.add('dark-mode');
      } else {
        body.classList.remove('dark-mode');
      }
    }, [isDarkMode]);
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}></Route>
            <Route path="/test" element={<TaskPage isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
      
    );
  }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Apps />);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
