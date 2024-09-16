import { useState, useRef } from 'react'
import Screen from './screen'

const Keypad = () =>{
    const [ input, setInput ] = useState("")
    const [ result, setResult] = useState("")
    const resultRef = useRef(null);

    const handleButtonClick = (event)=>{
        const value = event.target.id
        if(value === "="){
            try{
                setResult(eval(input))
                console.log(result, "result in handle click")
                setInput("")
                resultRef.current.focus()
            }
            catch(err){
                setResult("Error")
            }
        } else if(value === "c"){
            setInput("")
            setResult("")
        }
        else if(value === " < "){
            setInput(input.slice(0,-1))
        }
        else {setInput(input + value)}
    }

    return (
        <div>
            <section>
                <Screen input={input} result={result} resultRef={resultRef} />
            </section>
            <section className='keypad'>
                {["c", "/", "*", " < ", "7", "8", "9", "-", "4", "5", "6", "+", "1", "2", "3", "=", "(", "0", ")"].map((index) => {
                    const label = index === "c" ? "Clear" :
                        index === "=" ? "Equals" :
                        index === " < " ? "Backspace" : 
                        index; 

            return (
                <button 
                    key={index} 
                    id={index} 
                    aria-label={label} 
                    onClick={handleButtonClick}
                >
                    {index}
                </button>
            );
        })}

            </section>

        </div>
    )
}



export default Keypad