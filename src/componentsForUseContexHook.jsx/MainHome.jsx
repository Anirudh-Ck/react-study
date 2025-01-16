import React, { useState } from "react";
import Childone from "./Childone";

const MainContext = React.createContext();
const SecondContext = React.createContext();
const ThirdContext = React.createContext(50000);
function MainHome() {
  const [data, setData] = useState(100000);
  const [datatwo, setDataTwo] = useState(20);
  return (
    <div>
      MainHome
      <MainContext.Provider value={data}>
        <SecondContext.Provider value={datatwo}>
            {/* <ThirdContext.Provider value={4000}> */}
            <Childone />
            {/* </ThirdContext.Provider> */}
        </SecondContext.Provider>
      </MainContext.Provider>
    </div>
  );
}

export default MainHome;
export { MainContext, SecondContext, ThirdContext };
