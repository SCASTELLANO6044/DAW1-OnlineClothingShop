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

            //Load products
            let count = 0
            let elem = 0
            let maxCount = 3
            let idAdd = 0

            for(let i = 1; i < 10; i++){
                console.log(idAdd)
                document.getElementById('product-'+i).innerHTML += `
                <div class="product-item bg-light mb-4">
                    <div class="product-img position-relative overflow-hidden">
                        <img class="img-fluid w-100" src="img/${products[elem].category}/${products[elem].obj[elem].id+idAdd}.jpg" alt="">
                        <div class="product-action">
                            <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-shopping-cart"></i></a>
                            <a class="btn btn-outline-dark btn-square" href=""><i class="far fa-heart"></i></a>
                            <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-sync-alt"></i></a>
                            <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-search"></i></a>
                        </div>
                    </div>
                    <div class="text-center py-4">
                        <a class="h6 text-decoration-none text-truncate" href="">${products[elem].name} ${products[elem].obj[elem].id+idAdd}</a>
                        <div class="d-flex align-items-center justify-content-center mt-2">
                            <h5>$123.00</h5><h6 class="text-muted ml-2"><del>$123.00</del></h6>
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
                count += 1
                idAdd += 1
                if(count >= maxCount){
                    elem += 1
                    maxCount += 3
                    idAdd = 0
                }
            }
        }
    }
}

loadData()