const keys = require('../../config/config');

module.exports = (survey ) =>{
return (
    `
    <html>
 
    <body style='background-image: linear-gradient(to right top, #3d6870, #3a626c, #375c68, #345664, #32505f, #365b67, #3c656f, #437075, #608e84, #8aab8f, #bdc59c, #f5deb3);background-repeat:no-repeat;'>
    <div style='color:#F5DEB3'>
        <h1>${survey.title}</h1>
        <h3>${survey.subject}</h3>
        <h3>${survey.body}</h3>
        <div>
            <a style='color:#F5DEB3' href="${keys.redirectDomain}/api/surveys/${survey.id}/yes">Yes</a>
        </div>
        <div>
            <a style='color:#F5DEB3' href="${keys.redirectDomain}/api/surveys/${survey.id}/no">No</a>
        </div>
       
    </div>
    
    
    </body>
    </html>`
)}