import React from 'react';

export default class DetailContact extends React.Component {

    state = {
        loaded: false,
        contact: null
    }

    componentDidMount() {
        fetch('https://randomuser.me/api')
        .then(response => response.json())
        .then(data => this.setState({contact: data.results[0], loaded: true}))
    }

    render() {
        if(!this.state.loaded) return (
            <div className="spinner-border m-5" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        )

        const { contact } = this.state

        return (
        <React.Fragment>
            <h1>Contact Details #{this.props.match.params.id}*</h1>
            <p><i>*Showing mock up data from <code>https://randomuser.me</code></i></p>

            <div className='card col-md-3'>
                <img src={contact.picture.large} className='card-img-top' alt={contact.login.username} />
                <div className='card-body'>
                    <h5 className='card-title'>{contact.name.title} {contact.name.first} {contact.name.last}</h5>
                    <p className='card-text'>{contact.email}</p>
                </div>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'><b>Phone:</b> {contact.phone}</li>
                    <li className='list-group-item'><b>Address:</b> {contact.location.street.name} {contact.location.street.number}</li>
                    <li className='list-group-item'><b>City:</b> {contact.location.postcode} {contact.location.city}</li>
                </ul>
            </div>

            <button className='btn btn-primary m-2' onClick={this.props.history.goBack}>Back</button>
        </React.Fragment>
        );
    }
}