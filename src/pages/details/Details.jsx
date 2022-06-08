import { useParams, Link } from "react-router-dom";
import useFetch from "../../hooks/FetchHook";

export default function Details() {
  const { id } = useParams();
  const url = "http://localhost:3000/articles/" + id;
  const { data : post } = useFetch(url);
  return (
    <div>
      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.summary}</p>
        </>
      )}
        <Link to="/">Back Home</Link>
    </div>
  );
}
