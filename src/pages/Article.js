import { useParams } from 'react-router-dom';
const Article = () => {
  const { id } = useParams();
  return <div>Article Page - {id}</div>;
};

export default Article;
