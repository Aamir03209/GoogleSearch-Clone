import React, { useState } from 'react';

import { Footr } from './components/Footr';
import { Navbar } from './components/Navbar';
import { MyRoutes } from './components/Routes';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className="dark:bg-gray-900 bg-gray-100 dark:text-gray-200 black min-h-screen">
        <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
        <MyRoutes />
        <Footr />
      </div>
    </div>

  );
};

export default App;