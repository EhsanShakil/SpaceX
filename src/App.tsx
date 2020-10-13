import React, {useState, useCallback} from "react";
import Launch from "./components/Launch";
import LaunchDetails from './components/LaunchDetails'


const App = () => {
  let [id, setId] = useState<number>(42)
  let handleChangeId = useCallback(newId => {
    setId(newId);
  }, []);
  return (
    <div className="App">
      <Launch handleChangeId={handleChangeId}/>
      <LaunchDetails id={id}/>
    </div>
  );
}

export default App;
