import React from 'react'
import ArCondicionado from './ArCondicionado'

class MainPage extends React.Component {
    constructor(props) {
        super(props)

        
        this.state = {
            velocity: 1,
            types: ['ventilar', 'refrigerar', 'aquecer'],
            typeNow: 0
        }

        
    }

    upVelocity = () => {
        if(this.state.velocity < 3) {
            this.setState({
                "velocity": (this.state.velocity + 1)
                }
            )
        }
    }

    downVelocity = () => {
        if(this.state.velocity > 1) {
            this.setState({
                "velocity": (this.state.velocity - 1)
                }
            )
        }
    }

    changeType = () => {
        this.setState({
            "typeNow": (this.state.typeNow + 1)%this.state.types.length
            }
        )
    }


    render() {
        return <div>bom dia 
                <ArCondicionado velocity={this.state.velocity} type={this.state.types[this.state.typeNow]}></ArCondicionado>
                <button onClick={this.changeType}>TROCAR MODO</button>
                <button onClick={this.upVelocity}>AUMENTAR VELOCIDADE</button>
                <button onClick={this.downVelocity}>DIMINUIR VELOCIDADE VELOCIDADE</button>
                </div>
    }

}

export default MainPage;