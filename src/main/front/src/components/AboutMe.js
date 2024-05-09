import axios from "axios";
import { useEffect, useState } from "react";

const AboutMe = () => {
    const [about, setAbout] = useState({
        name: '',
        address: '',
        sex: '',
        birthday: '',
        mail1: '',
        mail2: '',
        phone: ''
    });

    useEffect(() => {
        axios.get("/api/main/aboutMe")
            .then(res => setAbout(res.data))
            .catch(error => console.log(error));
    }, []);

    const item = (icon, title, value) => (
        <div className="aboutMe-content-list">
            <div className="aboutMe-icon">
                <span className="material-symbols-outlined">{icon}</span>
            </div>
            <div>
                <div>{title}</div>
                <div>{value}</div>
            </div>
        </div>
    );

    return (
        <div className="aboutMe">
            <div className="content-title">ABOUT ME</div>
            <div className="aboutMe-content">
                {item('accessibility_new', '이름', about.name)}
                {item('home', '주소', about.address)}
                {item('wc', '성별', about.sex)}
                {item('cake', '생일', about.birthday)}
                {item('mail', '메일', `${about.mail1}\n${about.mail2}`)}
                {item('phone_iphone', '전화번호', about.phone)}
            </div>
        </div>
    );
}

export default AboutMe;