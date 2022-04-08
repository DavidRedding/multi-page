import { useLocation } from 'react-router-dom';

const Contact = () => {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const name = queryParams.get('name'); // add ?name=mario as a query parameter to see this work.

  return (
    <div className=" space-y-2 mb-8">
      <h2 className="font-semibold text-lg">Hey {name}, Contact us here...</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae cum sed dolor, maiores similique repudiandae id
        quod esse cumque voluptates, aliquam autem facere, omnis laborum aspernatur deserunt animi iste molestias?
      </p>
    </div>
  );
};

export default Contact;
