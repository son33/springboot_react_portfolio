import { useEffect, useState } from "react";
import ContentList from "../components/ContentList";
import axios from "axios";

const Content = () => {
    const [content, setContent] = useState([]);

    useEffect(() => {
        axios.get('api/main')
        .then(res => setContent(res.data))
        .catch(error => console.log(error))
    }, []);

    return (
        <div className="content-wrapper">
            {content.map((item, index) => <ContentList key={index} content_name={item.mainTitle}/>)}
        </div>
    )
}

export default Content;
