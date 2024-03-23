import Home from "../pages/Home/Home"
import Login from "../pages/login/Login"
import Register from "../pages/register/Register"

const routes = {
    data: [
        {
          name: "Home",
          path: "/",
          component: <Home/>,
          type: "main",
        },
        {
            name: "Login",
            path: "/login",
            component: <Login/>,
            type: "",
        },
        {
            name: "Register",
            path: "/register",
            component: <Register/>,
            type: "",
         }
        
    ]
}


export default routes