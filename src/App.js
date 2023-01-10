import './App.css';
import React from 'react';
import Context from './Context';
import Provider from './Provider';

// const Agents = () => {

// }

const AgentBond = () => {
  return(
      <Context.Consumer>                 {/* creating the consumer where data will be fetched from the provider and used */}
        {
          (context) => (                // context => refers to the data which is being passed by the provider
            <>
              <h2>
                  Hello {context.data.agentName}  {/* getting the agentName from the data passed via provider, wherein our state is present. */}
              </h2>
              <h3>Mission name: {context.data.mname}</h3>
              <p>Mission Status: {context.data.accept}</p>
              <button onClick={context.isMissionAccepted}>Accept the Mission!</button>  {/* calling the method isMissionAccepted which will update the "accept state" */}
            </>
          )
        }
      </Context.Consumer>
  )
}

const App = () => {                         // This App will be rendered on the DOM

  return (
    <div className="App">
      <h2>Mission Information</h2>
      <Provider>                           {/* Whenever we have defined a context the provider is used to provide data and so we are consuming that data and passing it to the component present inside this provider */}
        <AgentBond />
      </Provider>
    </div>
  );
}

export default App;
