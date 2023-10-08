import React from "react";

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        // inisialisasi state
        this.state = {
            maxTitleValue: 50,
            title: '',
            body: '',
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this)
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(e) {
        const newTitle = e.target.value
        if (newTitle.length <= this.state.maxTitleValue) {
            this.setState(() => {
                return {
                    title: newTitle
                }
            })
        }
    }

    onBodyChangeEventHandler(e) {
        this.setState(() => {
            return {
                body: e.target.value
            }
        })
    }

    onSubmitEventHandler(e) {
        e.preventDeafult()
        this.props.addNote(this.state)
    }

    render() {
        return (
            <div className="note-input">
                <h2>Buat Catatan</h2>
                <form onSubmit={this.onSubmitEventHandler}>
                    <p className="note-input__title__char-limit">Sisa Karakter: {this.state.maxTitleValue - this.state.title.length}</p>
                    <input className="note-input__title" type="text" placeholder="Masukkan title" value={this.state.title} onChange={this.onTitleChangeEventHandler} />
                    <textarea className="note-input__body" type="text" placeholder="Masukkan bodymu di sini" value={this.state.body} onChange={this.onBodyChangeEventHandler} ></textarea>
                    <button type="submit">Buat</button>
                </form>
            </div>
        )
    }
}

export default NoteInput