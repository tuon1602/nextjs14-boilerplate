export const getPosts = async () => {
  const res = await fetch("http://localhost:8080/posts",{
    cache:"no-cache",
    next:{
        tags:["posts"]
    }
  });
  if (!res.ok) {
    console.log("Error fetching posts");
  }
  const data = await res.json();
  return data;
};
