import React from 'react';

export class Counter extends React.Component{
    state={count: this.props.initialValue ?? 0}
    /*constructor(props){
        super(props)
        setInterval(()=>{this.setState((state)=>{return{count: state.count + (this.props.increment ?? 1)}})},(this.props.incrementInterval ?? 1000))
    }*/
    componentDidMount() {
        this.setupConnection();
      }
    render(){
        return<div>
            <h1>Count: {this.state.count}</h1>
        </div>
    }
}
/* il costruttore non possiamo toglierlo altrimenti non si può aggiornare lo stato */