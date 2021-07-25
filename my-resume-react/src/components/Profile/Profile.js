import "./Profile.scss";
import image from "../../assets/photos/profile.jpg";

function Profile(props) {
    const { data } = props;

    return (
        <div className="profile">
            <div>
                <div className="full_name">{data.fullName}</div>
                <div className="title_desc">{data.titleDesc}</div>
                <div className="summary_desc">{data.summaryDesc}</div>
            </div>
            <img src={image} className="image" alt="pic" />
        </div>
    );
}

export default Profile;
