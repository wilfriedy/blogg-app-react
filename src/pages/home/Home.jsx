import { useState } from "react";

import useFetch from "../../hooks/FetchHook";
import "./Home.css";
import Posts from "../../components/Posts";

export default function Home() {
  const [posts, setPosts] = useState("http://localhost:3000/articles");
  const { data: articles } = useFetch(posts);
  return (
    <Posts articles={articles} />
  );
}
