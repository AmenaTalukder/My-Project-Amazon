
const items=[{
    id:'001',
    image:'images1/Karu_LP_Laptop.png',
    heading:'TESmart USB-C MST&EDID KVM Switch 2 Monitors 2 Computers 4K@60Hz, USB 3.0 KVM Docking Station for 2 Laptops, Charging for Laptop, Hotkey Switch, 2 Sets of Dual USB-C, with Input Cables',
    companySite:'Visit the TESmart Store',
    rating:{

                },
    paragraph:'4.1 average based on 254 reviews.',
    original_price: 2599,
    current_price: 1507,
    discount_percentage: 42,
    return_period: 14,
    delivery_date: '10 Oct 2023',
},

{
    id:'002',
    image:'images1/Nintendo2.png',
    heading:'TESmart USB-C MST&EDID KVM Switch 2 Monitors 2 Computers 4K@60Hz, USB 3.0 KVM Docking Station for 2 Laptops, Charging for Laptop, Hotkey Switch, 2 Sets of Dual USB-C, with Input Cables',
    companySite:'Visit the TESmart Store',
    rating:{

                },
    paragraph:'4.1 average based on 254 reviews.',
    original_price: 2599,
    current_price: 1507,
    discount_percentage: 42,
    return_period: 14,
    delivery_date: '10 Oct 2023',
},
{
    id:'003',
    image:'images1/Karu_LP_Playstation3.jpg',
    heading:'TESmart USB-C MST&EDID KVM Switch 2 Monitors 2 Computers 4K@60Hz, USB 3.0 KVM Docking Station for 2 Laptops, Charging for Laptop, Hotkey Switch, 2 Sets of Dual USB-C, with Input Cables',
    companySite:'Visit the TESmart Store',
    rating:{

                },
    paragraph:'4.1 average based on 254 reviews.',
    original_price: 2599,
    current_price: 1507,
    discount_percentage: 42,
    return_period: 14,
    delivery_date: '10 Oct 2023',
},
{
    id:'004',
    image:'images1/Karu_Quad_Headset.jpg',
    heading:'TESmart USB-C MST&EDID KVM Switch 2 Monitors 2 Computers 4K@60Hz, USB 3.0 KVM Docking Station for 2 Laptops, Charging for Laptop, Hotkey Switch, 2 Sets of Dual USB-C, with Input Cables',
    companySite:'Visit the TESmart Store',
    rating:{

                },
    paragraph:'4.1 average based on 254 reviews.',
    original_price: 2599,
    current_price: 1507,
    discount_percentage: 42,
    return_period: 14,
    delivery_date: '10 Oct 2023',
},
{
    id:'005',
    image:'images1/Karu_LP_Game.png',
    heading:'TESmart USB-C MST&EDID KVM Switch 2 Monitors 2 Computers 4K@60Hz, USB 3.0 KVM Docking Station for 2 Laptops, Charging for Laptop, Hotkey Switch, 2 Sets of Dual USB-C, with Input Cables',
    companySite:'Visit the TESmart Store',
    rating:{

                },
    paragraph:'4.1 average based on 254 reviews.',
    original_price: 2599,
    current_price: 1507,
    discount_percentage: 42,
    return_period: 14,
    delivery_date: '10 Oct 2023',
},


]


itemContainerOfHomePage(); 

function itemContainerOfHomePage(){
    let containerelement= document.querySelector('.items-container');
        let innerHTML='';
            items.forEach(item =>{
                 innerHTML+=`
                    <div class="item-container">                           
                            <div class="img-container">
                                <img src="${item.image}" alt="Product Image">
                            </div>
                            <div class="info">
                                <h4>${item.heading}</h4>
                                <div class="company-site"><a href="#">${item.companySite}</a></div>
                                <div class="rating">
                                     <div class="stars">
                                        <span class="star" onclick="rate(this, 1)">&#9733;</span>
                                        <span class="star" onclick="rate(this, 2)">&#9733;</span>
                                        <span class="star" onclick="rate(this, 3)">&#9733;</span>
                                        <span class="star" onclick="rate(this, 4)">&#9733;</span>
                                        <span class="star" onclick="rate(this, 5)">&#9733;</span>
                                    </div>
                                    <div class="output" id="output">Rating is: 0/5</div>
                                    <p>${item.paragraph}</p>
                                </div>
                                <div class="price">
                                    <span class="current-price">${item.current_price} Taka </span>
                                    <span class="original-price"> ${item.original_price} Taka</span>
                                    <span class="discount">(${item.discount_percentage}% OFF)</span>
                                </div>
                               
                                <button class="add-to-cart" onclick="addToBag(${item.id})">Add to cart</button>
                            </div>
                            </div>`; });

                            containerelement.innerHTML= innerHTML;
            }

          