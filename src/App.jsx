import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contacts from './components/Contacts/Contacts';
import CreateContact from './components/CreateContact/CreateContact';
import History from './components/History/History';
import Favourite from './components/Favourite/Favourite';
import NavbarC from './components/NavbarC/NavbarC';
import SidebarC from './components/SidebarC/SidebarC';
import { useState } from 'react';
import { FunctionsContext } from './components/Context/Context';

function App() {
  const [contacts, setContacts] = useState([
    { id: 1, name: "Abdulhamid Muxtorov", email: "example@gmail.com", number: "+998943943332", company: "Schwarzkopf", is_fav: true },
    { id: 2, name: "Abdulloh Aliyev", email: "examplekimdir@gmail.com", number: "+998945678900", company: "iCode Academy", is_fav: false },
    { id: 3, name: "Samandar Hamraqulov", email: "exampleoshadir@gmail.com", number: "+998999999999", company: "Alphabet", is_fav: false },
    { id: 4, name: "Bobur Akilkhanov", email: "examplekimekan@gmail.com", number: "+998012345678", company: "Apple", is_fav: true }
  ]);
  const [eContact, setEContact] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [history, setHistory] = useState([]);

  const WriteHistory = (id) => {
    let isDefined = false;
    history.map(h => {
      if (h === id) {
        isDefined = true;
      }
      return true;
    })

    if (!isDefined) {
      setHistory(history.concat(id));
    }
  }

  const ChangeFavourite = (id) => {
    WriteHistory(id);
    setContacts(contacts.map(contact => {
      if (id === contact.id) {
        contact.is_fav = !contact.is_fav;
      }
      return contact;
    }))
  }

  const CreateContactF = (obj) => {
    let nId = Date.now();
    obj.id = nId;
    WriteHistory(nId);
    setContacts([...contacts, obj]);
  }

  const EditContact = (obj) => {
    setIsEdit(true);
    setEContact(obj);
  }

  const ExitEdit = () => {
    setIsEdit(false);
    setEContact(null);
  }

  const EditContactF = (eObj) => {
    setContacts(contacts.map(contact => {
      if (eContact.id === contact.id) {
        WriteHistory(contact.id);
        contact.name = eObj.name;
        contact.email = eObj.email;
        contact.number = eObj.number;
        contact.company = eObj.company;
        contact.is_fav = eObj.is_fav;
      }
      return contact;
    }));
    setEContact(null);
    setIsEdit(false);
  }

  const DeleteContact = (id) => {
    let confirmation = window.confirm("Are you sure to delete this object?");
    if (confirmation) {
      setContacts(contacts.filter(c => c.id !== id));
    }
  }

  return (
    <div>
      <FunctionsContext.Provider value={{ ChangeFavourite, EditContact, isEdit, setIsEdit, DeleteContact }}>
        <Router>
          <NavbarC setSearchText={setSearchText} />
          <div className="without-navbar">
            <SidebarC CreateContactF={CreateContactF} />
            <Switch>
              <Route path="/" exact render={() => <Contacts
                contacts={contacts}
                searchText={searchText}
                setEditFalse={{ setIsEdit, setEContact }}
              />} />
              <Route path="/history" exact render={() => <History
                contacts={contacts}
                history={history}
                searchText={searchText}
              />} />
              <Route path="/favourite" exact render={() => <Favourite
                contacts={contacts}
                searchText={searchText}
              />} />
              <Route path="/edit" exact render={() => <CreateContact
                ExitEdit={ExitEdit}
                EditContactF={EditContactF}
                CreateContactF={CreateContactF}
                isEdit={isEdit}
                eContact={eContact}
              />} />
              <Route path="/add" exact render={() => <CreateContact
                CreateContactF={CreateContactF}
                isEdit={isEdit}
                eContact={eContact}
              />} />
            </Switch>
          </div>
        </Router>
      </FunctionsContext.Provider>
    </div>
  );
}

export default App;
