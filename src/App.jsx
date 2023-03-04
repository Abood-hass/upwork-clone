// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllDataAPI } from "./redux/slice";
import TextField from './components/TextField'
import buttons from './style/buttons.json'

function App() {

  // const dispatch = useDispatch()

  // const { jobs, isLoading } = useSelector(state => state.data)

  // useEffect(() => {
  //   dispatch(getAllDataAPI())
  // }, [dispatch])


  return (
    <div className="App">
      <TextField type={"email"} Icon={"password"} />
      {/* <Button loginType={buttons.apple} /> */}
    </div>
  );
}

export default App;
