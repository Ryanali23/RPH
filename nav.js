const icon = document.querySelector('.icon');
const drawer = document.querySelector('.drawer')
const drawerlink = document.querySelector('.drawer-links')
icon.addEventListener('click',()=>{

        drawer.style = null
        drawer.style.animation = "drawDrawerAnim 1s ease-in-out forwards";
        setTimeout(()=>{
            drawerlink.style.display = "flex"
        },400)
 
})
document.body.addEventListener('click',()=>{
    if(this.event.target === drawer || this.event.target === drawerlink){
        drawer.style = null
        drawerlink.style.display = "none"
        drawer.style.animation = "closeDrawerAnim 1s ease-in-out forwards";
    }
})