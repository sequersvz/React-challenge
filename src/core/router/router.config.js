import {Home} from "../views/Home/index.page"
import {RegisterForm} from "../views/RegisterForm/index.page"
import {HelloWorld} from "../views/HelloWorld/index.page"

// Add routes
const routerConfig = () => {
  return [
    {
      path: "/",
      component: Home,
      name: "Home",
      // logo: 
    },
    {
      path: "/register",
      component: RegisterForm,
      name: "Register",
      // logo: 
    },
    {
      path: "/test",
      component: HelloWorld,
      name: "Test",
      // logo: 
    }
  ]
}

export default routerConfig
