const url = 'http://localhost:4000/api/v1/article'

class ArticleModel {
    static getAllArticles = () => {
        return fetch(url)
            .then((response) => response.json())
    };

    static getArticleById = (articleId) => {
        return fetch(`${url}/${articleId}`)
            .then((response) => response.json())
    };

    static createArticle = (article, ballotid) => {
        article.bollot = ballotid;
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'authorization': token,
              },
              body: JSON.stringify(article)
            })
              .then((response) => response.json())
    };

    static updateArticle = (article, id) => {
        console.log(`deleting ${article.link}`)
        return fetch(`${url}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                //auth
            },
            body: JSON.stringify(article)
        })
            .then((response) => response.json())
    };

    static deleteArticle = (id) => {
        console.log("deleting article")
        let request = fetch(`${url}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                //auth
          },
        })
        return request;
        //   .then((response) => response.json())
    }; 
}


export default ArticleModel;