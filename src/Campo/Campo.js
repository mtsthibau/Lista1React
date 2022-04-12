import React from 'react';

import './Campo.css';

export class Campo extends React.Component {
    render() {
        const { name, placeholder, valor, onChange } = this.props;
        return (
            <div>
               <h3>{name}</h3>
               <input className="form-input" placeholder={placeholder} value={valor} onChange={onChange}></input>
            </div>
        );
    }
}
