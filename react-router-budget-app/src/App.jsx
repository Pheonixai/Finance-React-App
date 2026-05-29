import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; 
import Dashboard,{ dashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";
import { mainLoader } from "./layouts/Main";
import Main from  "./layouts/Main";
//Actions
import { logoutAction } from "./actions/logout";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: dashboardLoader,
        errorElement: <Error />
      },
      {
        path:"logout",
        action: logoutAction
      }
    ]
  },
]);

function App() {
  return <div className="App">
     <RouterProvider router={router} />
     <ToastContainer />
  </div>;
}

export default App;
