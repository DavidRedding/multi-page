import { Link } from 'react-router-dom';
import { useAxios } from '../hooks/useAxios';

const Home = () => {
  const { data: articles, isPending, error } = useAxios('http://localhost:3000/articles');

  const rendered = articles.map((article) => (
    <div key={article.id} className="border border-slate-100 p-4 py-8 space-y-2 rounded shadow ">
      <h1 className="font-bold">{article.title}</h1>
      <p>{article.author}</p>
      <Link to={`/articles/${article.id}`}>Read more...</Link>
    </div>
  ));

  return (
    <div className="space-y-4">
      <h2 className="font-bold text-lg ">Articles</h2>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {articles && rendered}
    </div>
  );
};

export default Home;
