import React from 'react';
import {useContext} from 'react';
import {AppContext} from '../../context/appContext';
import {musicDatas} from "../../assets/data/musicData";
import {MusicCard, Header, Slider} from "../../components";

const Home = () => {
    const [state, dispatch] = useContext(AppContext);
    const [modalShow, setModalShow] = React.useState(false); 
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
                        />
                    ))}
                </div>
            </div>
            
        </div>
        
        
    )
}

export default Home
