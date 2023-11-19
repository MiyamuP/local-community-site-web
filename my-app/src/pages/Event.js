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
            .get('http://127.0.0.1:8000/api/articlelist/1/')
            .then(response => {
                setPosts(response.data);
            })
            .catch(() => {
                console.log('通信に失敗しました');
            });
        console.log(posts);
    }, []);


    // let articles = [
    //     {
    //         Article_id: 1,
    //         Article_title: "記事１",
    //         Author: "宮村一希",
    //         text: "記事の本文１だよ！！",
    //         create_time: "2023-11-17-10-30",
    //         Comment_id: 1,
    //         Prefecture_id: 1,
    //     }, {
    //         Article_id: 2,
    //         Article_title: "記事２",
    //         Author: "田中太郎",
    //         text: "記事の本文２だよ！！",
    //         create_time: "2023-11-18-11-30",
    //         Comment_id: 2,
    //         Prefecture_id: 1,
    //     }, {
    //         Article_id: 3,
    //         Article_title: "記事３",
    //         Author: "愛知幸田",
    //         text: "記事の本文３だよ！！",
    //         create_time: "2023-11-18-12-00",
    //         Comment_id: 3,
    //         Prefecture_id: 1,
    //     }, {
    //         Article_id: 4,
    //         Article_title: "記事４",
    //         Author: "宮村一希",
    //         text: "記事の本文４だよ！！",
    //         create_time: "2023-11-18-18-30",
    //         Comment_id: 4,
    //         Prefecture_id: 1,
    //     }, {
    //         Article_id: 5,
    //         Article_title: "記事５",
    //         Author: "田中太郎",
    //         text: "記事の本文２だよ！！",
    //         create_time: "2023-11-18-21-30",
    //         Comment_id: 5,
    //         Prefecture_id: 1,
    //     }, {
    //         Article_id: 6,
    //         Article_title: "記事６",
    //         Author: "佐藤太一",
    //         text: "記事の本文６だよ！！",
    //         create_time: "2023-11-19-08-00",
    //         Comment_id: 6,
    //         Prefecture_id: 1,
    //     }
    // ];

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
                                <h5 className="card-title">{val.Article_title}</h5>
                                <p className="card-text">{val.Author}</p>
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