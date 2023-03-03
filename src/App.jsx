import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDataAPI } from "./redux/slice";

function App() {

  const dispatch = useDispatch()

  const { jobs, isLoading } = useSelector(state => state.data)

  useEffect(() => {
    dispatch(getAllDataAPI())

  }, [dispatch])


  return (
    <div className="App">
      {isLoading ? <h1>Loading</h1>
        : jobs?.map(item =>
          <div key={0}>{item?.task?.title}</div>
        )
      }
    </div>
  );
}

export default App;
