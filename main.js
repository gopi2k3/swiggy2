// Get the Data From Local Storage and Create the conettnt =======================

let datas=JSON.parse(localStorage.getItem('swiggydata'))
let row=document.querySelector('.row')

ans(datas)
function ans(a){
    a.forEach(e => {
        
        let card=document.createElement('div')
        card.classList.add('cart-box')
        card.innerHTML=`<div class="cart-food-title">${e.name}</div>
		<div class="cart-mainbox">
		
		    <img src="${e.img}" class="food-img">
			
			<div class="price">
			    <span class="cart-price">${e.amount}</span>
			    <span class="cart-amt">${e.amount}</span>
 			
			</div>
			
			 <input type="number" value="1" class="cart-quantity">
			<div class="order-removei">
			    <i class="bi bi-trash-fill"></i>
			</div>
		
		</div>`

        row.append(card)
    });

}

function empty(){
    console.log('Empty')
}

// loader Design Function ============

let time=document.querySelector('.time')

window.addEventListener('load',(e)=>{
    

    time.style.display='none'
})




//  Delete Function ========================

let clearBtns=document.querySelectorAll('.order-removei')



clearBtns.forEach((e)=>{
    e.addEventListener('click',remove)
})


function remove(){

    if(confirm('If You Want to Remove the Item')){
        this.parentElement.parentElement.remove()

        let fTitle=this.parentElement.parentElement.querySelector('.cart-food-title').innerHTML
      
        console.log(fTitle)
       
        let a=datas.filter(e=>e.name!=fTitle)
        

        localStorage.setItem('swiggydata',JSON.stringify(a))
        update()
    }
    else{
       
    }
   
}



let qty=document.querySelectorAll('.cart-quantity')

qty.forEach((e)=>{
    e.addEventListener('change',qtyFun)
})

function qtyFun(){
    if(isNaN(this.value)||this.value<1){
		this.value=1
		
	}

  update()
}



function update(){
    let cart=document.querySelectorAll('.cart-box')
    
  let totalValue=document.querySelector('.total-amount')

  let total=0

    cart.forEach((e)=>{
        let price=e.querySelector('.cart-price').innerHTML

        let realPrice=price.replace('Price :','')

       let qty=e.querySelector('.cart-quantity').value

       total=total+(realPrice*qty)

		e.querySelector(".cart-amt").innerHTML="Rs."+(realPrice*qty)

    })

	totalValue.innerHTML= `Total Amount in "Rs" : ${total}`

}