import ButtonBuyNow from '../Buynow'
import { BodyG60 } from '../GT60/Body'
import {Container, ContainerMost, IconYamaha} from './styles'

import {TbMinusVertical} from 'react-icons/tb'
import {FaUser} from 'react-icons/fa'
import {BsFillCartFill} from 'react-icons/bs' 
import {BiSearchAlt2,BiMap} from 'react-icons/bi' 
import {AiOutlineMenu} from 'react-icons/ai'

export function HeaderPrimiry(){
return(


  <>
  <ContainerMost>
  <Container>
    <div className="header--title">
      <div className="title--yamaha">
      <IconYamaha/>
       <h1>Yamaha</h1>
       </div>
      <div className="text--title">
      <p>Revs Your Heart</p>
      </div>
    </div>

      <section>
      <div className="menu">
        <ul>
          <li>Motos</li>
       

        <li>Peças</li>

      
          <li>Blu Collection</li>
        

     
          <li>Serviços</li>
       

        
          <li>Concessionárias</li>
     

        <li>Yamaha</li>
        

        
        </ul>
       


      </div>
      </section>

  <div className="maxMenu">
      <div className="menuInfo">
         <TbMinusVertical className='iconLine'/>

          <div className="cityInfo">
            <BiMap className='iconMap'/>
            <h1>Itabuna</h1>
          </div>
         
          <div className="login">
            <FaUser className='iconLogin'/>
            <h1>Login</h1>
          </div>



          <BsFillCartFill className='iconCar'/>
          <BiSearchAlt2 className='iconLup'/>

          <div className="menuLast">
       
       <AiOutlineMenu className='iconMenu'/>
       </div>
        
      </div>


            </div>
    
  </Container>
<ButtonBuyNow/>
  </ContainerMost>
  <BodyG60/>
    
  </>


)

}