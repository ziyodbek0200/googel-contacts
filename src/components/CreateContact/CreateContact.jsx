import { useEffect, useRef } from 'react';
import './CreateContact.css';
import { NavLink } from 'react-router-dom';

export default function CreateContact({ ExitEdit, CreateContactF, isEdit, eContact, EditContactF }) {
    const name_ref = useRef();
    const number_ref = useRef();
    const company_ref = useRef();
    const email_ref = useRef();
    const is_fav_ref = useRef();

    useEffect(() => {
        if (eContact !== null) {
            name_ref.current.value = eContact.name;
            company_ref.current.value = eContact.company;
            email_ref.current.value = eContact.email;
            number_ref.current.value = eContact.number;
            is_fav_ref.current.checked = eContact.is_fav;
        } else { ClearInputs(); }
    }, [eContact]);

    const ClearInputs = () => {
        name_ref.current.value = "";
        number_ref.current.value = "";
        company_ref.current.value = "";
        email_ref.current.value = "";
        is_fav_ref.current.checked = false;
    }

    const SendObjToApp = () => {
        let contact = {
            id: null,
            name: name_ref.current.value,
            email: email_ref.current.value,
            number: number_ref.current.value,
            company: company_ref.current.value,
            is_fav: is_fav_ref.current.checked
        };

        if (contact.name !== "" && contact.email !== ""
            && contact.number !== "" && contact.company !== "") {
            isEdit ? EditContactF(contact) : CreateContactF(contact);
            ClearInputs();
        } else {
            alert("Fill all the gaps, pls!");
        }
    }

    return (
        <>
            <div className="card w-75">
                {isEdit
                    ? <div className="card-header d-flex justify-content-between align-items-center">
                        <b className="fs-3">Edit Contact</b>
                        <NavLink to="/" exact>
                            <button onClick={ExitEdit} className="btn btn-danger">Exit Edit</button>
                        </NavLink>
                    </div>
                    : <div className="card-header">
                        <b className="fs-3">Create Contact</b>
                    </div>}
                <div className="card-body">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Full Name</label>
                        <input type="text" id="name" className="form-control" ref={name_ref} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" id="email" className="form-control" ref={email_ref} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="number" className="form-label">Phone Number</label>
                        <input type="text" id="number" className="form-control" ref={number_ref} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="company" className="form-label">Company</label>
                        <input type="text" id="company" className="form-control" ref={company_ref} />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" ref={is_fav_ref} id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Favourite</label>
                    </div>
                </div>
                <div className="card-footer text-end">
                    <NavLink to="/" exact>
                        <button onClick={SendObjToApp} className="btn btn-primary text-white">
                            {isEdit
                                ? <><i className="bi bi-pencil-square text-white"></i> Edit</>
                                : <><i className="bi bi-plus text-white"></i> Create</>}
                        </button>
                    </NavLink>
                </div>
            </div>
        </>
    )
}