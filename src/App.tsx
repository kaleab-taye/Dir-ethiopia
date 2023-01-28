import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { useEffectOnce } from 'usehooks-ts';
import GrpcClient from './proto/grpc_client';

const grpcClient = new GrpcClient()


function App(): JSX.Element {
  useEffectOnce(()=>{
    
    const pingTest = async (): Promise<void> => {
      const pingResult = await grpcClient.pingServer()
      console.log('The server is pinged and returned', pingResult)
    }
    pingTest()
    .catch((err)=>{
      console.log("Something went wrong while pingong server", err)
      }
    )
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
