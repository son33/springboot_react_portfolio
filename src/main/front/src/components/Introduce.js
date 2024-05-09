import { useEffect, useState } from 'react';
import axios from 'axios';

const Introduce = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        axios.get('/api/main/introduce')
            .then(res => {
                setTitle(res.data.title);
                setContent(res.data.content);
            })
            .catch(error => console.log(error))
    }, []);
    return (
        <>
            <div className="introduce-background"></div>
            <div className="introduce">
                <div className="introduce-title" dangerouslySetInnerHTML={{ __html: title }}></div>
                <div className="introduce-content" dangerouslySetInnerHTML={{ __html: content }}></div>
            </div>
        </>
    )
}

export default Introduce;