// core components
import Footer from "../Footer/Footer";
import Profile from "../Profile/Profile";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import ListComponent from "../ListComponent/ListComponent";
import ChipsComponent from "../ChipsComponent/ChipsComponent";
import DownloadResumeBtn from "../DownloadResumeBtn/DownloadResumeBtn";
// resume data
import data from '../../assets/data/resumeData.json';
// util
import { SKILLS, TOOLS, PROJECT, EDUCATION, WORKEXPERIENCE, ACHIEVEMENTS } from "../../utils/utils";
// styles
import './MyResumeApp.scss';

function App() {

    return (
        <>
            <DownloadResumeBtn />
            <page pagesize="A4">
                <Profile data={data.profile} />
                <Contact data={data.contact} />
                <div className="flex p-30">
                    <div className="width-70">
                        <ListComponent label={WORKEXPERIENCE} data={data.workExperience} />
                        <Projects label={PROJECT} data={data.currentProjects} />
                    </div>
                    <div className="width-30">
                        <ChipsComponent label={SKILLS} data={data.skills} />
                        <ListComponent label={ACHIEVEMENTS} data={data.achievements} />
                        <ChipsComponent label={TOOLS} data={data.tools} />
                        <ListComponent label={EDUCATION} data={data.education} />
                    </div>
                </div>
            </page>
            <Footer />
        </>
    );
}

export default App;
