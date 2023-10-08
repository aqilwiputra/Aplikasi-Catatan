import React from "react";
import NoteItemBody from "./NoteItemBody";
import NoteItemAction from "./NoteItemAction";

function NoteItem({ title, body, id, onDelete, createdAt }) {
    return(  
            <div className="note-item">
                <NoteItemBody title={title} body={body} createdAt={createdAt} />
                <NoteItemAction id={id} onDelete={onDelete} />
            </div>
    )
}

export default NoteItem