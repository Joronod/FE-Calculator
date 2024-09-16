const Screen = ({ input, result, resultRef })=>{
    return (
        <section className="card">
            <div className="input" aria-live="polite">
                <h2>{input}</h2>
            </div>
            <div className="result" aria-live="polite">
                <h2 ref={resultRef} tabIndex="1">{result}</h2>
            </div>
        </section>
    )
}

export default Screen