import { useState } from "react";
import data from "./data";
import "./style.css";

//Single Selection
const Accordion = () => {
    const [selection, setSelection] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    const HandleSingleSelection = (Id) => {
        setSelection(Id === selection ? null : Id);
    }

    return (
        <div className="wrapper">
            <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Multi Selection Button</button>
            <div className="accordion">
                {
                    data && data.length > 0 ? (
                        data.map((dataItem) => (
                            <div onClick={() => HandleSingleSelection(dataItem.id)} className="item">
                                <p className="title">{dataItem.question}</p>
                                {selection === dataItem.id ?
                                    <p className="content">{dataItem.answer}</p>
                                    : null
                                }
                            </div>
                        )
                        ))
                        : null
                }
            </div>
        </div>
    );
}

export default Accordion;