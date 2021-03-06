import React from 'react';
import { connect} from 'react-redux';

const SongDetail = ({ song }) =>  {
    if (!song) {
        return <div>Select a song</div>
    }

    return (
    <div>
        <h3>details for:</h3>
        <p>
            title: {song.title}
            <br />
            duration: {song.duration}
        </p>
        {song.title}
        </div>
    );
};

const mapStateToProps = (state) => {
   return { song: state.selectedSong}
};

export default connect(mapStateToProps) (SongDetail);