export default [
    { label: 'First Name', name: 'firstname', type: 'text', placeholder: 'Enter First Name', pattern: '[a-zA-Z]+' }, 
    { label: 'Last Name', name: 'lastname', type: 'text', placeholder: 'Enter Last Name', pattern: '[a-zA-Z]+' }, 
    { label: 'E-Mail', name: 'email', type: 'email', placeholder: 'Enter E-Mail Address', pattern: '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$' }, 
    { label: 'Phone Number', name: 'phone', type: 'tel', placeholder: 'XXX-XXX-XXXX', pattern: '^(\\+\\d{1,2}\\s)?\\(?\\d{3}\\)?[\\s.-]\\d{3}[\\s.-]\\d{4}$' }, 
    { label: 'Status', name: 'status', type: 'text', placeholder: 'Enter Status' }, 
]