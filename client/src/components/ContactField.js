import React from 'react';

export default ({ input, name, label, type, options, placeholder, pattern, meta: { error, touched } }) => {
    switch (type) {
        case 'select':
            return (
                <div>
                    <label>{label}</label>
                    <select {...input}>
                        <option value="" disabled>Select {label}</option>
                        {
                            options.map(option => <option key={option.id} value={option.id}>{option.data}</option>)
                        }
                    </select>
                </div>
            );
        case 'email':
            return (
                <div>
                    <label>{label}</label>
                    <input {...input} placeholder={placeholder} pattern={pattern} type={type} required />
                    <div style={{ marginBottom: '20px', color: 'red' }}>
                        {touched && error}
                    </div>
                </div>
            );
        case 'tel':
            return (
                <div>
                    <label>{label}</label>
                    <input {...input} placeholder={placeholder} pattern={pattern} type={type} required />
                    <div style={{ marginBottom: '20px', color: 'red' }}>
                        {touched && error}
                    </div>
                </div>
            );
        default:
            return (
                <div>
                    <label>{label}</label>
                    <input {...input} placeholder={placeholder} pattern={pattern} type={type} required />
                    <div style={{ marginBottom: '20px', color: 'red' }}>
                        {touched && error}
                    </div>
                </div>
            );
    }
};