import { useEffect } from 'react';
import './Contacts.css';
import ContactRow from './ContactsRow';

export default function Contacts({ contacts, setEditFalse, searchText }) {

    useEffect(() => {
        setEditFalse.setIsEdit(false);
        setEditFalse.setEContact(null);
    });

    return (
        <>
            <div className="container contacts">
                <div className="row">
                    <div className="col-12">
                        <table className="table w-100">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Number</th>
                                    <th className="text-end"><i className="bi bi-three-dots-vertical"></i></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    contacts.map((contact, index) => {
                                        if (contact.name.toLowerCase().indexOf(searchText.toLowerCase()) === -1) {
                                            return false;
                                        }
                                        return <ContactRow obj={contact} index={index} key={contact.id} />
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}