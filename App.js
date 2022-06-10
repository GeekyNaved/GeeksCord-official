import React, { useEffect, useState } from 'react';
import HomeStack from './routes/HomeStack.js';
import SplashScreen from './screens/SplashScreen.js';

const App = () => {
  const [isVisible, setVisible] = useState(true);
  useEffect(() => {
    const Timeout = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(Timeout);
  });

  return isVisible ? <SplashScreen /> : <HomeStack />
};
export default App;
