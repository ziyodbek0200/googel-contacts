import React, { useEffect, useState } from 'react';
import ContactRow from '../Contacts/ContactsRow';
import './History.css';

export default function History({ contacts, history, searchText }) {
    const [result, setResult] = useState([]);

    let arr = [];

    for (let i = 0; i < contacts.length; i++) {
        for (let a = 0; a < history.length; a++) {
            if (history[a] === contacts[i].id) {
                arr.push(contacts[a]);
            }
        }
    }

    useEffect(() => {
        setResult(arr);
    }, []);

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
                                    result.map((r, index) => {
                                        if (r.name.toLowerCase().indexOf(searchText.toLowerCase()) === -1) {
                                            return false;
                                        }
                                        return <ContactRow obj={r} index={index} key={index} />
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