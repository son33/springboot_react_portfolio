import ModifyButton from "./ModifyButton";
import Introduce from "./Introduce"
import AboutMe from "./AboutMe"
import Skill from "./Skill";

const ContentList = (props) => {
    const contentName = props.content_name;
    return (
        <>
            <div id={contentName} className={contentName + "-wrapper"}>
                <ModifyButton content_name={contentName} />
                {contentName === "introduce" ? <Introduce />
                    : contentName === "aboutMe" ? <AboutMe />
                        : contentName === "skill" ? <Skill /> : null
                }
            </div>
        </>
    )
}

export default ContentList;