// core components
import Footer from "./components/Footer/Footer";
import Profile from "./components/Profile/Profile";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import ListComponent from "./components/ListComponent/ListComponent";
import ChipsComponent from "./components/ChipsComponent/ChipsComponent";
import DownloadResumeBtn from "./components/DownloadResumeBtn/DownloadResumeBtn";
// resume data
import data from './assets/data/resumeData.json';
// util
import { SKILLS, TOOLS, PROJECT, EDUCATION, WORKEXPERIENCE, ACHIEVEMENTS } from "./utils/utils";
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
