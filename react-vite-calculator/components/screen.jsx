const Screen = ({ input, result })=>{
    return (
        <section className="card">
            <div className="input">
                <h2>{input}</h2>
            </div>
            <div className="result">
                <h2>{result}</h2>
            </div>
        </section>
    )
}

export default Screen