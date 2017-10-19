import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addReminder, deleteReminder } from '../actions';

class App extends Component {

	constructor (props) {
		super(props);
		this.state = {
			text: '',
		}
	}

	addReminder() {
		// console.log('this', this);
		this.props.addReminder(this.state.text);
	}

	deleteReminder(key) {
		console.log('deleting reminders by key', key);
		console.log('deleting props', this.props);
		this.props.deleteReminder(key);
	}

	renderReminders() {
		const { reminders } = this.props;

		return (
			<ul className="list-group">
				{
					reminders.map(reminder => {
						return (
							<li key={reminder.id} className="list-group-item">
								<div className="list-item">{ reminder.text }</div>
								<div className="list-item delete-btn" onClick={ () => this.deleteReminder(reminder.id) }>&#x2715;</div>
							</li>
						)
					})
				}
			</ul>
		)
	}

	render() {
		return(

			<div className="App">
				<div className="title">
					Reminder Pro
				</div>

				<div className="form-inline reminder-form">
					<div className="form-group">
						<input className="form-control" placeholder="I have to ..." onChange={event => this.setState({text: event.target.value})} />
					</div>
				</div>

				<button className="input btn btn-success" onClick={() => this.addReminder()}>Add reminder</button>

				{ this.renderReminders() }

			</div>
		);
	}

}


function mapStateToProps(state) {
	// console.log('state', state);
	return {
		reminders: state
	}
}

export default connect(mapStateToProps, { addReminder, deleteReminder }) (App);