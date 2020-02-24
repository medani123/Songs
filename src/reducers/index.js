import {combineReducers} from 'redux';

const songReducer = () => {
    return [
        {title: 'Song 1', duration: '3:03'},
        {title: 'Song 2', duration: '1:42'},
        {title: 'Song 3', duration: '4:08'},
        {title: 'Song 4', duration: '2:17'},
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