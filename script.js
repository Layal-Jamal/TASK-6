fetch('https://wolnelektury.pl/api/authors/adam-mickiewicz/kinds/liryka/parent_books/')
.then(res => res.json())
.then(response => featuredBooks(response))


let sectionTwo=document.getElementById('section-two')
function featuredBooks(res){
    console.log(res);

for (let index=42; index< res.length ;index++){
    console.log(index)
    sectionTwo.innerHTML +=
   ` <div class="all-cards text-center mt-5  d-flex flex-wrap py-3">
 <div class="card border-0">
   <img src=${res[index].simple_thumb}  alt=""/>
   <h2 >${res[index].title}</h2>
   <h4>${res[index].author}</h4>
   </div> 
   </div>`
}
}

let sectionThree =document.getElementById('section-three')


fetch('https://wolnelektury.pl/api/books/studnia-i-wahadlo/')
      .then(result => result.json())
      .then(res=> bestSellingBook (res))



sectionThree.innerHTML = ""
function bestSellingBook(result){
console.log(result)
  sectionThree.innerHTML = 
    `
    <div class="d-flex justify-content-center align-items-center ">
    <img class="col-lg-6 col-md-12 col-sm-12" src= "${result.cover}" alt="" />
  <div class="col-lg-6 w-50">
    <p class="text-black-50 my-2>"
    <h3>${result.title}</h3>By
    <h4> ${result.authors[0].name}</h4>
    ${result.fragment_data.html}
    </p>
  <button class="btn border-0">Shop It Now <i class="fa-solid fa-arrow-right ms-1"></i><button>
  </div>
  </div>
  `
}

let sectionFour =document.getElementById('section-four');


fetch('https://wolnelektury.pl/api/authors/adam-mickiewicz/kinds/liryka/parent_books/')
    .then(result => result.json())
    .then(res => popularBooks(res))


sectionFour.innerHTML +=""
function popularBooks (res) {

  let arr =[];
for (let index = 0 ; index < 7 ; index++) {
    arr.push(res[index].simple_thumb);
}

for(let i=0 ; i < arr.length ;i++){
    sectionFour.innerHTML += 

    ` <div class="d-flex flex-wrap ">
       <div class=col-lg-3>
        <img src= ${arr[i]}  alt="" />
        <h3> ${res[i].title}</h3>
        <h4> ${res[i].author}</h4>
        </div>
      </div>
    `
  }
  

}



