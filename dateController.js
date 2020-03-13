    exports.getCurrentDate = () => {
    let today = new Date();
    //to get the date and the day of the week
    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    }
    
    return today.toLocaleDateString("en-US", options);
}