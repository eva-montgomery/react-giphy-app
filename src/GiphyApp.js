import React from 'react';
import axios from 'axios';
import GiphyImage from './GiphyImage';

const giphyURL = 'https://api.giphy.com/v1/gifs/random?api_key=w7f3GOjdx1tXBzmlqn5M2RgfvbkzC6vL&tag=cat&rating=G';


class GiphyApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            giphies: []
        };
    }

    render() {
        return (
            <div>
               <button onClick={this._getGiphy}> 🌈 </button>
               <br></br>
            {
                this.state.giphies.map(giphy => (
                    <GiphyImage giphy={giphy} />
                ))
            }
            </div>
        );
    }



_getGiphy = () => {

    axios.get(giphyURL)
        .then(response => {
            console.log(response.data.data.images.downsized_large)
            // console.log('I clicked a button');
            this.setState({
                giphies: [
                    response.data.data.images.downsized_large,
                    ...this.state.giphies,
                ]
                });
        })
        .catch(err => {
            console.log('Yeah. no giphy for you');
        })

    }
}


export default GiphyApp;