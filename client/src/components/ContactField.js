import React from 'react';

export default ({ input, name, label, type, options, placeholder, pattern, meta: { error, touched } }) => {
    switch (type) {
        case 'email':
            return (
                <div>
                    <label>{label}</label>
                    <input {...input} placeholder={placeholder} pattern={pattern} required />
                    <div style={{ marginBottom: '20px', color: 'red' }}>
                        {touched && error}
                    </div>
                </div>
            );
        case 'tel':
            return (
                <div>
                    <label>{label}</label>
                    <input {...input} placeholder={placeholder} pattern={pattern} required />
                    <div style={{ marginBottom: '20px', color: 'red' }}>
                        {touched && error}
                    </div>
                </div>
            );
        default:
            return (
                <div>
                    <label>{label}</label>
                    <input {...input} placeholder={placeholder} pattern={pattern} required />
                    <div style={{ marginBottom: '20px', color: 'red' }}>
                        {touched && error}
                    </div>
                </div>
            );
    }
};