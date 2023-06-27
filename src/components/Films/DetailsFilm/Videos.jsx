import React from 'react';
import YouTube from 'react-youtube';

const YouTubePlayer = ({ videoId }) => {

    const opts = {
        height: '200',
        width: '300',

    };


    return <YouTube videoId={videoId} opts={opts} />;
};

export default YouTubePlayer;
