import React from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";


export const Event = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        axios
            .get('http://127.0.0.1:8000/api/articlelist/' + id + '/')
            .then(response => {
                setPosts(response.data);
                console.log(posts);
            })
            .catch(() => {
                console.log('通信に失敗しました');
            });
    }, []);

    const toArticle = (val) => {
        console.log(val);
        navigate('/article', { state: { article: val } });
    }

    return (
        <div className="container py-4" id="works">
            <div className="d-flex justify-content-center">
                <h2>地域コミュニティサイト</h2>
            </div>
            <div className="d-flex justify-content-center">
                <p>このサイトは、地域内外の交流を目的としたサイトです。</p><br /><br /><br />
            </div>
            <div className="row row-cols-3 row-cols-md-3 g-4">
                {posts.map((val) => (

                    <div className="col" key={val.Article_id}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{val.title}</h5>
                                <p className="card-text">{val.author}</p>
                                <p className="card-text"><small className="text-muted">{val.create_time}</small></p>
                                <div style={{ textAlign: "right" }}><button className="btn btn-primary" onClick={() => toArticle(val)}>もっと見る</button></div>
                            </div>
                        </div>
                    </div>
                ))}


            </div>
        </div>
    );
}
export default Event;