import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home';
import { Provider } from 'react-redux';
import store from './Redux/store'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,

  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />

    </Provider>
  </StrictMode>,
)
