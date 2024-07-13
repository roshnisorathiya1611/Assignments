function Cell({value,clickFunction,index})
{
    return(
        <div onClick={() => clickFunction(index)}className="bg-secondary cell border d-flex justify-content-center align-items-center">
            <p>{value}</p>
        </div>
    )
}

export default Cell