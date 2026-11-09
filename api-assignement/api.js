async function oneuser() {
  const response = await fetch("https://dummyjson.com/posts/2");
  const data = await response.json();
  document.getElementById("title").innerHTML ="<b>Title: </b>" +  data.title
  document.getElementById("body").innerHTML = "<b>Body:  </b>" + data.body
  document.getElementById("userId").innerHTML = "User ID:" + data.userId
  document.getElementById("reactions").innerHTML = "Likes: " + data.reactions.likes
  document.getElementById("views").innerHTML = "Views: " + data.views
  document.getElementById("dislike").innerHTML = "Dislikes: " + data.reactions.dislikes
}
oneuser();
 




const searched_ = []
 let submit = document.getElementById("submit").addEventListener("click", function(){
   const user_input = document.getElementById("looking").value 
  searched_.push(user_input)
   
async function sort() {
    const response_sort = await fetch(`https://dummyjson.com/posts/search?q=${searched_}`);
    const data_sort = await response_sort.json();

    document.getElementById("search-post").innerHTML = "<b>Body: </b>" + data_sort.posts[searched_].body
    document.getElementById("search-userId").innerHTML = "<b>User ID: </b>" + data_sort.posts[searched_].userId
    document.getElementById("search-reactions").innerHTML = "<b>Likes: </b>" + data_sort.posts[searched_].reactions.likes
    document.getElementById("search-views").innerHTML = "<b>Views: </b>" + data_sort.posts[searched_].views
    document.getElementById("search-dislike").innerHTML = "<b>Dislikes: </b>" + data_sort.posts[searched_].reactions.dislikes
}
sort();

})


