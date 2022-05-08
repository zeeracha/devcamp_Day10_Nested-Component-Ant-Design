import './App.css';
import React from 'react'
import HeaderComponent from './Header'
import ContentComponent from './Content'
import FooterComponent from './Footer';

class App extends React.Component {
  render () {
      return (<>
        <HeaderComponent />
        <ContentComponent />
        <FooterComponent />
        </>);

  }
}


export default App;
