import React from 'react';
import GlobalStyles from './styles/global';
import Routes from './routes/routes';
import WebFont from 'webfontloader';

import 'antd/dist/antd.css';

WebFont.load({
  google: {
    families: [
      'Montserrat:300,400,600,700,800',
      'Nunito:400,500,600,700,800,900',
    ],
  },
});

function App() {
  return (
    <>
      <Routes />
      <GlobalStyles />
    </>
  );
}

export default App;
