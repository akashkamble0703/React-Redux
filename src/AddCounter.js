import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addCounter } from './action'




function AddCounter(props){
    return(
        <div>
            <button type='button' onClick={()=>props.dispatch(addCounter())}>Add</button>
        </div>
    )
}

const mapDispatchToProps=(dispatch)=>{
    return{
        actions:bindActionCreators(addCounter,dispatch)
    }
}

export default connect(mapDispatchToProps)(AddCounter)