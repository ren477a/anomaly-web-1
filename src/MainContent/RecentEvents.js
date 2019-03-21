import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

import EventItem from './EventItem';
import { fetchMessages } from '../actions/messageActions';

class RecentEvents extends React.Component {
  componentWillMount() {
    this.props.fetchMessages();
  }

  render() {
    const eventItems = this.props.messages.map(message => {
      console.log(message);
      return <EventItem name={message[0]} time={message[1]} location={message[2]['name']} key={message[1]}/>
    })

    return (
      <div className="column is-6">
        <h1> { this.props.messages }</h1>
        <div className="card events-card">
          <header className="card-header">
            <p className="card-header-title">Recent Events</p>
            <Link to="#" className="card-header-icon" aria-label="more options">
              <span className="i  con">
                <i className="fa fa-angle-down" aria-hidden="true"></i>
              </span>
            </ Link>
          </header>
          <div className="card-table">
            <div className="content">
              <table className="table is-fullwidth is-striped">
                <tbody>
                  { console.log(this.props.messages) }
                </tbody>
              </table>
            </div>
          </div>
          <footer className="card-footer">
            <Link to="#" className="card-footer-item">View All</ Link>
          </footer>
        </div>
      </div>
    )
  }
}
  

const mapStateToProps = state => {
  // console.log(state.messages.items);
  return {messages: state.messages.items}
}

export default connect(mapStateToProps, { fetchMessages })(RecentEvents);
