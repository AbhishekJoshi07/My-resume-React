import EmailIcon from "@material-ui/icons/Email";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import "./Contact.scss";

function Contact(props) {
    const { data } = props;
    const iconConfig = { fontSize: 15, paddingRight: 10 };

    return (
        <div className="contact">
            <div className="data-row">
                <div className="width-50">
                    <a href={`mailto:${data.email}`} className="content">
                        <EmailIcon style={iconConfig} />
                        {data.email}
                    </a>
                </div>
                <div className="width-50">
                    <a href={`tel:${data.phoneNum}`} className="content">
                        <PhoneIphoneIcon style={iconConfig} />
                        {data.phoneNum}
                    </a>
                </div>
            </div>
            <div className="data-row">
                <div className="width-50">                
                    <div className="content">
                        <LocationOnIcon style={iconConfig} />
                        {data.location}
                    </div>
                </div>
                <div className="width-50">                    
                    <a target="_blank" href={`https://www.${data.linkedinUrl}`} rel="noreferrer" className="content">
                        <LinkedInIcon style={iconConfig} />
                        {data.linkedinUrl}
                    </a>
                </div>
            </div>
            <div>
                <a target="_blank" href={`https://${data.githubUrl}`} rel="noreferrer" className="content">
                    <GitHubIcon style={iconConfig} />
                    {data.githubUrl}
                </a>
            </div>
        </div>
    );
}

export default Contact;
