const form = document.querySelector('.form');
const btn = document.querySelector('.btn-cost');
const out = document.querySelector('.out');
const total = document.querySelector('.total');
const date = document.getElementById('date');
const btnModal = document.querySelector('.btn-modal');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.btn-close');
const btnClose2 = document.querySelector('.btn-close2');
const table = document.querySelector('.table');
const table2 = document.querySelector('.table2');
const overlayTable = document.getElementById("overlay-table");
const out2 = document.querySelector('.out2');
const total2 = document.querySelector('.total2');
const tableTitle = document.querySelector('.tableTitle');
const overlayTable3 = document.querySelector('.overlay-table3');
const btnModal2 = document.querySelector('.btn-modal_2');
const btnClose3 = document.querySelector('.btn-close3');
const table3 = document.querySelector('.table3');
const out3 = document.querySelector('.out3');
const total3 = document.querySelector('.total_3');
const inputSearch = document.querySelector('.inp-s');
const btnSearch = document.querySelector('.btn-search');
const arrowUp = document.querySelector('.arrow');
let obj = [];
let sum;
let sum2;
let sum3;
let workedElems = [];
let nameClient = "";
let arrClient = [];
let delArr = [];
let delObj = {
    name: '',
    date: '',
    client: '',
    cost: 0
}