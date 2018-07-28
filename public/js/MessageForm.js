import React from 'react'
import { connect } from 'react-redux'
import { addAction, changeSurnameMessageAction, changeContentMessageAction } from './actions/messagesActions'

class MessageForm extends React.Component {
    constructor(props) {
        super(props);

        this.addMessaga = this.addMessaga.bind(this);
        this.changeContent = this.changeContent.bind(this);
        this.changeSurname = this.changeSurname.bind(this);
    }

    addMessaga() {
        let data = {
            surname: this.props.surname,
            content: this.props.content
        }

        this.props.dispatch(addAction(data));
    }

    changeContent({currentTarget}) {
        this.props.dispatch(changeContentMessageAction(currentTarget.value));
    }

    changeSurname({currentTarget}) {
        this.props.dispatch(changeSurnameMessageAction(currentTarget.value));
    }

    render() {
		return (
            <div> 
                <textarea disabled={this.props.isLoader} value={this.props.content} onChange={this.changeContent}/>
                <br/>
                <input disabled={this.props.isLoader} value={this.props.surname} onChange={this.changeSurname} placeholder="Podaj imie" />
                <button disabled={this.props.isLoader} onClick={this.addMessaga}> Dodaj </button>
            </div>
		)
    }
}

export default connect((state, props) => {
    return {
        isLoader: state.requestReduces.isLoader,
        surname: state.messagesReduces.surname,
        content: state.messagesReduces.content
    };
})(MessageForm);