const getApi = async()=>{
    let url = "https://newsapi.org/v2/everything?q=apple&from=2022-09-23&to=2022-09-23&sortBy=popularity&apiKey=71ea4b119fe34276ab4d63e31daa51d3";
    const news = await fetch(url);
    // console.log(); 
      if(news){
        news.json().then((data)=>{
          displayNews(data.articles);
        })
      }
      console.log(news)
  }
  getApi();
  
  const displayNews = (articles)=>{

    console.log(articles)

    for (const key in articles) {
       let ran = Math.round(Math.random()*1000); 
      
       let obj = articles[key]
       let content = obj.content;
       let description = obj.description;
       let date = new Date(obj.publishedAt);
       let publishedAt = date;
       let title = obj.title;
       let url = obj.url;
       let urlToImage = obj.urlToImage;
       let author = obj.author;

       let body = document.getElementById("main");

       let div = document.createElement("div");
       let div2 = document.createElement("div");

       let h2_title = document.createElement("h2");
       h2_title.setAttribute("id",ran);
       let h2_text = document.createTextNode(title);
       
       let figure = document.createElement("figure");
       let image = document.createElement("img");
       image.setAttribute("src",urlToImage);
       let figcaption = document.createElement("figcaption")
       let figcaption_text = document.createTextNode(publishedAt)

       let description_p = document.createElement("p");
       let description_text = document.createTextNode(description);

       let url_rr = document.createElement("a");
       url_rr.setAttribute("target","_blank");
       url_rr.setAttribute("href",url);
       let url_text = document.createTextNode("For more details Click here ...");

       let content_p = document.createElement("p");
       let content_text = document.createTextNode(content);

       let author_p = document.createElement("p");
       let author_text = document.createTextNode("Author : "+author);

       content_p.appendChild(content_text);
       url_rr.appendChild(url_text);
       description_p.appendChild(description_text);
       figure.appendChild(image);
       figcaption.appendChild(figcaption_text);
       h2_title.appendChild(h2_text);
       div.appendChild(h2_title);
       author_p.appendChild(author_text)
      //  div.appendChild(image);
       div.appendChild(figure);
       div.appendChild(figcaption);
       div.appendChild(content_p);
       div.appendChild(description_p);
       div2.appendChild(author_p)
       div.appendChild(url_rr);
       body.appendChild(div);
       body.appendChild(div2);
  }
  }