import n from './Nav.module.css'

const Nav =()=>{
   return (
    <div className={n.nav}>
    
    <div className={n.div1}>
        <div className={n.logo}>logo</div>
        <div className={n.search}> <input placeholder='buscar'/> </div>
        <div className={n.profile}>
          <div className={n.profileIn}> <h3>Jonny fernandez</h3> </div>
          <div className={n.cart}>cart</div>
          <div className={n.darkMode}>dark mode</div>
        </div>
      
          
    </div>
        
    <div className={n.div2}>
      <div className={n.categoriesContainer}>

      <div>Limpieza</div>
      <div>Bazar</div>
      <div>Texil</div>
      <div>Liquidos</div>
      <div>Jardin y riego</div>
      <div>Mas Productos</div>
      
      </div>
    </div>
  </div>
   )
}
     

export default Nav