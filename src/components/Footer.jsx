
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
function Footer(){
    return(
        <div className="w-full h-45 bg-neutral-700 mt-4 text-white  ">
            <div >

                   <div className="text-white ml-25 p-12 ">
                    <p>Get special discount on your inbox</p>
                    <div className="flex gap-3">
                   <input type="text" placeholder="Your E-mail"/>
                  <button className="border p-1 w-19 h-12 bg-gray-800 hover:cursor-pointer hover:scale-95 duration-300 rounded">Send</button></div>
                 
                </div>
                    
                <div className="ml-220 -mt-26">
                <p className="text=[24px]">FOR ANY HELP, YOU MAY Connect WITH ME</p>
                  <Link to={"https://www.instagram.com/ansh_mehra19/"}><FaInstagram className="mt-2 ml-5"/></Link>
                  <Link to={"https://www.linkedin.com/in/ansh-mehra-2916312b1/"}><FaLinkedin  className="ml-12 -mt-4"/></Link>
                  <Link to={"https://github.com/Anshmhra"}><FaGithub className="ml-19 -mt-4"/></Link>

                
                </div>

             

            </div>
            <div className="w-full h-100  text-gray-700 mt-18 m-0 mb-10 ">
                <ul className="ml-35 gap-3">
                    <li className="mb-2 p-4 -ml-4 font-semibold">MEN</li>
                    <Link to={"/rendring?categoryId=6824"}><li className="hover:text-pink-400 duration-110">Topwear</li></Link>
                    <Link to={"/rendring?categoryId=6834"}><li className="hover:text-pink-400 duration-110">Bottomwear</li></Link>
                    <Link to={"/rendring?categoryId=6841"}><li className="hover:text-pink-400 duration-110">Ethnicwear</li></Link>
                    <Link to={"/rendring?categoryId=6857"}><li className="hover:text-pink-400 duration-110">Men's Footwear</li></Link>
                    <Link to={"/rendring?categoryId=6879"}><li className="hover:text-pink-400 duration-110">Men's Accessories</li></Link>
                    <Link to={"/rendring?categoryId=6850"}><li className="hover:text-pink-400 duration-110">Innerwear & Sleepwear</li></Link>
                    <Link to={"/rendring?categoryId=6875"}><li className="hover:text-pink-400 duration-110">Men's Watches</li></Link>
                    <Link to={"/rendring?categoryId=6867"}><li className="hover:text-pink-400 duration-110">Bags & Backpacks</li></Link>
                    <Link to={"/rendring?categoryId=6888"}><li className="hover:text-pink-400 duration-110">Athleisure</li></Link>
                    <Link to={"/rendring?categoryId=11219"}><li className="hover:text-pink-400 duration-110">Sports & Fitness</li></Link>
                </ul>
                <ul className="ml-89 -mt-72 ">
                    <li className="mb-6 font-semibold">WOMEN</li>
                    <Link to={"/rendring?categoryId=4"}><li className="hover:text-pink-400 duration-110">Women's Indianwear</li></Link>
                     <Link to={"/rendring?categoryId=3"}><li className="hover:text-pink-400 duration-110">Women's Westernwear</li></Link>
                     <Link to={"/rendring?categoryId=89"}><li className="hover:text-pink-400 duration-110">Bags</li></Link>
                     <Link to={"/rendring?categoryId=3528"}><li className="hover:text-pink-400 duration-110">Women's Footwear</li></Link>
                     <Link to={"/rendring?categoryId=77"}><li className="hover:text-pink-400 duration-110">Women's Jewellery</li></Link>
                     <Link to={"/rendring?categoryId=3946"}><li className="hover:text-pink-400 duration-110">Lingerie</li></Link>
                     <Link to={"/rendring?categoryId=4015"}><li className="hover:text-pink-400 duration-110">Women's Sportswear</li></Link>
                     <Link to={"/rendring?categoryId=3986"}><li className="hover:text-pink-400 duration-110">Women's Sleep & lounge</li></Link>
                     <Link to={"/rendring?categoryId=4641"}><li className="hover:text-pink-400 duration-110">Women's Watches</li></Link>
                     <Link to={"/rendring?categoryId=104"}><li className="hover:text-pink-400 duration-110">Fashion Accessories</li></Link>
                </ul>
                <ul className="ml-155 -mt-71">
                    <li className="mb-5 font-semibold">KIDS</li>
                   <Link to={"/rendring?categoryId=6267"}><li className="hover:text-pink-400 duration-110">Kids Indianwear</li></Link>
                    <Link to={"/rendring?categoryId=6282"}><li className="hover:text-pink-400 duration-110">Kids Westernwear</li></Link> 
                     <Link to={"/rendring?categoryId=6333"}><li className="hover:text-pink-400 duration-110">Kids Footwear</li></Link>
                      <Link to={"/rendring?categoryId=6348"}><li className="hover:text-pink-400 duration-110">Kids Jewellery</li></Link>
                       
                        <Link to={"/rendring?categoryId=6298"}><li className="hover:text-pink-400 duration-110">Kids Sportswear</li></Link>
                         <Link to={"/rendring?categoryId=6372"}><li className="hover:text-pink-400 duration-110">Kids Sleepwear</li></Link>
                          <Link to={"/rendring?categoryId=6343"}><li className="hover:text-pink-400 duration-110">Kids Accessories</li></Link> 
                          <Link to={"/rendring?categoryId=6382"}><li className="hover:text-pink-400 duration-110">Toys & Games</li></Link>
                            <Link to={"/rendring?categoryId=6329"}><li className="hover:text-pink-400 duration-110">Innerwear</li></Link>
                    
                </ul>
                <ul className="ml-200 -mt-65">
                    <li className="mb-4 font-semibold">TOP BRANDS</li>
                     <Link  to={"/rendring?categoryId=4886"}><li className="hover:text-pink-400 duration-110">Puma</li></Link>
                      <Link  to={"/rendring?categoryId=4188"}><li className="hover:text-pink-400 duration-110">Vero Moda</li></Link>
                       <Link  to={"/rendring?categoryId=4038"}><li className="hover:text-pink-400 duration-110">W</li></Link>
                        <Link  to={"/rendring?categoryId=5274"}><li className="hover:text-pink-400 duration-110">Biba</li></Link>
                         <Link  to={"/rendring?categoryId=4495"}><li className="hover:text-pink-400 duration-110">Forever New</li></Link>
                          <Link  to={"/rendring?categoryId=6477"}><li className="hover:text-pink-400 duration-110">Skechers</li></Link> 
                          <Link  to={"/rendring?categoryId=1970"}><li className="hover:text-pink-400 duration-110">Fablestreet</li></Link>
                           <Link  to={"/rendring?categoryId=4189"}><li className="hover:text-pink-400 duration-110">Only</li></Link>
                            <Link  to={"/rendring?categoryId=12071"}><li className="hover:text-pink-400 duration-110">Autumnlane</li></Link>
                             <Link  to={"/rendring?categoryId=15204"}><li className="hover:text-pink-400 duration-110">Cider</li></Link> 
                             <Link  to={"/rendring?categoryId=6748"}><li className="hover:text-pink-400 duration-110">Accessorize London</li></Link>
                  
                 </ul>
                  <ul className="ml-240 p-4 -mt-80">
                     <li className="mb-4 font-semibold">House OF Nykaa</li>
                     <Link to={"/rendring?categoryId=4240"}><li className="hover:text-pink-400 duration-110">Twenty Dresses By Nykaa Fashion</li></Link>
                     <Link to={"/rendring?categoryId=7059"}><li className="hover:text-pink-400 duration-110">Nykd by Nykaa</li></Link>
                     <Link to={"/rendring?categoryId=4706"}><li className="hover:text-pink-400 duration-110">RSVP by Nykaa Fashion</li></Link>
                     <Link to={"/rendring?categoryId=10009"}><li className="hover:text-pink-400 duration-110">Gajra Gang by Nykaa Fashion</li></Link>
                    
                     <Link to={"/rendring?categoryId=15963"}><li className="hover:text-pink-400 duration-110">Mixt by Nykaa Fashion</li></Link>
                     <Link to={"/rendring?categoryId=11495"}><li className="hover:text-pink-400 duration-110">IYKYK</li></Link>
                     <Link to={"/rendring?categoryId=4629"}><li className="hover:text-pink-400 duration-110">Kica</li></Link>
                     <Link to={"/rendring?categoryId=3771"}><li className="hover:text-pink-400 duration-110">Pipa Bella By Nykaa Fashion</li></Link>
                     <Link to={"/rendring?categoryId=13718"}><li className="hover:text-pink-400 duration-110">Azai by Nykaa Fashion</li></Link>
                     <Link to={"/rendring?categoryId=12291"}><li className="hover:text-pink-400 duration-110">Twig & Twine</li></Link>
                     <Link to={"/rendring?categoryId=13564"}><li className="hover:text-pink-400 duration-110">Gloot</li></Link>
                     

                   
                </ul>
              <p className="ml-145 mt-5">© 2025. All Rights Reserved</p>

            </div>

          
            <div>
                
            </div>
          
         
        </div>
    )
}
export default Footer;

              
                 
             