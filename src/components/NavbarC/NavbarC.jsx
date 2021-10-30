import React, { useRef } from 'react';
import './NavbarC.css';
import ContactImage from '../../media/contacts.png';

function NavbarC({ setSearchText }) {
    const searchRef = useRef();

    const HandleSearchVal = () => {
        setSearchText(searchRef.current.value);
    }

    return (
        <>
            <div className="navbar-custom">
                <div className="first">
                    <i className="bi bi-list fs-4 me-2"></i>
                    <span>
                        <img src={ContactImage} className="me-2" alt="Contacts" />
                        <span className="fs-5">Contacts</span>
                    </span>
                </div>
                <div className="second me-auto">
                    <div className="input-group w-75">
                        <span className="input-group-text" id="basic-addon1"><i className="bi bi-search"></i></span>
                        <input ref={searchRef} onInput={HandleSearchVal} type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon1" />
                    </div>
                </div>
                <div className="third">
                    <span className="me-3">
                        <i className="bi bi-question-circle mx-2"></i>
                        <i className="bi bi-gear"></i>
                    </span>
                    <span className="ms-3 d-flex align-items-center">
                        <i className="bi bi-grid-3x3-gap mx-2"></i>
                        <img src={ContactImage} alt="User Profile" />
                    </span>
                </div>
            </div>
        </>
    )
}

export default NavbarC;