function loadData(){
    let http = new XMLHttpRequest();
    http.open('get', './json/products.json',true);
    http.send();
    http.onload = function(){
        if(this.readyState == 4 && this.status == 200){
            let products = JSON.parse(this.responseText);
            console.log(products[0])
            //Load Categories.
            for (let i = 1; i < 2; i++){
                //document.getElementById('category'+i).innerHTML +=
                //"<h6>"products[0]"</h6>"
            }
        }
    }
}

loadData()