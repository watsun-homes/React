import {useState,useEffect} from "react";

export const FetchSample = () => {

  const getKey = () => Math.random().toString(32).substring(2);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://watsunblog.com/wp-json/wp/v2/posts?_embed&per_page=10&page=1')
      .then(response => response.json())
      .then(data => {
        setPosts(data)
      },[])
      .catch(errot => {
        console.log("取得失敗!");
      })
  });


  return(
    <>
    <h1>Fetch</h1>
    <div>
    {
      posts.map(post => (
        <div key={getKey()}>{post.title.rendered}</div>
      ))
    }
    </div>
    </>
  );

}
