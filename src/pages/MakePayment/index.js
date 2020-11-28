import React from 'react';
import {useContext} from 'react';
import {AppContext} from "../../context/appContext";
import {useHistory, Link} from 'react-router-dom';
import { Header, Input, Button, InputFile} from '../../components';
import Modal from 'react-bootstrap/Modal'
import './makepayment.scss';

    const MakePayment = () => {
        const [state, dispatch] = useContext(AppContext);
        const [modalShow, setModalShow] = React.useState(false);
        const router = useHistory();

        const handlePayment = () => {
            dispatch({
                type: "PAYMENT",
            });
            setModalShow(true);
        };
    
        function PaymentSuccess(props) {
            return (
              <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Body className="make-payment">
                <Link to="/">
                <p>
                    Thank you for subscribing to premium, your premium package will be active after our admin approves your transaction, thank you
                </p>
                </Link>
                </Modal.Body>
              </Modal>
            );
          };
      

    return (
        <div className="make-payment-page">
            <Header/>
            <div className="container" style={{ height:"70vh"}}>
                    <div className="row d-flex justify-content-center title">
                        <div className="section-title green">Premium</div>
                    </div>
                    <div className="row d-flex justify-content-center caption">
                        Bayar sekarang dan nikmati streaming music yang kekinian dari Co &nbsp;<span className="green"> Ways</span>
                    </div>
                    <div className="row d-flex justify-content-center co-ways-number">
                        Co&nbsp;<span className="green"> Ways</span> : 0981312323
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="col-4">
                        <Input placeholder="Input your account number"/>
                        </div>
                        
                    </div>
                    <InputFile prop="Attach proof of transfer"/>
                    <div className="row d-flex justify-content-center send-payment">
                        <Button title="Send" onClick={handlePayment}/>
                    </div>
            </div>
            <PaymentSuccess
            show={modalShow}
            onHide={() => setModalShow(false)}
            />
        </div>
    )
}

export default MakePayment
