import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from 'react-router-dom';

export const Article = () => {
    const location = useLocation();
    console.log(location);
    const [comments, setComments] = useState([]);
    const [commentText, setCommetText] = useState('');

    useEffect(() => {
        axios
            .get('http://127.0.0.1:8000/api/commentlist/' + location.state.article.article_id)
            .then(response => {
                setComments(response.data);
                console.log(comments);
            })
            .catch(() => {
                console.log('通信に失敗しました');
            });
    }, []);

    const handleSubmit = event => {
        event.preventDefault();
        const submit_data = new FormData(event.currenTarget);
        console.log(commentText);
        axios.post('http://127.0.0.1:8000/api/comment_post/', {
            text: commentText,
            author_name: "",
            article_id: location.state.article.article_id
        })
    };

    return (
        <div className="ml-10">
            <br />
            <div class="container py-4" id="works">
                <div class="d-flex justify-content-center">
                    <div class="border-bottom border-warning">
                        <h2>{location.state.article.title}</h2>
                    </div>
                </div>
                <div class="text-right">
                    <br /><p class="mr-5">制作日時: {location.state.article.create_time}</p><p class="mr-5">作成者名: {location.state.article.author}</p><br />
                </div>
                <div className="mx-5 border rounded border-warning">
                    <br />
                    <p className="mx-5 rounded-text">メッセージ内容<br />{location.state.article.text}</p>
                </div>
            </div>

            <div class="mx-auto p-2" style={{ width: "650px;" }}>
                <div class="p-3 mb-2 bg-warning">
                    <div class="d-flex justify-content-center">
                        <h3>Comment</h3>
                    </div>


                    <div class="mx-auto p-2" style={{ width: "600px;" }}>
                        {comments.map((comment) => (

                            <div class="card mb-3">
                                <div class="card-body">
                                    {!(comment.author_name) && <h5 class="card-title">名無し</h5>}
                                    {comment.author_name && <h5 class="card-title">{comment.author_name}</h5>}
                                    <p class="card-text"><small class="text-muted ml-2">投稿日: {comment.create_time}</small></p>
                                    <p class="card-text">{comment.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div class="p-3 mb-2 mt-5 bg-white">
                        <form class="m-2" onSubmit={event => handleSubmit(event)}>
                            <textarea class="form-control" id="exampleFormControlTextarea1" name="content" rows="3" onChange={(event) => setCommetText(event.target.value)}></textarea>
                            <div class="d-flex justify-content-center mt-2">
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
}
export default Article;