import {Routes, Route} from "react-router-dom"
import {routes}  from "./routes"

function App() {
  return (
    <div className="w-full">

      <Routes>
        {routes.map((route) => {
          return (
            <Route key={route.name} exact= {route.exact} path={route.path} element={<route.component />} />
          )
          
        })} 
      </Routes>

     

    </div>
  );
}

export default App;
