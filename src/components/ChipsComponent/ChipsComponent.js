import HeaderLabel from '../HeaderLabel/HeaderLabel';
import { cssConfigMap } from '../../utils/utils';

function ChipsComponent(props) {
    const { data, label } = props;
    const labelClasses = cssConfigMap[label]?.labelClasses;
    const chipClasses = cssConfigMap[label]?.chipClasses;

    return (
        <>
            <HeaderLabel label={label} labelClasses={labelClasses} />
            <div className="flex wrap">
                {data.map(item =>
                    <span className={chipClasses} key={item}>{item}</span>
                )}
            </div>
        </>
    );
}

export default ChipsComponent;
