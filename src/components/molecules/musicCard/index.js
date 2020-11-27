import React from 'react';
import {useContext} from 'react';
import {AppContext} from '../../../context/appContext';
import './musiccard.scss';
import {Link} from 'react-router-dom';
import Modal from 'react-bootstrap/Modal'



const MusicCard = ({musicdata}) => {
    const {id, title, year, album, imageUrl} = musicdata;
    const [modalShow, setModalShow] = React.useState(false);
    const [state] = useContext(AppContext);

    function MakePayment(props) {
      return (
        state.payment ?
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          
        >
          <Modal.Body className="make-payment">
          <p>
              Please Make a Payment 2
          </p>
          </Modal.Body>
        </Modal>
        :
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

    return (
        <div className="col-md-2">
            <a onClick={()=> setModalShow(true)} className="play-music">
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
                    <div className="row">
                        <div className="col-7 music-title">{title}</div>
                        <div className="col-5 music-year">{year}</div>
                    </div>
                    <div className="album">
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
