import ReactJkMusicPlayer from 'react-jinke-music-player';
import {useContext} from 'react';
import {AppContext} from '../../../context/appContext';
import 'react-jinke-music-player/assets/index.css';

const MusicPlayer = () => {
    const [state, dispatch] = useContext(AppContext);

    return (
        <ReactJkMusicPlayer mode="full" locale={{audioTitle:state.musics}}/>
    )
}

export default MusicPlayer
