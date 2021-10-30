import { useContext, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FunctionsContext } from '../Context/Context';
import './Contacts.css';
import DropDownEx from './DropDownEx';

function ContactRow({ obj, index }) {
    const iconsRef = useRef();
    const Functions = useContext(FunctionsContext);
    const [toggle, setToggle] = useState(false);

    const EnterMouse = () => {
        iconsRef.current.classList.add("opacity-100");
        iconsRef.current.classList.remove("opacity-0");
        iconsRef.current.style = "pointer-events: unset;";
    }

    const LeaveMouse = () => {
        iconsRef.current.classList.add("opacity-0");
        iconsRef.current.classList.remove("opacity-100");
        iconsRef.current.style = "pointer-events: none;";
    }

    const ToggleDropD = () => {
        setToggle(!toggle);
    }

    return (
        <tr onMouseEnter={EnterMouse}
            onMouseLeave={LeaveMouse}>
            <td>{obj.name}</td>
            <td>{obj.email}</td>
            <td>{obj.number}</td>
            <td className="text-end">
                <span ref={iconsRef} className="opacity-0 position-relative">
                    {
                        obj.is_fav ?
                            <i onClick={() => Functions.ChangeFavourite(obj.id)} className="mx-2 bi bi-star-fill text-primary"></i>
                            :
                            <i onClick={() => Functions.ChangeFavourite(obj.id)} className="mx-2 bi bi-star"></i>
                    }
                    <NavLink exact onClick={() => { Functions.setIsEdit(true); Functions.EditContact(obj); }} to="/edit"><i className="mx-2 bi bi-pencil"></i></NavLink>

                    <i onClick={ToggleDropD} className="ms-2 bi bi-three-dots-vertical"></i>
                    <DropDownEx toggle={toggle} id={obj.id} />
                </span>
            </td>
        </tr>
    )
}

export default ContactRow;