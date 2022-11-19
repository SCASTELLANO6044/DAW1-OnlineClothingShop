function loadData(){
    let http = new XMLHttpRequest();
    http.open('get', './json/products.json',true);
    http.send();
    http.onload = function(){
        if(this.readyState == 4 && this.status == 200){
            let products = JSON.parse(this.responseText);
            //Load Categories.
            for (let i = 1; i < 7; i++){
                document.getElementById('category-space'+i).innerHTML +=`
                <a class="text-decoration-none" href="">
                    <div class="cat-item d-flex align-items-center mb-4">
                        <div class="overflow-hidden" style="width: 100px; height: 100px;">
                            <img class="img-fluid" src="img/${products[i-1].category}/1.jpg" alt="">
                        </div>
                        <div class="flex-fill pl-3" id="category1">
                            <h6>${products[i-1].category}</h6>
                            <small class="text-body">100 Products</small>
                        </div>
                    </div>
                </a>
                `
            }
        }
    }
}

loadData()