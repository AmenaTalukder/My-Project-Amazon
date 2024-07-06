onLoad();
function onLoad(){
    itemImageContainerOfHomePage(); 
    sliderMiddlebox();
    sliderbox(); 
}


function itemImageContainerOfHomePage(){
    let containerelementboxOne= document.querySelector('.box').innerHTML=`
                                                    <h2> Deals in PCs</h2>
                                                        <div class="boxone" >
                                                                <a href="product.html"><img src="img/Pcs.jpeg" alt=""></a>     
                                                        </div>
                                                        <p class="see"><a href="item.html">Shop now.......</a></p>`;

let containerelementboxTwo= document.querySelector('.two').innerHTML=`
                                <h2>Gaming accessories</h2>
                                    <div class="attach">
                                            <div class="headsetsmice GamingAccessories"><a href="product.html"><img src='img/Headsert.jpeg'></a></div>
                                            <div class="keyboardChiars GamingAccessories"><a href="product.html"><img src='img/keyboards.jpeg'></a></div>
                                            <div class="three"><a href="#"><p>Headsets</p></a></div>
                                            <div class="three"><a href="#"><p>Keyboards</p></a></div>         
                                            <div class="headsetsmice GamingAccessories"><a href="product.html"><img src='img/mice.jpeg'></a></div>
                                            <div class="keyboardChiars GamingAccessories"><a href="product.html"><img src='img/chairs.jpeg'></a></div>
                                            <div class="three"><a href="#"><p>Computer mice</p></a></div>
                                            <div class="three"><a href="#"><p>Chiars</p></a></div>
                                    </div>
                                    <div class=""></div>
                                    <p class="see"><a href="#">See more......</a></p>`;

let containerelementboxThree= document.querySelector('.third').innerHTML=`
                            <h2>Refresh Your Space</h2>
                                    <div class="attach">
                                        <div class="diningkitchen"><a href="product.html"><img src='img/dining.jpeg'></a></div>
                                        <div class="homehealth"><a href="product.html"><img src='img/Home.jpeg'></a></div>
                                        <div class="three"><a href="#"><p>Dining</p></a></div>
                                        <div class="three"><a href="#"><p>Home</p></a></div>                                        
                                        <div class="diningkitchen"><a href="product.html"><img src='img/kitchen.jpeg'></a></div>
                                        <div class="homehealth"><a href="product.html"><img src='img/beauty.jpeg'></a></div>
                                        <div class="three"><a href="#"><p>Kitchen</p></a></div>
                                        <div class="three"><a href="#"><p>Health & Beauty</p></a></div>
                                    </div>
                                <p class="see"><a href="item.html">See more......</a></p>`;
                                
                                
let containerelementboxfour= document.querySelector('.forth').innerHTML=`
                           <h2>Amazon Gadget Store</h2>
                                <div class="attach">
                                    <div class="Smartphones"><a href="#"><img src='img/Smartphone.jpeg'></a></div>
                                    <div class="ree"><a href="#"><p>Smartphones</p></a></div>
                                    <div class="part">
                                        <div class="TabletsLaptops"><a href="#"><img src='img/tab.jpeg'></a></div>    
                                        <div class="Tvs"><a href="#"><img src='img/tv.jpeg'></a></div>
                                        <div class="TabletsLaptops"><a href="#"><img src='img/laptop.jpeg'></a></div>
                                    <div class="ree"><a href="#"><p>Tablets</p></a></div>
                                    <div class="ree"><a href="#"><p>Laptops</p></a></div> 
                                    <div class="ree"><a href="#"><p>Tvs</p></a></div> 
                                    </div>                                    
                                </div>
                                <p class="see"><a href="item.html">See more from Amazon gadgets.....</a></p>`;

let containerelementboxfive= document.querySelector('.fift').innerHTML=`
                           <h2>Fashion trends you like</h2>
                                <div class="attach">
                                            <div class="JeansDresses"><a href="#"><img src='img/jeans.jpeg'></a></div>
                                            <div class="TopsShoes"><a href="#"><img src='img/tops.jpeg'></a></div>
                                            <div class="three"><a href="#"><p>Jeans Under $50 </p></a></div>
                                            <div class="three"><a href="#"><p>Tops Under $50 </p></a></div>
                                            <div class="JeansDresses"><a href="#"><img src='img/dress.jpeg'></a></div>
                                            <div class="TopsShoes"><a href="#"><img src='img/shoes.jpeg'></a></div>
                                            <div class="three"><a href="#"><p>Dresses Under $30 </p></a></div>
                                            <div class="three"><a href="#"><p>Shoes Under $50 </p></a></div>
                                        </div>
                                    
                                    <p class="see"><a href="item.html">Explor More......</a></p>`;

let containerelementboxSix= document.querySelector('.six').innerHTML=`
                           <h2>Beauty steals under $25</h2>
                                <div class="boxsixboxseven"><a href="product.html"><img src='img/lowprice.jpeg'></a></div>
                                <p class="see"><a href="#">See deals.....</a></p>`;
                                
 let containerelementboxSeven= document.querySelector('.seven').innerHTML=`
                           <h2>Gifts For every Mom</h2>
                                <div class="boxsixboxseven"><a href="#"><img src='img/mom.jpeg'></a></div>
                                <p class="see"><a href="#">Shop gifts.....</a></p>`;
                                
let containerelementboxEight= document.querySelector('.eight').innerHTML=`
                            <h2>Fashion trends you like</h2>
                                <div class="attach">
                                    <div class="dress"><a href="#"><img src='img/dresses_.jpg'></a></div>
                                    <div class="Knitjelaryew"><a href="#"><img src='img/knits.jpg'></a></div>
                                    <div class="three"><a href="#"><p>Dresses</p></a></div>
                                    <div class="three"><a href="#"><p>Knits</p></a></div>
                                    
                                    <div class="dress"><a href="#"><img src='img/jackets.jpg'></div>
                                    <div class="Knitjelaryew"><a href="#"><img src='img/jewelary_.jpg'></a></div>
                                    <div class="three"><a href="#"><p>Jackets</p></a></div>
                                    <div class="three"><a href="#"><p>Jewellery</p></a></div>
                                </div>
                                <p class="see"><a href="#">Explor more....</a></p>`;
        
            }



 function sliderMiddlebox(){
    let containereKitchenproducts= document.querySelector('.container1').innerHTML=`
                <h2>Best Sellers in Kitchen & Dining</h2>
                <div class="slider">
                    <div class="slider-wrapper">
                        <div class="slide"><a href="#"><img src='img/kich-1.jpeg'></a></div>
                        <div class="slide"><a href="#"><img src='img/kich-2.jpeg'></a></div>
                        <div class="slide"><a href="#"><img src='img/kich-3.jpeg'></a></div>
                        <div class="slide"><a href="#"><img src='img/kich-4.jpeg'></a></div>
                        <div class="slide"><a href="#"><img src='img/kich-5.jpeg'></a></div>
                        <div class="slide"><a href="#"><img src='img/kich-6.jpeg'></a></div>
                        <div class="slide"><a href="#"><img src='img/kich-7.jpeg'></a></div>
                        <div class="slide"><a href="#"><img src='img/kich-8.jpeg'></a></div>
                        <div class="slide"><a href="#"><img src='img/kich-9.jpeg'></a></div>
                        <div class="slide"><a href="#"><img src='img/kich-10.jpeg'></a></div>
                    </div>
                    <button class="prev"  >&#10094;</button>
                    <button class="next"  >&#10095;</button>
                </div>
                <p class="see"><a href="#">Explore more......</a></p>`;


let containerBooks= document.querySelector('.container2').innerHTML=`
                <h2>Top Sellers in Books for you</h2>
                <div class="slider">
                    <div class="slider-wrapper">
                        <div class="book"><a href="#"><img src='img/book1.jpeg'></a></div>
                        <div class="book"><a href="#"><img src='img/book2.jpeg'></a></div>
                        <div class="book"><a href="#"><img src='img/book3.jpeg'></a></div>
                        <div class="book"><a href="#"><img src='img/Book4.jpeg'></a></div>
                        <div class="book"><a href="#"><img src='img/book5.jpeg'></a></div>
                        <div class="book"><a href="#"><img src='img/book6.jpeg'></a></div>
                        <div class="book"><a href="#"><img src='img/book7.jpeg'></a></div>
                        <div class="book"><a href="#"><img src='img/book8.jpeg'></a></div>
                        <div class="book"><a href="#"><img src='img/book9.jpeg'></a></div>
                        <div class="book"><a href="#"><img src='img/book10.jpeg'></a></div>
                    </div>
                    <button class="prev"  >&#10094;</button>
                    <button class="next"  >&#10095;</button>
                </div>
                <p class="see"><a href="#">Explore more......</a></p>`;


let containerbabyProducts= document.querySelector('.container3').innerHTML=`
                <h2>Top Sellers in Baby Products for you</h2>
                <div class="slider">
                    <div class="slider-wrapper">
                        <div class="baby"><a href="#"><img src='img/baby1.jpeg'></a></div>
                        <div class="baby"><a href="#"><img src='img/bab2.jpeg'></a></div>
                        <div class="baby"><a href="#"><img src='img/baby3.jpeg'></a></div>
                        <div class="baby"><a href="#"><img src='img/baby4.jpeg'></a></div>
                        <div class="baby"><a href="#"><img src='img/baby5.jpeg'></a></div>
                        <div class="baby"><a href="#"><img src='img/baby1.jpeg'></a></div>
                        <div class="baby"><a href="#"><img src='img/bab2.jpeg'></a></div>
                        <div class="baby"><a href="#"><img src='img/baby3.jpeg'></a></div>
                        <div class="baby"><a href="#"><img src='img/baby4.jpeg'></a></div>
                        <div class="baby"><a href="#"><img src='img/baby5.jpeg'></a></div>
                    </div>
                    <button class="prev"  >&#10094;</button>
                    <button class="next"  >&#10095;</button>
                </div>
                <p class="see"><a href="#">Explore more......</a></p>`;


let containerTopDelas= document.querySelector('.container4').innerHTML=`
                <h2>Top Deals Under $25</h2>
                <div class="slider">
                    <div class="slider-wrapper">
                        <div class="topdeals"><a href="#"><img src='img/deals1.jpeg'></a></div>
                        <div class="topdeals"><a href="#"><img src='img/deal2.jpeg'></a></div>
                        <div class="topdeals"><a href="#"><img src='img/deals3.jpeg'></a></div>
                        <div class="topdeals"><a href="#"><img src='img/deals4.jpeg'></a></div>
                        <div class="topdeals"><a href="#"><img src='img/deals5.jpeg'></a></div>
                        <div class="topdeals"><a href="#"><img src='img/deals1.jpeg'></a></div>
                        <div class="topdeals"><a href="#"><img src='img/deal2.jpeg'></a></div>
                        <div class="topdeals"><a href="#"><img src='img/deals3.jpeg'></a></div>
                        <div class="topdeals"><a href="#"><img src='img/deals4.jpeg'></a></div>
                        <div class="topdeals"><a href="#"><img src='img/deals5.jpeg'></a></div>
                    </div>
                    <button class="prev"  >&#10094;</button>
                    <button class="next"  >&#10095;</button>
                </div>
                <p class="see"><a href="#">Explore more......</a></p>`;

let containergameinmerchndise = document.querySelector('.gameinmerchndise ').innerHTML=`
                 <h2>Gaming merchandise</h2>
                <div class="attach ">
                            <div class="appral merchandise"><a href="#"><img src="img/apperal.jpeg" alt=""></a></div>
                            <div class="hats merchandise"><a href=""><img src="img/hats.jpeg" alt=""></a></div>
                            <div class="three"><p>appral</p></div>
                            <div class="three"><p>Hats</p></div>
                            
                            <div class="Action merchandise"><a href=""><img src="img/Action.jpeg" alt=""></a></div>
                            <div class="mugs merchandise"><a href=""><img src="img/mugs.jpeg" alt=""></a></div>
                            <div class="three"><p>Action-figures</p></div>
                            <div class="three"><p>Mugs</p></div>
                    </div>
                    <p class="see"><a href="#">Explor more...</a></p>`
                
let containerWarmwelcomingdecor = document.querySelector('.sap-three').innerHTML=`
                <h2>Warm & welcoming decor</h2>
                        <div class="attach">
                            <div class="out welcoming-deco "><a href=""><img src="img/Outdoor-decorato.jpeg" alt=""></div>
                            <div class="Wreaths welcoming-deco "><a href=""><img src="img/Wreaths\ &\ garlands.jpeg" alt=""></div>
                            <div class="three"><p></p></div>
                            <div class="three"><p></p></div>    
                            <div class="pollows welcoming-deco "><a href=""><img src="img/pilllows.jpeg" alt=""></div>
                            <div class="walls-art welcoming-deco "><a href=""><img src="img/mirrors.jpeg" alt=""></div>
                            <div class="three"><p></p></div>
                            <div class="three"><p> </p></div>
                        </div>
                        <p class="see"><a href="#">Explor more.....</a></p>`                   
let containerofficeFurnichure = document.querySelector('.officeFurnichure').innerHTML=`
                <h2>Upgrade your office furniture</h2>
                            <div class="sapcont3-4"> <a href=""><img src="img/office\ furniture.jpeg" alt=""> </div>
                                <p class="see"><a href="#">Shop now....</a></p>`;

let containerShopActivity = document.querySelector('.saparation2').innerHTML=`
                                <div class=" box">
                                    <h2>Shop activity trackers and smartwatches</h2>
                                    <div class="sapContImg"><a href=""><img src="img/shop\ activity_.jpg" alt=""> </div>
                                    <p class="see"><a href="#">See more.....</a></p>
                                </div>
                            
                                <div class="box">
                                    <h2>Player's paradise starts here</h2>
                                    <div class="sapContImg"> <a href=""><img src="img/player\ paradise_.jpg" alt="">   </div>
                                    <p class="see"><a href="#">Shop video games...</a></p>
                                </div>
            
                                <div class=" box">
                                    <h2>Creating business solutions</h2>
                                    <div class="sapContImg"><a href=""><img src="img/Businnes\ solu.jpeg" alt="">  </div>
                                    <p class="see"><a href="#">See more software products...</a></p>
                                </div>
            
                                <div class="box ">
                                    <h2>Creating business solutions</h2>
                                    <div class="sapContImg"> <a href=""><img src="img/new\ way.jpeg" alt="">  </div>
                                    <p class="see"><a href="#">Shop personal computers...</a></p>
                                </div>`;
                                        

let containerMovie = document.querySelector('.container5').innerHTML=`
                <h2>Most wished for in Movies & TV</h2>
                <div class="slider">
                    <div class="slider-wrapper"> 
                        <div class="movie"> <a href=""><img src="img/movie1.jpeg" alt=""> </div>
                        <div class="movie"> <a href=""><img src="img/movie2.jpeg" alt=""> </div>
                        <div class="movie"> <a href=""><img src="img/movie3.jpeg" alt=""> </div>
                        <div class="movie"> <a href=""><img src="img/movies4.jpeg" alt=""> </div>
                        <div class="movie"> <a href=""><img src="img/movie5.jpeg" alt=""> </div>
                        <div class="movie"> <a href=""><img src="img/movie1.jpeg" alt=""> </div>
                        <div class="movie"> <a href=""><img src="img/movie2.jpeg" alt=""> </div>
                        <div class="movie"> <a href=""><img src="img/movie3.jpeg" alt=""> </div>
                        <div class="movie"> <a href=""><img src="img/movies4.jpeg" alt=""> </div>
                        <div class="movie"> <a href=""><img src="img/movie5.jpeg" alt=""> </div>
                    </div>
                        <button class="prev"  >&#10094;</button>
                        <button class="next"  >&#10095;</button>
                    </div>
                    <p class="see"><a href="#">Explor more.........</a></p>`; 


let containerToys = document.querySelector('.container6').innerHTML=`
                 <h2>Top Sellers in Toys for you</h2>
                 <div class="slider">
                     <div class="slider-wrapper">
                        <div class="toy"> <a href=""><img src="img/toy1.jpeg" alt=""> </div>
                        <div class="toy"> <a href=""><img src="img/toy2.jpeg" alt=""> </div>
                        <div class="toy"> <a href=""><img src="img/toy3.jpeg" alt=""> </div>
                        <div class="toy"> <a href=""><img src="img/toy4.jpeg" alt=""> </div>
                        <div class="toy"> <a href=""><img src="img/toy5.jpeg" alt=""> </div> 
                        <div class="toy"> <a href=""><img src="img/toy1.jpeg" alt=""> </div>
                        <div class="toy"> <a href=""><img src="img/toy2.jpeg" alt=""> </div>
                        <div class="toy"> <a href=""><img src="img/toy3.jpeg" alt=""> </div>
                        <div class="toy"> <a href=""><img src="img/toy4.jpeg" alt=""> </div>
                        <div class="toy"> <a href=""><img src="img/toy5.jpeg" alt=""> </div>     
                    </div>
                    <button class="prev"  >&#10094;</button>
                    <button class="next"  >&#10095;</button>
                    </div>
                        <p class="see"><a href="#">Explor more.........</a></p>`; 


let containePCProduct = document.querySelector('.container7').innerHTML=`
                <h2>Popular products in PC internationally</h2>
                <div class="slider">
                    <div class="slider-wrapper">
                        <div class="pc"> <a href=""><img src="img/pc1.jpeg" alt=""> </div>
                        <div class="pc"> <a href=""><img src="img/pc2.jpeg" alt=""> </div>
                        <div class="pc"> <a href=""><img src="img/pc3.jpeg" alt=""> </div>
                        <div class="pc"> <a href=""><img src="img/pc4.jpeg" alt=""> </div>
                        <div class="pc"> <a href=""><img src="img/pc5.jpeg" alt=""> </div>
                        <div class="pc"> <a href=""><img src="img/pc1.jpeg" alt=""> </div>
                        <div class="pc"> <a href=""><img src="img/pc2.jpeg" alt=""> </div>
                        <div class="pc"> <a href=""><img src="img/pc3.jpeg" alt=""> </div>
                        <div class="pc"> <a href=""><img src="img/pc4.jpeg" alt=""> </div>
                        <div class="pc"> <a href=""><img src="img/pc5.jpeg" alt=""> </div>
                    </div>
                       <button class="prev"  >&#10094;</button>
                       <button class="next"  >&#10095;</button>
                    </div>
                    <p class="see"><a href="#">Explor more......</a></p>`;


   
             }
             
        
function sliderbox() {
        document.querySelectorAll('.slider').forEach(container => {
            const slider = container.querySelector('.slider-wrapper');
                const prev = container.querySelector('.prev');
                const next = container.querySelector('.next');
                    let currentIndex = 0;
                    const slidesPerView = 5;
                    const totalSlides = slider.children.length;
            
                    next.addEventListener('click', () => {
                        if (currentIndex < totalSlides - slidesPerView) {
                            currentIndex++;
                            updateSlider();
                        }
                    });
            
                    prev.addEventListener('click', () => {
                        if (currentIndex > 0) {
                            currentIndex--;
                            updateSlider();
                        }
                    });
            
                    function updateSlider() {
                        const offset = -currentIndex * (100 / slidesPerView);
                        slider.style.transform = `translateX(${offset}%)`;
                    }
                });
            }
            
           


