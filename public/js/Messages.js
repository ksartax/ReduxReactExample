import React from 'react'
import PropTypes from 'prop-types'

import MessagesTable from './MessagesTable'
import MessageForm from './MessageForm'

import { connect } from 'react-redux'

class Messages extends React.Component {
    render() {
		return (
			<div>
				<p> Messages </p>
                <MessageForm />
                <br/>
                <MessagesTable messages={this.props.messages} />
			</div>
		)
    }
}

export default connect((state, action) => {
    return {
        messages: state.messagesReduces.messages
    };

})(Messages);