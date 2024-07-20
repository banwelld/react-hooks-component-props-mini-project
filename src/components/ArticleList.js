import React from "react";
import Article from "./Article";

const articleCallback = articleObj => <Article key={articleObj.id} article={articleObj} />

function ArticleList({posts}) {
    const articles = posts.map(articleCallback);
    return (
        <main>
            {articles}
        </main>
    );
};

export default ArticleList;