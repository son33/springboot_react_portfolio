import ModifyButton from "./ModifyButton";
import Introduce from "./Introduce";
import AboutMe from "./AboutMe";
import Skill from "./Skill";
import Project from "./Project";
import Board from "./Board";
import { useSelector } from "react-redux";

const ContentList = (props) => {
    const loginResult = useSelector((store) => store.loginResult);
    const contentName = props.content_name;
    let ContentComponent = null;

    switch (contentName) {
        case 'introduce':
            ContentComponent = Introduce;
            break;
        case 'aboutMe':
            ContentComponent = AboutMe;
            break;
        case 'skill':
            ContentComponent = Skill;
            break;
        case 'project':
            ContentComponent = Project;
            break;
        case 'board':
            ContentComponent = Board;
            break;
        default:
            ContentComponent = null;
            break;
    }

    return (
        <>
            <div id={contentName} className={contentName + "-wrapper"}>
                {ContentComponent && <ContentComponent />}
                {loginResult > 0 ? (<ModifyButton content_name={contentName} />) : ''}
            </div>
        </>
    )
}

export default ContentList;
