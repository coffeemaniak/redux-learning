import React from "react";
import {connect} from "react-redux";
import * as actions from '../actions';
import {bindActionCreators} from "redux";

const Counter = ({counter, inc, dec, rnd}) => {
    return (
        <div className="jimbotron">
            <h1>{counter}</h1>
            <button className="btn btn-primary" onClick={dec}>DEC</button>
            <button className="btn btn-primary" onClick={inc}>INC</button>
            <button className="btn btn-primary" onClick={rnd}>RND</button>
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