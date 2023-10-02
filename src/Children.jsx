function Children({title, content, funSuma}){
    let result = funSuma(120)
 return(
    <>
    <h1>{title}
        <p>{content}</p>
        <p>El resultado es: {result}</p>
    </h1>
    </>
 )
}

export default Children