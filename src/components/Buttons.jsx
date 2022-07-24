import LinkedInButton from './Buttons/LinkedIn'
import EMailButton from './Buttons/EMail'


export default function Buttons() {
    return (
        <div className="buttons">
            <EMailButton/>
            <LinkedInButton/>
        </div>
    )
}