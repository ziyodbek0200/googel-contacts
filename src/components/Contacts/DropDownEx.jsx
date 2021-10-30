import { useContext } from "react"
import { FunctionsContext } from "../Context/Context"

export default function DropDownEx({ id, toggle }) {
    const Functions = useContext(FunctionsContext);
    
    return toggle ? (
        <div className="d-flex position-absolute dropExample">
            <ul className="list-group">
                <li onClick={() => Functions.DeleteContact(id)} className="list-group-item" aria-current="true">
                    <i className="bi bi-trash"></i>
                    <span className="ms-2">Delete</span>
                </li>
            </ul>
        </div>
    ) : (
        <div className="d-none position-absolute dropExample">
            <ul className="list-group">
                <li onClick={() => Functions.DeleteContact(id)} className="list-group-item" aria-current="true">
                    <i className="bi bi-trash"></i>
                    <span className="ms-2">Delete</span>
                </li>
            </ul>
        </div>
    )
}