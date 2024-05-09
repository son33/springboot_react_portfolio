import { useDispatch, useSelector } from "react-redux";
import SwiperImage from "./SwiperImage";
import { modalDisplayOff } from "../store";

const ProjectModal = ({project, display}) => {
    const modalDisPlay = useSelector((store) => store.str);
    const disPath = useDispatch();

    const handleCloseProject = () => {
        disPath(modalDisplayOff());
    }

    return (
        <div id="modal" className="project-modal" style={{modalDisPlay}}>
            <div className="project-content-wrapper">
                <div className="project-exit" onClick={handleCloseProject}>X</div>
                <div className="project-title">
                    {project.title}
                    <div className="project-day">{project.start} ~ {project.end}</div>
                </div>
                <div className="project-content">
                    <div className="project-img">
                        <SwiperImage projectNo={project.projectNo} />
                    </div>
                    <div className="project-main">
                        <div className="project-explain" dangerouslySetInnerHTML={{__html: project.content}}>
                        </div>
                        <div className="project-info">
                            <div className="project-description">
                                <div className="description-label">front-end</div>
                                <div className="description-content">{project.frontEnd}</div>
                            </div>
                            <div className="project-description">
                                <div className="description-label">back-end</div>
                                <div className="description-content">{project.backEnd}</div>
                            </div>
                            <div className="project-description">
                                <div className="description-label">DB</div>
                                <div className="description-content">{project.db}</div>
                            </div>
                            <div className="project-url">
                                <a href={project.url} target="_blank">{project.url}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectModal;