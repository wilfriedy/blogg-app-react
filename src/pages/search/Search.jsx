import { React } from "react";
import { useLocation } from "react-router-dom";
import Posts from "../../components/Posts";
import useFetch from "../../hooks/FetchHook";
import "../home/Home.css";

export default function Search() {
  const param = useLocation().search;
  const queryParams = new URLSearchParams(param);
  const res = queryParams.get("q");
  const url = "http://localhost:3000/articles?q=" + res;
  const { data: articles } = useFetch(url);
  return <Posts articles={articles} />;
}
