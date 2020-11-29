import React, {useState,useContext} from 'react';
import {AppContext} from "../../../context/appContext";
import { PayIcon, LogoutIcon, CallOut, AddMusic, AddArtist} from "../../../assets";
import {Link, useHistory} from 'react-router-dom';
import { Dropdown } from "react-bootstrap";

import './profilemenu.scss';

const ProfileMenu = () => {
    const [state, dispatch] = useContext(AppContext);
    const router = useHistory();

    const toAddMusic =() => {
      router.push("/addmusic");
    }

    const toAddArtist =() => {
      router.push("/addartist");
    }

    const toPay =() => {
        router.push("/makepayment");
    }

    const toTransaction =() => {
      router.push("/transactions");
    }
    
    const handleLogout = () => {
        dispatch({
            type: "LOGOUT",
        });
        router.push("/Login");
    };

    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <a
          href=""
          ref={ref}
          onClick={(e) => {
            e.preventDefault();
            onClick(e);
          }}
        >
            <img 
                src="data:image/jpeg;base64,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" 
                alt="profile"
                className="img-profile"
            ></img>
        </a>
      ));

    const CustomMenu = React.forwardRef(
        ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
          const [value, setValue] = useState('');
      
          return (
            <div
              ref={ref}
              className={className}
              aria-labelledby={labeledBy}
            >
            <img src={CallOut} className="dropdownmenu-arrow"></img>
              <ul className="list-unstyled">
                {React.Children.toArray(children).filter(
                  (child) =>
                    !value || child.props.children.toLowerCase().startsWith(value),
                )}
              </ul>
            </div>
          );
        },
      );

    return (
        <div className="col d-flex justify-content-end profile-menu">
            <Dropdown>
                <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components"></Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu-right" as={CustomMenu}>
                {
                  state.payment ? 
                  <>
                    <Dropdown.Item eventKey="1" onClick={toAddMusic}><img src={AddMusic} className="dropdown-icon"></img>Add Music</Dropdown.Item>
                    <Dropdown.Item eventKey="2" onClick={toAddArtist}><img src={AddArtist} className="dropdown-icon"></img>Add Artist</Dropdown.Item>
                    <Dropdown.Item eventKey="3" onClick={toTransaction}><img src={PayIcon} className="dropdown-icon"></img>Transactions</Dropdown.Item>
                  </>  
                  :
                    <Dropdown.Item eventKey="4" onClick={toPay}><img src={PayIcon} className="dropdown-icon"></img>Pay</Dropdown.Item> 
                }
                <Dropdown.Divider />
                <Dropdown.Item eventKey="5" onClick={handleLogout}><img src={LogoutIcon} className="dropdown-icon"></img>Logout</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default ProfileMenu
