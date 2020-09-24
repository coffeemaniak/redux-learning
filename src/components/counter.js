import React from "react";
import {connect} from "react-redux";
import * as actions from '../actions';
import {bindActionCreators} from "redux";
import "./counter.css";
import plus from "./plus.png";
import minus from "./minus.png";
import reset from "./reset.png";
 
const Counter = ({counter, inc, dec, res}) => {
    return (
        <div className="counter_wrapper">
            <div className="counter">
            <h1 className="counter_title">{counter}</h1>
            </div>
            <div className="counter_buttons">
                <button className="counter_plus" onClick={inc}><img src={plus} alt="plus"></img></button>
                <button className="counter_minus" onClick={dec}><img src={minus} alt="minus"></img></button>
                <button className="counter_reset" onClick={res}><img src={reset} alt="reset"></img></button>
            </div>
            
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        counter: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);