import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useAxios } from '../hooks/useAxios';
const Article = () => {
  const { id } = useParams();
  const url = `http://localhost:3000/articles/${id}`;
  const { data: article, isPending, error } = useAxios(url);
  const history = useHistory();

  useEffect(() => {
    if (error) {
      setTimeout(() => history.push('/'), 2000);
    }
  }, [error, history]);

  const rendered = (
    <div className="space-y-2">
      <h1 className="font-bold text-2xl">{article.title}</h1>
      <h2>By {article.author}</h2>
      <p>{article.body}</p>
    </div>
  );

  return (
    <div>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {article && rendered}
    </div>
  );
};

export default Article;
