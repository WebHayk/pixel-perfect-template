import AppRouter from "./core/router";
import {RouterProvider} from "react-router-dom";

const App = () => {
  return (
      <RouterProvider
          router={AppRouter()}
      />
  )
}

export default App;


