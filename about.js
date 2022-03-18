console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert('the form has been successfully submitted')
	// console.log('form submit');
}

const helloKitty = document.querySelector('img');
 console.log(helloKitty)
	helloKitty.addEventListener('mouseover', () => {
	    alert(`Good Job!`) 
	})
	
	

	
// let helloKitty = document.querySelector("img[src='/pic1.png]'")
// helloKitty.addEventListener('mouseover', () => {
//     alert(`thanks for coming`)
// })
// ritualBtn.addEventListener('click', ()=>{
//     alert('brushing my cats')
// })

let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);