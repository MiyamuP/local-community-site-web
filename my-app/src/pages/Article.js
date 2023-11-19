import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from 'react-router-dom';

export const Article = () => {
    const location = useLocation();
    console.log(location);
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
        </div>
    );
}
export default Article;