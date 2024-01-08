import { Component  } from 'react';

class ImageClass extends Component {
    render() {
        return (
            <img src={this.props.url} alt={this.props.alt}/>
        )
    }
}

export default ImageClass