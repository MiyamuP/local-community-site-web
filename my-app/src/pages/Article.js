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

            <div class="mx-auto p-2" style={{ width: "650px;" }}>
                <div class="p-3 mb-2 bg-warning">
                    <div class="d-flex justify-content-center">
                        <h3>Comment</h3>
                    </div>
                    <div class="mx-auto p-2" style={{ width: "600px;" }}>
                        <div class="card mb-3">
                            <div class="card-body">
                                <h5 class="card-title">ユーザー名1</h5>
                                <p class="card-text"><small class="text-muted ml-2">投稿日</small></p>
                                <p class="card-text">コメント内容</p>
                            </div>
                        </div>
                        <div class="card mb-3">
                            <div class="card-body">
                                <h5 class="card-title">ユーザー名2</h5>
                                <p class="card-text"><small class="text-muted ml-2">投稿日</small></p>
                                <p class="card-text">コメント内容</p>
                            </div>
                        </div>
                    </div>

                    <div class="p-3 mb-2 mt-5 bg-white">
                        <form class="m-2">
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            <div class="d-flex justify-content-center mt-2">
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Article;