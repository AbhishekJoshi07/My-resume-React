import HeaderLabel from '../HeaderLabel/HeaderLabel';
import { cssConfigMap } from '../../utils/utils';

function ListComponent(props) {
    const { data, label } = props;
    const labelClasses = cssConfigMap[label]?.labelClasses;
    const listClasses = `${cssConfigMap[label]?.listClasses} list-main`;
    const fontSize = cssConfigMap[label]?.fontSize;

    return (
        <>
            <HeaderLabel label={label} labelClasses={labelClasses} />
            <div style={{ fontSize: fontSize }}>
                {data.map(ele => 
                    (
                        <div className={listClasses} key={ele.timePeriod}>
                            {ele.info}
                            <span className="time-period">
                                {` (${ele.timePeriod})`}
                            </span>
                            {ele.achievements &&
                                <>
                                    <div className="time-period pt-5">
                                        Achievements
                                </div>
                                    <ul>
                                        {ele.achievements.map(item => <li key={item}>{item}</li>)}
                                    </ul>
                                </>
                            }
                        </div>
                    )                
                )}
            </div>
        </>
    );
}

export default ListComponent;
