import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import React from "react"

// function App() {
//   return (
//     <>
//     <p>Hello World</p>
//     <Header />
//     <Content />
//     <Footer />
//     </>
//   );
// }

// export default App;


class App extends React.Component{
  render(){
    return<>
    <p>Hello World</p>
    <Header />
    <Content />
    <Footer />
    </>
    }
  }

  export default App;
