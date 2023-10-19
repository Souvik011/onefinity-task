import { useEffect } from "react";
import EnteredForm from "./Form/EnteredForm";
import List from "./Form/List";
import { getData } from "./Store/FormThunk";
import { useDispatch } from "react-redux";
import { Route,Routes } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(getData());
  },[])
  return (<div>
    <Routes>
      <Route path='/' element={<EnteredForm />} />
      <Route path='/form' element={<EnteredForm />}/>
      <Route path="/list" element = {<List />} />
    </Routes>
  </div>)
}
export default App;