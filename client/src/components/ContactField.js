import React from 'react';

export default ({ input, name, label, type, options, placeholder }) => {
    switch (type) {
        default:
            return (
                <div>
                    <label>{label}</label>
                    <input {...input} placeholder={placeholder} />
                </div>
            );
    }
};