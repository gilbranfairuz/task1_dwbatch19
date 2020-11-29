import React from 'react';
import {useContext} from 'react';
import {AppContext} from '../../context/appContext';
import {musicDatas} from "../../assets/data/musicData";
import {MusicCard, Header, Slider, MusicPlayer} from "../../components";

const Home = () => {
    const [state, dispatch] = useContext(AppContext);
    const [modalShow, setModalShow] = React.useState(false); 
    

    const handlePlayer = (title) => {
        dispatch ({
            type: "PLAYER_ON",
            payload : title,
        });
    }

    return (
        <div className="Home">
            <Header/>
            <Slider/>
            <div className="container mt-3">
                <div className="row">
                    {musicDatas.map((musicdata) => (
                        <MusicCard 
                            musicdata={musicdata}
                            key={musicdata.id}
                            handlePlayer={handlePlayer}
                        />
                    ))}
                </div>
                {
                    state.player ? <MusicPlayer/> : <></>
                }
                    
            </div>
        </div>
        
        
    )
}

export default Home
