import React from 'react';
import GiphyApp from './GiphyApp';

function GiphyImage({
    giphy
}) {
    return (
        <img src={giphy.url} />
    )
}

export default GiphyImage;