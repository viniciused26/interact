import React from 'react';
import ReactDOM from 'react-dom';
import Membros from './components/membros';
import Info from './components/info'

function App() {
  return (
    <React.Fragment>
      <h1>InterAct</h1>
      <Membros nome="Eduardo" nome1="Pedro" nome2="Rodrigo" nome3="Victor" nome4="Vinicius" />
      <Info />
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));