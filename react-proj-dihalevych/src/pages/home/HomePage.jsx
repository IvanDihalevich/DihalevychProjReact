import { useLocation } from "react-router-dom"

const HomePage = () => {
    const{state, ...rest}=useLocation
    console.log(state, rest);
  return (
    <div>
      <h1>Hello home page</h1>
    </div>
  )
}

export default HomePage
