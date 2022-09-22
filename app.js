fetch('https://newsapi.org/v2/everything?q=tesla&from=2022-08-22&sortBy=publishedAt&apiKey=7163775b860f49ffa623434555eb5e5e').then((apidata)=> 
         { 
             // console.log(apidata); 
             return apidata.json(); 
         }) 
         .then((actualdata)=>{ 
             console.log(actualdata);
            display(actualdata.articles);
             }) 
         .catch((error)=>{ 
        console.log(error); 
         });


function display(my){
    for(var key in my){
        let imgurl=my[key].urlToImage;
        // console.log(imgurl)
        let div=document.getElementById('main');
        let div1=document.createElement('div');
        div1.setAttribute('class','card');
        let img=document.createElement('img');
        img.src=imgurl;


        let div2=document.createElement('div');
        div2.setAttribute('class','card_info');

        let span=document.createElement('span');
        span.setAttribute('class','card_category');
        span.appendChild(document.createTextNode(`Author:${my[key].author}`))

        let h3=document.createElement('h3');
        h3.setAttribute('class','card_title');
        h3.appendChild(document.createTextNode(`Title:${my[key].title}`));

        let mydate=new Date(my[key].publishedAt)
        let para=document.createElement('p');
        para.appendChild(document.createTextNode(`Published On:${mydate.toLocaleDateString()}`))

        let link=document.createElement('a');
        link.setAttribute('href',my[key].url);
        link.setAttribute("target","_blank");
        let button=document.createElement('button');
        button.appendChild(document.createTextNode('Read More'));

        link.appendChild(button);
        div1.appendChild(img);
        div2.appendChild(span);
        div2.appendChild(h3);
        div2.appendChild(para);
        div2.appendChild(link);
        div1.appendChild(div2);
        

        div.appendChild(div1);

        // console.log(my[key].urlToImage);
    }
 }