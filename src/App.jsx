import { useState } from 'react'
import CheckoutStepper from './components/CheckoutStepper'
import "./App.css"


function App() {
  const [count, setCount] = useState(0)

  const stepsConfig =[
    {
      name: "Customer Info",
      Component: ()=> ( <div> Provide Contact Info </div> )
    },
    {
      name: "Shipping Address",
      Component: ()=> ( <div> Provide Shipping Address </div> )
    },
    {
      name: "Payment",
      Component: ()=> ( <div> Payment Method </div> )
    },
    {
      name: "Ordered Confirmed",
      Component: ()=> ( <div> Yayyyy!!!! order confirmed </div> )
    },
  ]

  return (
    <>
    <h2>Check Out</h2>
     <CheckoutStepper stepsConfig = {stepsConfig} />
    </>
  )
}

export default App
