import React from 'react'

 const surveyField = ({input,label, meta:{error,touched}}) => {
     
     
    return (
        <div className=''>
            <label>{label}</label>
            <input {...input}/>
            <span className='red-text'>
                {touched && error}
            </span>
            
        </div>
    )
}
 export default surveyField;