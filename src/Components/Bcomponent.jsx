import Hoc from "./Hoc"
const Bcomponent=(y)=>{
    console.log(y)
    return(
        <div>
            {y.data}
            <button onMouseOver={y.Func}>Increment</button>
        
        </div>
    )
}
export default Hoc(Bcomponent)