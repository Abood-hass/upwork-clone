// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllDataAPI } from "./redux/slice";
import Button from './components/Button'
import buttons from './style/buttons.json'

function App() {

  // const dispatch = useDispatch()

  // const { jobs, isLoading } = useSelector(state => state.data)

  // useEffect(() => {
  //   dispatch(getAllDataAPI())
  // }, [dispatch])


  return (
    <div className="App">
      <Button loginType={buttons.apple} />
    </div>
  );
}

export default App;
