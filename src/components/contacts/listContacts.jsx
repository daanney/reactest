import React from 'react';

export const ListContacts =({contacts})=> {
    return (
        <React.Fragment>
            <h1>List Contacts</h1>
            <table className='table'>
                <thead className="thead-dark">
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Nem</th>
                        <th scope='col'>Address</th>
                        <th scope='col'>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map(c => <tr key={c.id}>
                        <th scope='row'>{c.id}</th>
                        <td>{c.firstName} {c.lastName}</td>
                        <td>{c.address1}<br />{c.address2}</td>
                        <td>{c.phone}</td>
                    </tr>)}
                </tbody>
            </table>
        </React.Fragment>
    );
}