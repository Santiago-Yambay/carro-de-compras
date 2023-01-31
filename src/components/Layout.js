import { Component } from "react";

const styles = {
    layout:{
        backgroundColor: '#fff',
        color: '#0A283E',
        alignItems:'center',
        display:'flex',
        flexDirection: 'column'
    },
    contianer:{
        width:'1200px'
    }
}

class Layout extends Component{
    render(){
        return(
            // El primer div centra el contenido y el segundo da el ancho
            <div style={styles.layout}>          
                <div>
                {this.props.children}
                </div>
            </div>
        )
    }
}


export default Layout