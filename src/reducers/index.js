import {combineReducers} from 'redux';

const songReducer = () => {
    return [
        {Title: 'Song 1', Duration: '3:03'},
        {Title: 'Song 2', Duration: '1:42'},
        {Title: 'Song 3', Duration: '4:08'},
        {Title: 'Song 4', Duration: '2:17'},
        {Title: 'Song 5', Duration: '5:56'},
    ];
};

const SelectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songReducer,
    selectedSong: SelectedSongReducer
});