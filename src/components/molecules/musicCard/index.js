import React from 'react';
import {useContext} from 'react';
import {AppContext} from '../../../context/appContext';
import './musiccard.scss';
import {Link} from 'react-router-dom';
import Modal from 'react-bootstrap/Modal'

const MusicCard = ({musicdata, handlePlayer}) => {
    const {id, title, year, album, imageUrl} = musicdata;
    const [modalShow, setModalShow] = React.useState(false);
    const [state, dispatch] = useContext(AppContext);

    function MakePayment(props) {
      return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body className="make-payment">
          <Link to="/makepayment">
          <p>
              Please make a payment to listen to the hottest songs in the world
          </p>
          </Link>
          </Modal.Body>
        </Modal>
      );
    };

    // const setPlayer = () =>{
    //     dispatch({
    //         type: "PLAYER_ON", 
    //     });
    // }

    return (
        <div className="col-2">
            <a onClick={state.payment ? ()=>handlePlayer(title) : ()=> setModalShow(true)} className="play-music">
            <div className="card mb-4 card-music">
                <div className="card-body card-music-picture">
                    <img 
                        src={imageUrl}
                        alt={title}
                        className="img-fluid"
                        style={{
                            height:"152px",
                            width:"100%",
                            objectFit: "cover",
                        }}
                    />
                </div>
                <div className="card-footer card-music-detail">
                    <div>
                        <div className="card-text music-title">{title}</div>
                        <div className="card-text music-year">{year}</div>
                    </div>
                    <div className="card-text album">
                        {album}
                    </div>
                </div>
            </div></a>
            <MakePayment
            show={modalShow}
            onHide={() => setModalShow(false)}
            />
        </div>
    );
}

export default MusicCard
