import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactComponent } from "./modules/contact/contact.component";
import { DetailComponent } from "./modules/detail/detail.component";
import { HomeComponent } from "./modules/home/home.component";
import { ShopComponent } from "./modules/shop/shop.component";

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'shop', component: ShopComponent},
    {path: 'shop/:category/:id', component: DetailComponent},
    {path: 'contact', component: ContactComponent},
    {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
    imports: [CommonModule, RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }