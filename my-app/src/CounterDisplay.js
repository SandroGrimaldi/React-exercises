import React from 'react';
import { Counter } from './Counter';

export class CounterDisplay extends React.Component{
    
    render(){
        return<div>
            <Counter initialValue={0} />
        </div>
    }
}
