import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { reduceCounter } from "./action"
 


function ReduceCounter(props){
    return(
        <div>
            <button type="button" onClick={()=>props.dispatch(reduceCounter())}>Decrement</button>
        </div>
    )
}

const mapDispatchToProps=(dispatch)=>{
    return{
        actions:bindActionCreators(reduceCounter,dispatch)
    }
}

export default connect(mapDispatchToProps)(ReduceCounter)