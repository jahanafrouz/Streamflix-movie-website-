import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Router from './components/router';
import { GlobalStyle } from './theme/globalStyle';
import { ConfigProvider } from 'antd';
import { colorpallet } from './theme';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Fragment>
  <ConfigProvider
  theme={{
    token: {
      colorPrimary:colorpallet.primaryColor,
    },
  }

  }
  >
  <GlobalStyle/>
  <Router/>
  </ConfigProvider>
</Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
