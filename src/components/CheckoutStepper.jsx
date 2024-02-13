import React, { useEffect, useRef, useState } from 'react'

function CheckoutStepper({stepsConfig = []}) {
const [current, setCurrent] = useState(1)
const [completed, setCompleted] = useState(false)
const [margin, setMargin] = useState({
    marginLeft:0,
    marginRight:0,
})

const stepRef = useRef([]);

  const handleNext = () => {
    setCurrent((prevStep) => {
      if (prevStep === stepsConfig.length) {
        setCompleted(true);
        return prevStep;
      } else {
        return prevStep + 1;
      }
    });
  };

  useEffect(() => {
    setMargin({
      marginLeft: stepRef.current[0].offsetWidth / 2,
      marginRight: stepRef.current[stepsConfig.length - 1].offsetWidth / 2,
    });
  }, [stepRef, stepsConfig.length]);

    const ActiveComponent = (stepsConfig[current-1].Component);

    const calculateProgressBarWidth =() =>{
    return((current-1) / (stepsConfig.length-1)) * 100
}
 
  return (
<>
      <div className='stepper'>
        {
            stepsConfig.map((step, index)=>(
                <div 
                    key={step.name} 
                    ref={ele => stepRef.current[index]= ele}
                    className={`step ${current > index+1 || completed ? "complete" : ""} 
                    ${current === index+1? "active": ""}`}>
                    <div className='step-number'>
                        { current > index+1 || completed ? <span>✔️</span> : index + 1} 
                    </div>
                    <div className='step-name'> {step.name} </div>
                </div>
            ))
        }
    </div>

  <div
        className="progress-bar"
        style={{
        width: `calc(100%-${margin.marginLeft + margin.marginRight}px)`,
        marginLeft: margin.marginLeft,
        marginRight: margin.marginRight,
        }}
    >
        <div
        className="progress"
        style={{width: `${calculateProgressBarWidth()}%`}}
        ></div>
    </div>

    <ActiveComponent />

    {!completed &&(
    <button className='btn' onClick={handleNext}>
        { current === stepsConfig.length ? "Finish" : "Next"}
    </button>)}

</>
  )
}

export default CheckoutStepper