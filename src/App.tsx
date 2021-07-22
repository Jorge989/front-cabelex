import React from "react";
import Routes from "./routes";

import { AuthProvider } from "../src/hooks/AuthContext";
import UpdateContext from "./hooks/UpdateContext";
import FilialContext from "./hooks/FilialContetx";
import ShowContext from "./hooks/ShowContext";
import "./styles/global.scss";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <UpdateContext>
          <ShowContext>
            <FilialContext>
              <Routes />
            </FilialContext>
          </ShowContext>
        </UpdateContext>
      </AuthProvider>
    </div>
  );
}

export default App;
