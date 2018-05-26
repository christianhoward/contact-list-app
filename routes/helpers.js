exports.formatPhone = (number) => {
    // removes all characters except for digits
    let num = (""+number).replace(/\D/g, '');
    let n = num.match(/^(\d{3})(\d{3})(\d{4})$/);
    return !n ? '' : `(${n[1]}) ${n[2]}-${n[3]}`;
}