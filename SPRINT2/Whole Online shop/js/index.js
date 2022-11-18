let http = new XMLHttpRequest();
http.open('get', './json/products.json',true);
http.send();
http.onload = function(){
    if(this.readyState == 4 && this.status == 200){
        let products = JSON.parse(this.responseText);
        console.log(products)
        console.log(products.camisetas)
    }
}