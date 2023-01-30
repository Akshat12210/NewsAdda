import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import ThemeContext, { themes } from "./ThemeContext";
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import TopNews from './components/TopNews';


function App() {

  const [theme, setTheme] = useState(themes.dark);
  const pageSize = 11;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);
  const toggleTheme = () => {
    theme === themes.dark ?
      setTheme(themes.light) :
      setTheme(themes.dark);
  }

  return (
    <ThemeContext.Provider value={theme}>
      <Router>
        <Navbar toggle={toggleTheme} mode={theme.mode} />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route
            exact
            element={
              // <TopNews />
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                pageSize={pageSize}
                mode={theme.mode}
                key="general"
                country="in"
                category="general"
              />
            }
            path="/"
          />
          <Route
            exact
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="business"
                pageSize={pageSize}
                mode={theme.mode}
                country="in"
                category="business"
              />
            }
            path="/business"
          />
          <Route
            exact
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="/entertainment"
                pageSize={pageSize}
                mode={theme.mode}
                country="in"
                category="entertainment"
              />
            }
            path="/entertainment"
          />
          <Route
            exact
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                pageSize={pageSize}
                mode={theme.mode}
                country="in"
                category="general"
              />
            }
            path="/general"
          />
          <Route
            exact
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                pageSize={pageSize}
                key="health"
                mode={theme.mode}
                country="in"
                category="health"
              />
            }
            path="/health"
          />
          <Route
            exact
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                pageSize={pageSize} key="science"
                mode={theme.mode}
                country="in"
                category="science"
              />
            }
            path="/science"
          />
          <Route
            exact
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                pageSize={pageSize} key="sports"
                mode={theme.mode}
                country="in"
                category="sports"
              />
            }
            path="/sports"
          />
          <Route
            exact
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                pageSize={pageSize} key="technology"
                mode={theme.mode}
                country="in"
                category="technology"
              />
            }
            path="/technology"
          />
        </Routes>
      </Router>

    </ThemeContext.Provider>

  );
}

export default App;
