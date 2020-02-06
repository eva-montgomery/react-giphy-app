import React from 'react';
import axios from 'axios';
import GiphyImage from './GiphyImage';

const giphyURL = 'https://api.giphy.com/v1/gifs/search?api_key=w7f3GOjdx1tXBzmlqn5M2RgfvbkzC6vL&q=laser&limit=25&offset=0&rating=G&lang=en';


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
            console.log(response.data.data[0].images.downsized_large)
            // console.log('I clicked a button');
            this.setState({
                giphies: [
                    ...this.state.giphies,
                    response.data.data[0].images.downsized_large
                ]
                });
        })
        .catch(err => {
            console.log('Yeah. no giphy for you');
        })

    }
}


export default GiphyApp;