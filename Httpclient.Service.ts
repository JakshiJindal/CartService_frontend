import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {
  }
  getAllItems() {
const token = sessionStorage.getItem('token');
const headers = new HttpHeaders({ Authorization: 'Basic ' + token });
return this.httpClient.get('http://localhost:2019/api/products', {headers});
  }
  createUsername(username) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: 'Basic ' + token });
    return this.httpClient.get('http://localhost:2019/api/users' + username, {headers});
  }

  getItemById(id) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: 'Basic ' + token });
    return this.httpClient.get('http://localhost:2019/api/product/' + id, {headers});
  }
  public  getdetails() {
    return this.httpClient.get('http://localhost:2019/api/products');
  }
 public  getProducts() {
    console.log('test call');
    const token =  sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.get('http://localhost:2019/api/products', {headers});
  }
public  getProduct(name) {
  console.log('test call');
  const token =  sessionStorage.getItem('token');
  const headers = new HttpHeaders({Authorization: 'Basic ' + token});
  return this.httpClient.get('http://localhost:2019/api/prod/' + name, {headers});
}
 /* public  setProducts() {
    console.log('test call');
    const token =  sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.post('http://localhost:2019/api/users', {headers});
  }*/
  public getElectrical(type) {
    const token =  sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.get('http://localhost:2019/api/productss/' + type, {headers});
  }
  public getPriceAndCategoryBtw(category, type1, type2) {
    const token =  sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.get('http://localhost:2019/api/products/' + category + '/' + type1 + '/' + type2, {headers});
  }
  public getPriceBtw(type1, type2) {
    const token =  sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.get('http://localhost:2019/api/products/' + type1 + '/between/' + type2, {headers});
  }
  public addToCart(productId) {
    const token =  sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.post('http://localhost:2019/apii/addtocart/recieve/' + productId, '', {headers});
  }
  public removeProduct(productId) {
    const token =  sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.post('http://localhost:2019/apii/removeToProduct/recieve/' + productId, '',  {headers});
  }
  public clearCart(productId) {
    const token =  sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.get('http://localhost:2019/apii/clearcart/recieve/', {headers});
  }
  public showCart() {
    const token =  sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.get('http://localhost:2019/apii/showcart/recieve/', {headers});
  }
 /* public decreaseQuantity() {
    const token =  sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.get('http://localhost:2019/api/', {headers});
  }*/
  public removeCart(productId) {
    const token =  sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.get('http://localhost:2019/apii/removeCart/recieve/' + productId, {headers});
  }
  public checkout() {
    const token =  sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.get('http://localhost:2019/apii/checkout/recieve', {headers});
  }
  public getRole(role) {
    const token =  sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.get('http://localhost:2019/api/usersRole/' + role, {headers});
  }
  TotalPrice() {
    const token =  sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.get('http://localhost:2019/apii/price', {headers});
  }
  getOrders() {
    const token =  sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.get('http://localhost:2019/apii/orderss', {headers});
  }
  getUser(user) {
    const token =  sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.get('http://localhost:2019/api/users/' + user, {headers});
  }
  getUsers() {
    const token =  sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.get('http://localhost:2019/api/userss', {headers});
  }
  addProduct(product) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.post('http://localhost:2019/api/products', product, {headers});
  }
  editProduct(type, data) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.put('http://localhost:2019/api/productsss/' + type, data,  {headers});
  }
  updateUser(data, type) {
    console.log(data);
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.put('http://localhost:2019/api/updateUserData/' + data, type,  {headers});
  }
getById(id) {
  const token = sessionStorage.getItem('token');
  const headers = new HttpHeaders({Authorization: 'Basic ' + token});
  return this.httpClient.get('http://localhost:2019/api/products/' + id,  {headers});
}
}
