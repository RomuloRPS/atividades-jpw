import React from 'react'

export default class ArCondicionado extends React.Component{
    render(){
        return <div>
            <h1>Velocidade: {this.props.velocity}</h1>
            <h1>Modo: {this.props.type}</h1>
            </div>
    }



}