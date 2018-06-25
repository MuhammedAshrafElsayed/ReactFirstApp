import React, { Component } from 'react';
const Button1 = (props) =>
{
return (<button width='100' height='100' background='red'>{props.name}</button>);
}

class Button extends React.Component{
constructor(props)
{
super(props);
this.state ={counter:0}
}

increaese = ()=>
{
this.setState((prevstate)=>{return {counter:prevstate.counter+1};} );
}
render()
{
return (<button onClick={this.increaese}>{this.state.counter}</button>)
}


}
ReactDOM.render(<Button name ='Asho'/>,document.getElementsByClassName('container'));
