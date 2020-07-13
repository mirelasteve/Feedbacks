const keys = require('../../config/config');

module.exports = (survey) =>{
    return `
    <html>
        <body>
            <div style='border:1px dash pink; text-align:center;'>
                <h3>${survey.title}</h3>
                <p>${survey.subject}</p>
                <p>${survey.body}</p>
                <div>
                    <a href="${keys.redirectDomain}/api/surveys/${survey.id}/yes">Yes</a>
                </div>
                <div>
                    <a href="${keys.redirectDomain}/api/surveys/${survey.id}/no">No</a>
                </div>
                
            </div>
        </body>
    </html>`
}