import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { removeAction } from './actions/messagesActions'

class MessagesTable extends React.Component {
    constructor(props) {
        super(props);

        this.deleteMessage = this.deleteMessage.bind(this);
    }

    deleteMessage(element) {
        this.props.dispatch(removeAction(element.target.attributes['data-id'].value));
    }

    render() {
		return (
            <table>
                {this.props.messages.map(message => (
                    <tr>
                        <td>
                            {message.surname} : {message.content}
                        </td>
                        <td>
                            <button data-id={message.id} onClick={this.deleteMessage}> Kasuj </button>
                        </td>
                    </tr>
                ))}
          </table> 
		)
    }
}

MessagesTable.propTypes = {
    messages: PropTypes.array.isRequired
}

export default connect()(MessagesTable);