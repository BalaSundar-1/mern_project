import {useNavigate} from "react-router-dom";
function Error404()
{
    const a=useNavigate()
    function get()
    {
     return a("/home")
    }
    return(
        <>
        <h1>error404</h1>
        <button onClick={get}>back to home</button>
        </>
    )
}
export default Error404;