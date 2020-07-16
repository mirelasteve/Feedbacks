import React from 'react'

 const surveyField = ({input,label,userEmails, meta:{error,touched}}) => {
     
    return (
        <div className='col m11'>
            <label className='text-light-app fontSize-1rem'>{label}</label>
            {
                label==='From: '
                ? userEmails.length 
                    ? <input className='input-field' {...input} placeholder={userEmails[0].value} ></input> 
                    :''
                : <input className='input-field' {...input}/>

            }
            
            <span className='red-text'>
                {touched && error}
            </span>
            
        </div>
    )
}
 export default surveyField;