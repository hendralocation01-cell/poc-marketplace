const ADMIN_WA="6280000000000";
const defaultProducts=[
{id:1,name:"Beras Premium 5 Kg",price:75000,category:"Beras",emoji:"🌾",stock:20,shop:"PB Dukuh Jati",wa:ADMIN_WA,desc:"Beras pilihan untuk kebutuhan keluarga."},
{id:2,name:"Beras Medium 5 Kg",price:68000,category:"Beras",emoji:"🌾",stock:15,shop:"PB Dukuh Jati",wa:ADMIN_WA,desc:"Beras berkualitas dengan harga bersahabat."},
{id:3,name:"Gula Pasir 1 Kg",price:18000,category:"Sembako",emoji:"🧂",stock:30,shop:"Toko Lokal",wa:ADMIN_WA,desc:"Gula pasir untuk kebutuhan rumah tangga."},
{id:4,name:"Minyak Goreng 1 Liter",price:19000,category:"Sembako",emoji:"🫗",stock:25,shop:"Toko Lokal",wa:ADMIN_WA,desc:"Minyak goreng untuk kebutuhan dapur."}];
const businesses=[{name:"PB Dukuh Jati",cat:"Penggilingan Padi & Beras",icon:"🌾",desc:"Penggilingan padi dan produk beras lokal."},{name:"Toko Sembako Lokal",cat:"Sembako & Kebutuhan Harian",icon:"🏪",desc:"Kebutuhan rumah tangga dan sembako."},{name:"UMKM Kuliner",cat:"Makanan & Minuman",icon:"🍜",desc:"Produk kuliner lokal."}];
const services=[{name:"Penggilingan Padi"}];
function getData(k,f){return JSON.parse(localStorage.getItem(k)||"null")||f}
