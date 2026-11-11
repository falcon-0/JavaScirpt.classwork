async function allPost() {
  try {
    const container = document.getElementById("container");
    const getPosts = localStorage.getItem("Posts");
    let convertPost;

    if (getPosts) {
      convertPost = JSON.parse(getPosts);
    } else {
      const response = await fetch("https://dummyjson.com/posts/tag");
      const data = await response.json();

      convertPost = data.posts;
      localStorage.setItem("Posts", JSON.stringify(convertPost));
    }

    container.innerHTML = "";

    convertPost.forEach((post) => {
      container.innerHTML += `
        <div>
          <h1>${post.title}</h1>
          <p>${post.body}</p>
          <p>
            Views: ${post.views} |
            Likes: ${post.reactions.likes} |
            Dislikes: ${post.reactions.dislikes}
             Tags : ${post.tags}
          </p>
        </div>
      `;
    });
  } catch (error) {
    console.log(error);
  }
}

allPost();

document.getElementById("submit").addEventListener("click", async function searchPost() {
  try {
    const container = document.getElementById("container");
    const InputValue = document.getElementById("looking").value;
    // const Limit = document.getElementById("limit").value
    // const Skip = document.getElementById("search".value)
    const response = await fetch(
      
       `https://dummyjson.com/posts/tag/search?q=${InputValue}`
    );
    const data = await response.json();

    container.innerHTML = "";

    if (!data.posts.length) {
      container.innerHTML = "Search not found";
      return;
    }

    data.posts.forEach((post) => {
      container.innerHTML += `
        <div>
          <h1>${post.title}</h1>
          <p>${post.body}</p>
          <p>
            Views: ${post.views} |
            Likes: ${post.reactions.likes} |
            Dislikes: ${post.reactions.dislikes}
           
          </p>
        </div>
      `;
    });
  } catch (error) {
    console.log(error);
  }
});