const isValidEmail = (email)=>{

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    return (re).test(email);
}
export default (emails)=>{
    // console.log(emails);
    const invalidEmails = emails
                        .split(',')
                        .map(email=>email.trim())
                        .filter(email=>!isValidEmail(email))
    
    if(invalidEmails.length){
        const result = invalidEmails.filter(x=>x.length)
        return `Invalid emails: ${result}`
    }
    return null;
}