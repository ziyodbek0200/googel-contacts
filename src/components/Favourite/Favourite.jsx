import ContactRow from '../Contacts/ContactsRow';
import './Favourite.css';

export default function Favourite({ contacts, searchText }) {
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
                                        if (contact.is_fav) {
                                            return <ContactRow obj={contact} index={index} key={contact.id} />
                                        }
                                        return true;
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