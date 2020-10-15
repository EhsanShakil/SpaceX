import React, {useState, useCallback} from "react";
import Launch from "./components/Launch";
import LaunchDetails from './components/LaunchDetails'
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  let [id, setId] = useState<number>(40)
  let handleChangeId = useCallback(
    (newId) => {
      setId(newId)
    },
    [],
  )
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Launch handleChangeId={handleChangeId}/>}/>
        <Route path='/:mission_name' element={<LaunchDetails id={id} />}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
