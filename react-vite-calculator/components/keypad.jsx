import { useState } from 'react'
import Screen from './screen'

const Keypad = () =>{
    const [ input, setInput ] = useState("")
    const [ result, setResult] = useState("")

    const handleButtonClick = (event)=>{
        const value = event.target.id
        if(value === "="){
            try{
                setResult(eval(input))
                console.log(result, "result in handle click")
                setInput("")
            }
            catch(err){
                console.log(err)
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
                <Screen input={input} result={result} />
            </section>
            <section className='keypad'>
                {["c", "/", "*", " < ", "7", "8", "9", "-", "4", "5", "6", "+", "1", "2", "3", "=", "(", "0", ")"].map((index)=>{
                    return <button id={index} onClick={handleButtonClick}>{index}</button>
                })}
            </section>

        </div>
    )
}



export default Keypad