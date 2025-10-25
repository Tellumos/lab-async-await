
//waits for fetch to resolve and retrieve the array of posts before calling displayPosts and passing in the array
async function houseFetch() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await response.json()
    displayPosts(posts)
}



function displayPosts(collection) {
    //Loops through each object in the posts array
    collection.forEach((post) => {

        //creating elements, adding text to h1 and p
        const listElement = document.createElement('li')

        const headerElement = document.createElement('h1')
        headerElement.textContent = post.title

        const paragraphElement = document.createElement('p')
        paragraphElement.textContent = post.body

        //appending elements to add as a node on the DOM
        listElement.append(headerElement)
        listElement.append(paragraphElement)
        const unorderedList = document.querySelector("#post-list")
        unorderedList.append(listElement)
    })
}

houseFetch()