let apiKey = '22bb0a2308b6406ea462b1b017c0905a'
let news = document.querySelector(".news")

let input = document.querySelector('.input')
let btn = document.querySelector('.searchBtn')
btn.addEventListener("click",async()=> {
    let query = input.value
    console.log(query)
     callApi(query)
}) 
        

let callApi = async (query)=> {
    let response =await fetch(`https://newsapi.org/v2/everything?q=${query}&from=2024-02-15&sortBy=popularity&apiKey=${apiKey}`)
    let data = await response.json()
    for (const iterator of data.articles) {
        // console.log(iterator)
        let box = document.createElement("div")
        box.innerHTML = `<div class="box py-1 px-2 my-4 ">
        <div class="img"><img src="${iterator.urlToImage}" alt=""></div>
        <h3>${iterator.title}</h3>
        <p class='p'>${iterator.description}</p>
        <p>${iterator.publishedAt}</p>
        <a href="${iterator.url}" target="_blank"><div class="btn w-100">Read more</div><a/>
    </div>`
    news.appendChild(box)
    }
}

