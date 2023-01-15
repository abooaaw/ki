let titel = document.getElementById('titel');
let price = document.getElementById('price');
let count = document.getElementById('count');
let cat = document.getElementById('cat');
let save = document.getElementById('save');
let mode = 'creat';
let tt;
//console.log(ads, discount, total,titel,price);

let data;
if (localStorage.products != null) {
    data = JSON.parse(localStorage.products);
}else{
   data =[];

}
save.onclick = function(){
    let news = {
        titel:titel.value.toLowerCase(),
         price:price.value,
         count:count.value,
         cat:cat.value.toLowerCase(),
    }
    if(mode === 'creat'){
        if(news.count > 1){
                for(i=0;i<news.count;i++)
                data.push(news);
            }else
            {
            data.push(news);
            }
 }else{
    data[    tt   ] = news;
    mood = 'create'
    save.innerHTML = 'create'
    count.style.display='block';
 }
    

    localStorage.setItem('products',   JSON.stringify(data));
    clear();
    showProduct()
}
function clear (){
    titel.value = ''; 
    price.value = '';
    count.value = '';
    cat.value = '';
}

function showProduct(){
    let table = '';
    for(let i=0; i<data.length; i++){
        table += 
        ` <tr>
         <td>${i}</td>
        <td>${data[i].titel}</td>
        <td>${data[i].price}</td>
        <td>${data[i].cat}</td>
        <td><button onclick=update(${i}) id = "update">update</button></td>
        <td><button onclick="delate(${i})" id = "delate">delate</button></td>
        </tr>
        `


    }


    document.getElementById('tbody').innerHTML =table;
}

showProduct()
function delate(i){
    data.splice(i, 1);
    localStorage.products = JSON.stringify(data);
    showProduct()

}
function delleatall(){
    localStorage.clear();
    data.splice(0);
    showProduct();
}

function update(i){
    titel.value = data[i].titel;
    price.value = data[i].price;
    count.style.display='none';
    cat.value = data[i].cat;
    save.innerHTML = "update";
    mode = 'update'
    tt = i;
    scroll({
        top:0,
        behavior: 'smooth'

    })
};
let searchmode ='titel';
 function getsearch(id)
 {
    let search = document.getElementById('search');
if(id == 'searchbytitel'){
    searchmode = 'titel'; 
}else{
    searchmode='cat';
search.placeholder = 'search by '+searchmode;
search.focus();
search.value ='';
showProduct()
 }

 function searchdata(value)
 {
    let table = '';
   if(searchmode == 'titel')
    {

        for(let i=0; i<data.length; i++)
        {
            if(data[i].titel.includes(value.toLowerCase()))
            {
                table += 
         ` <tr>
         <td>${i}</td>
        <td>${data[i].titel}</td>
        <td>${data[i].price}</td>
        <td>${data[i].cat}</td>
        <td><button onclick=update(${i}) id = "update">update</button></td>
        <td><button onclick="delate(${i})" id = "delate">delate</button></td>
        </tr>
        `
             }
          }
    }else{
        for(let i=0; i<data.length; i++)
        {
            if(data[i].cat.includes(value.toLowerCase()))
            {
                table += 
         ` <tr>
         <td>${i}</td>
        <td>${data[i].titel}</td>
        <td>${data[i].price}</td>
        <td>${data[i].cat}</td>
        <td><button onclick=update(${i}) id = "update">update</button></td>
        <td><button onclick="delate(${i})" id = "delate">delate</button></td>
        </tr>
        `
             }
          }


    }
 document.getElementById('tbody').innerHTML =table;
 }
}
