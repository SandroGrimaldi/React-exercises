import React from 'react';
import { Hello } from './Hello';
import { Comment } from './Comment'

export class App extends React.Component{
    render(){
        return <div>
            <Hello />
            <Comment />
        </div>
    }
}