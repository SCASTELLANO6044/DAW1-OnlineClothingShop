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

            //Load Featured Products
            for (let i = 1; i < 5; i++){
                document.getElementById("featured-"+i).innerHTML +=`
                <div class="product-item bg-light mb-4">
                    <div class="product-img position-relative overflow-hidden">
                        <img class="img-fluid w-100" src="img/${products[i-1].category}/${products[i-1].obj[i-1].id}.jpg" alt="">
                        <div class="product-action">
                            <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-shopping-cart"></i></a>
                            <a class="btn btn-outline-dark btn-square" href=""><i class="far fa-heart"></i></a>
                            <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-sync-alt"></i></a>
                            <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-search"></i></a>
                        </div>
                    </div>
                    <div class="text-center py-4">
                        <a class="h6 text-decoration-none text-truncate" href="">${products[i-1].name} ${products[i-1].obj[i-1].id}</a>
                        <div class="d-flex align-items-center justify-content-center mt-2">
                            <h5>$${products[i-1].obj[i-1].price}</h5><h6 class="text-muted ml-2"><del>$80</del></h6>
                        </div>
                        <div class="d-flex align-items-center justify-content-center mb-1">
                            <small class="fa fa-star text-primary mr-1"></small>
                            <small class="fa fa-star text-primary mr-1"></small>
                            <small class="fa fa-star text-primary mr-1"></small>
                            <small class="fa fa-star text-primary mr-1"></small>
                            <small class="fa fa-star text-primary mr-1"></small>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
                `
            }

            //Load Recent Products
            for (let i = 1; i < 7; i++){
                document.getElementById("recent-"+i).innerHTML += `
                <div class="product-item bg-light mb-4">
                    <div class="product-img position-relative overflow-hidden">
                        <img class="img-fluid w-100" src="img/${products[i-1].category}/${products[i-1].obj[i-1].id}.jpg" alt="">
                        <div class="product-action">
                            <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-shopping-cart"></i></a>
                            <a class="btn btn-outline-dark btn-square" href=""><i class="far fa-heart"></i></a>
                            <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-sync-alt"></i></a>
                            <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-search"></i></a>
                        </div>
                    </div>
                    <div class="text-center py-4">
                        <a class="h6 text-decoration-none text-truncate" href="">${products[i-1].name} ${products[i-1].obj[i-1].id}</a>
                        <div class="d-flex align-items-center justify-content-center mt-2">
                            <h5>$${products[i-1].obj[i-1].price}</h5><h6 class="text-muted ml-2"><del>$80</del></h6>
                        </div>
                        <div class="d-flex align-items-center justify-content-center mb-1">
                            <small class="fa fa-star text-primary mr-1"></small>
                            <small class="fa fa-star text-primary mr-1"></small>
                            <small class="fa fa-star text-primary mr-1"></small>
                            <small class="fa fa-star text-primary mr-1"></small>
                            <small class="fa fa-star text-primary mr-1"></small>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
                `
            }

            //Load Offer
            for(let i = 1; i < 3; i++){
                document.getElementById("offerd-"+i).innerHTML += `
                <div class="product-offer mb-30" style="height: 300px;">
                    <img class="img-fluid" src="img/offer${i}.png" alt="">
                    <div class="offer-text">
                        <h6 class="text-white text-uppercase">Save 15%</h6>
                        <h3 class="text-white mb-3">Special Offer</h3>
                        <a href="" class="btn btn-primary">Entra</a>
                    </div>
                </div>
                `
            }

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