import axios from 'axios';
import { useEffect, useState } from 'react';

const Skill = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        axios.get("/api/main/skill")
            .then(res => setSkills(res.data))
            .catch(error => console.log(error));
    }, []);

    const kinds = [...new Set(skills.map(skill => skill.kind))];

    return (
        <div className="skill">
            <div className="content-title">SKILL</div>
            <div className="skill-content">
                {kinds.map((kind, index) => (
                    <div key={index} className="skill-content-list">
                        <div>{kind}</div>
                        <div>
                            {skills.filter(skill => skill.kind === kind).map((skill, index) => (
                                <div key={index}>
                                    <img src={skill.icon} alt={skill.title} />
                                    <div>{skill.title}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skill;
