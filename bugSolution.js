```javascript
import * as Linking from 'expo-linking';
import React, { useEffect, useState } from 'react';

function App() {
  const [initialUrl, setInitialUrl] = useState(null);

  useEffect(() => {
    const handleUrl = (url) => {
      console.log("Deep link received:", url);
      // Handle the deep link here
    };

    Linking.addEventListener('url', handleUrl);

    const handleInitialUrl = async () => {
      let url = await Linking.getInitialURL();
      if(url){
        setInitialUrl(url);
        handleUrl(url);
      }
    };

    handleInitialUrl();

    return () => Linking.removeEventListener('url', handleUrl);
  }, []);

  useEffect(() => {
    if (initialUrl) {
      console.log("Initial URL (from app start):", initialUrl);
      // Handle the initial URL
    }
  }, [initialUrl]);

  return (
    <View>
      {/* Your app content here */}
    </View>
  );
}

```