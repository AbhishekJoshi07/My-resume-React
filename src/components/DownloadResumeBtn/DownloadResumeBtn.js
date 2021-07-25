// resume data
import resumePdf from "../../assets/data/Abhishek's resume.pdf";
// icon
import SaveAltIcon from '@material-ui/icons/SaveAlt';
// styles
import './DownloadResumeBtn.scss';

function DownloadResumeBtn() {

    return (
        <div className="download-btn-container">
            <a href={resumePdf} className="download-resume" download="Abhishek Joshi's Resume.pdf">
                <SaveAltIcon style={{ fontSize: 19, paddingRight: 1}} />
                <span>Download Resume</span>
            </a>
        </div>        
    );
}

export default DownloadResumeBtn;
