import HeaderLabel from '../HeaderLabel/HeaderLabel';
import { cssConfigMap } from '../../utils/utils';

function Projects(props) {
    const { data, label } = props;
    const labelClasses = cssConfigMap[label]?.labelClasses;

    return (
        <>
            <HeaderLabel label={label} labelClasses={labelClasses} />
            <div className="pr-30 text-align-justify">
                {data.map((ele, i) => {
                    return (
                        <div key={ele.heading} className="project-wrapper">
                            <div className="heading-md">{ele.heading}</div>
                            <div className="pt-5">{ele.desc}</div>
                            <div className="time-period pt-5">
                                {`(${ele.timePeriod})`}
                            </div>
                            <ul>
                                {ele.tasks.map(task => <li key={task}>{task}</li>)}
                            </ul>
                            <div className="flex wrap pt-5">
                                {ele.technologies.map(tech => {
                                    return (<span className="chip-outlined-sm" key={tech}>{tech}</span>);
                                })}
                            </div>
                        </div>
                    );
                }
                )}
            </div>
        </>
    );
}

export default Projects;
