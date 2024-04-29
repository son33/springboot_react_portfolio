import ModifyButton from "./ModifyButton";
import Introduce from "./Introduce"
import AboutMe from "./AboutMe"
import Skill from "./Skill";
import Project from "./Project";
import Board from "./Board";

const ContentList = (props) => {
    const contentName = props.content_name;
    return (
        <>
            <div id={contentName} className={contentName + "-wrapper"}>
                <ModifyButton content_name={contentName} />
                {contentName === "introduce" ? <Introduce />
                    : contentName === "aboutMe" ? <AboutMe />
                        : contentName === "skill" ? <Skill />
                            : contentName === "project" ? <Project />
                                : contentName === "board" ? <Board /> : null
                }
            </div>
        </>
    )
}

export default ContentList;