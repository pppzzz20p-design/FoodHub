const restaurants = [
  {id:1,name:"บ้านครัวไทย",area:"อยุธยา",rating:4.8,reviews:126,price:"฿฿",types:["อาหารไทย","อาหารตามสั่ง"],tag:"ร้านยอดนิยม",open:true,image:"https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=900&q=80",address:"ถนนโรจนะ พระนครศรีอยุธยา",phone:"035-123-456",menu:[["ผัดไทยกุ้งสด",129],["กะเพราเนื้อไข่ดาว",99],["ต้มยำกุ้ง",189],["ข้าวผัดปู",149]]},
  {id:2,name:"Sakura Japanese",area:"กรุงเทพฯ",rating:4.7,reviews:98,price:"฿฿฿",types:["อาหารญี่ปุ่น","ซูชิ"],tag:"Users' Choice",open:true,image:"https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=900&q=80",address:"ถนนสุขุมวิท กรุงเทพฯ",phone:"02-234-5678",menu:[["Sushi Set",399],["Salmon Sashimi",329],["Salmon Don",259],["Matcha Cheesecake",149]]},
  {id:3,name:"Moonlight Cafe",area:"ลพบุรี",rating:4.6,reviews:74,price:"฿",types:["คาเฟ่","กาแฟ","ของหวาน"],tag:"ร้านใหม่",open:true,image:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80",address:"ถนนนารายณ์มหาราช ลพบุรี",phone:"081-234-5678",menu:[["Americano",70],["Matcha Latte",95],["Basque Cheesecake",125],["Croissant",85]]},
  {id:4,name:"Seoul Grill",area:"กรุงเทพฯ",rating:4.9,reviews:215,price:"฿฿฿",types:["อาหารเกาหลี","ปิ้งย่าง","บุฟเฟ่ต์"],tag:"ยอดนิยม",open:false,image:"https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80",address:"รัชดาฯ กรุงเทพฯ",phone:"02-987-6543",menu:[["Korean BBQ Buffet",499],["Kimchi Pancake",159],["Bibimbap",189],["Tteokbokki",149]]},
  {id:5,name:"Chao Phraya Seafood",area:"กรุงเทพฯ",rating:4.5,reviews:61,price:"฿฿฿฿",types:["อาหารทะเล","อาหารไทย"],tag:"วิวแม่น้ำ",open:true,image:"https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80",address:"ริมแม่น้ำเจ้าพระยา กรุงเทพฯ",phone:"02-555-1212",menu:[["กุ้งแม่น้ำเผา",590],["ปูผัดผงกะหรี่",490],["ปลากะพงนึ่งมะนาว",420],["ยำทะเล",290]]},
  {id:6,name:"Pizza Casa",area:"เชียงใหม่",rating:4.4,reviews:87,price:"฿฿",types:["อาหารอิตาเลียน","พิซซ่า"],tag:"โปรเด็ด",open:true,image:"https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=900&q=80",address:"นิมมานเหมินท์ เชียงใหม่",phone:"053-321-111",menu:[["Margherita",220],["Pepperoni",260],["Truffle Pasta",320],["Tiramisu",140]]},
  {id:7,name:"Mala Hotpot",area:"ลพบุรี",rating:4.3,reviews:45,price:"฿฿",types:["ชาบู","หม่าล่า"],tag:"เปิดใหม่",open:true,image:"https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=900&q=80",address:"ถนนพหลโยธิน ลพบุรี",phone:"082-222-3333",menu:[["หม่าล่าหม้อไฟ",299],["เนื้อสไลซ์",159],["กุ้ง",129],["น้ำซุปหม่าล่า",49]]},
  {id:8,name:"Burger Station",area:"อยุธยา",rating:4.2,reviews:39,price:"฿",types:["เบอร์เกอร์","ฟาสต์ฟู้ด"],tag:"คุ้มราคา",open:true,image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80",address:"ตลาดกลางอยุธยา",phone:"089-111-2222",menu:[["Classic Burger",129],["Double Cheese",169],["Chicken Burger",119],["French Fries",69]]}
];

const categories = [
  ["🍜","ก๋วยเตี๋ยว","ก๋วยเตี๋ยว"],["🍲","ชาบู","ชาบู"],["☕","คาเฟ่","คาเฟ่"],["🥩","ปิ้งย่าง","ปิ้งย่าง"],["🍣","ซูชิ","ซูชิ"],["🍕","พิซซ่า","พิซซ่า"],
  ["🍛","อาหารไทย","อาหารไทย"],["🥗","อาหารคลีน","อาหารคลีน"],["🍰","ของหวาน","ของหวาน"],["🦐","อาหารทะเล","อาหารทะเล"],["🍗","ฟาสต์ฟู้ด","ฟาสต์ฟู้ด"],["🥘","อาหารนานาชาติ","อาหารนานาชาติ"]
];

const reviews = [
  {user:"Mint",avatar:"👩🏻",restaurant:"บ้านครัวไทย",rating:5,text:"รสชาติดีมาก ปริมาณคุ้มราคา ผัดไทยกุ้งสดอร่อยและกุ้งตัวใหญ่ค่ะ"},
  {user:"Bank",avatar:"👨🏻",restaurant:"Sakura Japanese",rating:5,text:"ซูชิสดมาก ร้านบรรยากาศดี พนักงานบริการดี มีเมนูให้เลือกเยอะ"},
  {user:"Ploy",avatar:"👩🏻‍🦰",restaurant:"Moonlight Cafe",rating:4,text:"คาเฟ่น่ารัก กาแฟหอมมาก เค้กอร่อย เหมาะกับมานั่งทำงานหรือถ่ายรูป"}
];

const categoryGrid = document.getElementById("categoryGrid");
categoryGrid.innerHTML = categories.map(c=>`<button class="category" data-category="${c[2]}"><div class="category-icon">${c[0]}</div><div class="category-name">${c[1]}</div></button>`).join("");

const grid = document.getElementById("restaurantGrid");
const empty = document.getElementById("emptyState");
const searchInput = document.getElementById("searchInput");
const locationFilter = document.getElementById("locationFilter");
const ratingFilter = document.getElementById("ratingFilter");
const priceFilter = document.getElementById("priceFilter");
const sortFilter = document.getElementById("sortFilter");
const activeFilter = document.getElementById("activeFilter");
const modal = document.getElementById("restaurantModal");
const modalContent = document.getElementById("modalContent");
const loginModal = document.getElementById("loginModal");
const toast = document.getElementById("toast");

function stars(r){return "★".repeat(Math.round(r))+"☆".repeat(5-Math.round(r))}
function card(r){
  return `<article class="restaurant-card" data-id="${r.id}">
    <div class="card-image" style="background-image:url('${r.image}')">
      <button class="heart" data-heart="${r.id}" aria-label="บันทึกร้าน">♡</button>
      <span class="badge">${r.tag}</span>
    </div>
    <div class="card-body">
      <h3 class="card-title">${r.name}</h3>
      <div class="rating">${r.rating} <span>${stars(r.rating)} · ${r.reviews} รีวิว</span></div>
      <div class="meta">${r.types.join(" · ")}<br>📍 ${r.area}</div>
      <div class="card-bottom"><span class="price">${r.price}</span><span class="open">${r.open?"● เปิดอยู่":"● ปิดอยู่"}</span></div>
    </div>
  </article>`
}
function render(){
  const q=searchInput.value.trim().toLowerCase(), loc=locationFilter.value, min=+ratingFilter.value, price=priceFilter.value;
  let data=restaurants.filter(r=>{
    const hay=[r.name,r.area,...r.types,r.address].join(" ").toLowerCase();
    return (!q||hay.includes(q)) && (loc==="all"||r.area===loc) && r.rating>=min && (price==="all"||r.price===price);
  });
  if(sortFilter.value==="rating") data.sort((a,b)=>b.rating-a.rating);
  if(sortFilter.value==="reviews") data.sort((a,b)=>b.reviews-a.reviews);
  if(sortFilter.value==="new") data.sort((a,b)=>b.id-a.id);
  grid.innerHTML=data.map(card).join("");
  empty.hidden=data.length>0;
  activeFilter.textContent=(q||loc!=="all"||min||price!=="all") ? `ผลการค้นหา ${data.length} ร้าน` : "";
}
function openRestaurant(id){
  const r=restaurants.find(x=>x.id===id); if(!r)return;
  modalContent.innerHTML=`<div class="modal-hero" style="background-image:url('${r.image}')"></div>
  <div class="modal-body"><span class="kicker">${r.tag}</span><h2>${r.name}</h2>
  <div class="rating">${r.rating} <span>${stars(r.rating)} · ${r.reviews} รีวิว</span></div>
  <div class="detail-grid"><div class="detail-box"><strong>ประเภทอาหาร</strong>${r.types.join(" · ")}</div><div class="detail-box"><strong>ราคา</strong>${r.price}</div><div class="detail-box"><strong>ที่อยู่</strong>${r.address}</div><div class="detail-box"><strong>โทรศัพท์</strong>${r.phone}</div></div>
  <h3>เมนูแนะนำ</h3><div class="menu-list">${r.menu.map(m=>`<div class="menu-item"><span>${m[0]}</span><strong>฿${m[1]}</strong></div>`).join("")}</div>
  <button class="primary-btn" style="margin-top:20px" id="orderBtn">สั่งอาหาร / จองโต๊ะ</button></div>`;
  modal.classList.add("open");modal.setAttribute("aria-hidden","false");
}
function closeModals(){document.querySelectorAll(".modal.open").forEach(m=>{m.classList.remove("open");m.setAttribute("aria-hidden","true")})}
function showToast(msg){toast.textContent=msg;toast.classList.add("show");setTimeout(()=>toast.classList.remove("show"),2500)}

grid.addEventListener("click",e=>{
  const heart=e.target.closest("[data-heart]");
  if(heart){e.stopPropagation();heart.classList.toggle("active");heart.textContent=heart.classList.contains("active")?"♥":"♡";showToast(heart.classList.contains("active")?"บันทึกร้านแล้ว":"นำร้านออกจากรายการบันทึกแล้ว");return}
  const cardEl=e.target.closest(".restaurant-card");if(cardEl)openRestaurant(+cardEl.dataset.id);
});
categoryGrid.addEventListener("click",e=>{const b=e.target.closest("[data-category]");if(b){searchInput.value=b.dataset.category;locationFilter.value="all";render();document.getElementById("restaurants").scrollIntoView({behavior:"smooth"})}});
document.querySelectorAll("[data-search]").forEach(b=>b.addEventListener("click",()=>{searchInput.value=b.dataset.search;render();document.getElementById("restaurants").scrollIntoView({behavior:"smooth"})}));
[searchInput,locationFilter,ratingFilter,priceFilter,sortFilter].forEach(el=>el.addEventListener(el===searchInput?"input":"change",render));
document.getElementById("searchBtn").addEventListener("click",()=>{render();document.getElementById("restaurants").scrollIntoView({behavior:"smooth"})});
document.getElementById("clearFilters").addEventListener("click",()=>{searchInput.value="";locationFilter.value="all";ratingFilter.value="0";priceFilter.value="all";sortFilter.value="recommended";render()});
document.querySelectorAll("[data-close]").forEach(x=>x.addEventListener("click",closeModals));
document.getElementById("loginBtn").addEventListener("click",()=>loginModal.classList.add("open"));
document.getElementById("loginForm").addEventListener("submit",e=>{e.preventDefault();closeModals();showToast("เข้าสู่ระบบสำเร็จ (โหมดตัวอย่าง)")});
document.getElementById("writeReviewBtn").addEventListener("click",()=>showToast("ระบบเขียนรีวิวเป็นโหมดตัวอย่าง"));
document.getElementById("newsletterForm").addEventListener("submit",e=>{e.preventDefault();showToast("สมัครรับข่าวสารเรียบร้อยแล้ว")});
document.addEventListener("click",e=>{if(e.target.id==="orderBtn"){closeModals();showToast("ระบบสั่งอาหาร/จองโต๊ะเป็นโหมดตัวอย่าง")}});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModals()});
document.getElementById("menuBtn").addEventListener("click",()=>showToast("เมนูมือถือ: เลื่อนดูหมวดหมู่ด้านล่างได้เลย"));
render();
