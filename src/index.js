import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import Fake from './features/Fake/Fake';
import Dummy from './features/Dummy/Dummy';
import DummyDescription from './features/Dummy/DummyDescription';
import FakeDescription from './features/Fake/FakeDescription';
import Employee from './features/Employees/Employee';
import AddEmployee from './features/Employees/AddEmployee';
import EmployeeUpdate from './features/Employees/EmployeeUpdate';
import Billing from './features/Billing/Billing';
import AddNewFooditem from './features/FoodItems/AddNewFooditem';
import Login from './features/User/Login';


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:'/home',
        element:<Home></Home>
      },
      {
        path:'/fake',
        element:<Fake></Fake>
      },
      {
        path:'/dummy',
        element:<Dummy></Dummy>
      },
      {
        path:'/dummy/:id',
        element:<DummyDescription></DummyDescription>
      },
      {
        path:'/fake/:id',
        element:<FakeDescription></FakeDescription>
      },
     {
      path:"/employees",
      element:<Employee></Employee>
     },
     {
      path:'/addEmployee',
      element:<AddEmployee></AddEmployee>
     },
     {
      path:"//editEmp/:id",
      element:<EmployeeUpdate></EmployeeUpdate>
     },
     {
      path:"/newfooditem",
      element:<AddNewFooditem></AddNewFooditem>
     },
     {
      path:'/billing',
     element:<Billing></Billing>
     },
     {
      path:'/login',
      element:<Login></Login>
     }
     
    ]
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
