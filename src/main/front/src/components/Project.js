import { useEffect, useState } from "react";
import ProjectModal from "./ProjectModal";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { modalDisplayOn } from "../store";

const Project = () => {
    const [projectList, setProjectList] = useState([]);
    const [selectProject, setSelectProject] = useState(null);
    const modalDisPlay = useSelector((store) => store.modal.display);
    const disPatch = useDispatch();

    useEffect(() => {
        axios.get("/api/project")
            .then(res => setProjectList(res.data))
            .catch(error => console.log(error))
    }, []);

    const handleProjectClick = (project) => {
        setSelectProject(project);
        disPatch(modalDisplayOn());
    }

    return (
        <div className="project">
            <div className="content-title">PROJECT</div>
            <div className="project-list-wrapper">
                {projectList.map((project) => (
                    <div key={project.projectNo} id={project.title} className="project-list-title" onClick={() => handleProjectClick({ ...project })}>{project.title}</div>
                ))}
            </div>
            {modalDisPlay =='flex' && <ProjectModal project={selectProject} />}
        </div>
    )
}

export default Project;