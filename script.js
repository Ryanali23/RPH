const card = document.querySelector('.post-wrapper')
const blogtitle = document.querySelector('.blog-title')
card.addEventListener('scroll',(event)=>{
    console.log(card.scrollLeft)
    
            if(card.scrollLeft < 296 && card.scrollLeft > 1)  blogtitle.textContent = "Precolonial Era"
           
            if(card.scrollLeft < 497 && card.scrollLeft > 296 )  blogtitle.textContent = "Spanish Era"
            
            if(card.scrollLeft < 550 && card.scrollLeft > 497)  blogtitle.textContent = "American Era"
        
                   
})