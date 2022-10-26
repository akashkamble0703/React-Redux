import { connect } from "react-redux";

function Counter(props) {
  return (
    <div>
      <h2>Counter Componet</h2>
      <p>Count Value is: {props.count}</p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.counterReducer,
  };
};

export default connect(mapStateToProps)(Counter);
