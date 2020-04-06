import React from 'react';

export default class CreateContact extends React.Component {
    state = {
        firstName: {label: 'First Name', placeholder: 'John', required: true, valid: true, value: ''},
        lastName: {label: 'Last Name', placeholder: 'Doe', required: true, valid: true, value: ''},
        address1: {label: 'Address 1', placeholder: 'Examplestreet 1337', required: true, valid: true, value: ''},
        address2: {label: 'Address 2', placeholder: '8000 Zürich', required: true, valid: true, value: ''},
        email: {label: 'Email', placeholder: 'john.doe@example.com', required: true, valid: true, value: ''},
        phone: {label: 'Phone', placeholder: '+41 99 123 45 67', required: false, valid: true, value: ''}
    }

    onChange =(event)=> {
        const name = event.target.name
        const item = this.state[name]
        item.value = event.target.value
        this.setState({ [name]: item})
    }

    onCreate =()=> {
        console.log(this.state)
        const formData = this.state
        let newContact = {}
        let errors = 0
        for(const key in formData) {
            const item = formData[key]
            if(item.required && item.value.trim().equals('')) {
                errors++;
                formData[key].valid = false
                continue
            }
            newContact[key] = item.value
        }

        console.log(errors)

        if(errors > 0) {
            this.setState(formData)
            return
        }
        
        this.props.onSaveContact(newContact)
        Object.keys(formData).forEach(k => formData[k].value='')
        alert('New Contact saved!')
    }

    render() { 
        return (
            <React.Fragment>
                <h1>Create New Contact</h1>
                {Object.keys(this.state).map((key) => <div key={key} className={this.state[key].valid ? '' : 'error'}>
                    <label>{this.state[key].label} {this.state[key].required && <span className='required'>*</span>}</label>
                    <input type='text' name={key} placeholder={this.state[key].placeholder} value={this.state[key].value} className='form-control' onChange={this.onChange} />
                </div>)}
                <button onClick={this.onCreate} className='btn btn-primary m-2'>Save</button>
            </React.Fragment>
        );
    }
}