function searchPosts() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let posts = document.querySelectorAll('.post');
    
    posts.forEach(post => {
        let title = post.querySelector('h2').textContent.toLowerCase();
        let content = post.querySelector('p').textContent.toLowerCase();
        if (title.includes(input) || content.includes(input)) {
            post.style.display = "block";
        } else {
            post.style.display = "none";
        }
    });
}