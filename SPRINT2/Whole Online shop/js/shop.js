function loadData(){
    let http = new XMLHttpRequest();
    http.open('get', './json/products.json',true);
    http.send();
    http.onload = function(){
        if(this.readyState == 4 && this.status == 200){
            let products = JSON.parse(this.responseText);
            //Load Navbar categories
            for(let i = 1; i < 7; i++){
                document.getElementById("navbar-category-"+i).innerHTML += `
                    ${products[i-1].category}
                `
            }
        }
    }
}

loadData()