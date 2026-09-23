import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight, ChevronDown, ChevronLeft, ChevronRight, Clock3, Facebook,
  Heart, Instagram, MapPin, Menu as MenuIcon, Phone, Search, ShoppingBag,
  Sparkles, Star, Truck, Utensils, X, MessageCircle
} from "lucide-react";
import "./index.css";

const menuData = [
  { id:1, name:"Paneer Butter Masala", category:"Veg", group:"Main Course", price:180, description:"Soft paneer in a rich tomato-butter gravy.", image:"https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=80", isAvailable:true },
  { id:2, name:"Paneer Chilli", category:"Veg", group:"Starters", price:160, description:"Crispy paneer tossed with peppers and onion.", image:"https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=900&q=80", isAvailable:true },
  { id:3, name:"Dal Tadka", category:"Veg", group:"Main Course", price:120, description:"Yellow lentils finished with a fragrant tadka.", image:"https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=80", isAvailable:true },
  { id:4, name:"Veg Biryani", category:"Veg", group:"Biryani", price:170, description:"Aromatic basmati rice with seasonal vegetables.", image:"https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=900&q=80", isAvailable:true },
  { id:5, name:"Mix Veg", category:"Veg", group:"Main Course", price:140, description:"Garden vegetables cooked in a balanced masala.", image:"https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80", isAvailable:true },
  { id:6, name:"Chicken Biryani", category:"Non-Veg", group:"Biryani", price:199, description:"Aromatic basmati rice with flavorful chicken.", image:"https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=900&q=80", isAvailable:true },
  { id:7, name:"Chicken Curry", category:"Non-Veg", group:"Main Course", price:210, description:"Tender chicken simmered in a homestyle gravy.", image:"https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=80", isAvailable:true },
  { id:8, name:"Chicken Chilli", category:"Non-Veg", group:"Starters", price:220, description:"Chicken with peppers, onion and a punchy sauce.", image:"https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=80", isAvailable:true },
  { id:9, name:"Butter Chicken", category:"Non-Veg", group:"Main Course", price:240, description:"Creamy tomato gravy with tender chicken.", image:"https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=900&q=80", isAvailable:true },
  { id:10, name:"Egg Curry", category:"Non-Veg", group:"Main Course", price:150, description:"Eggs in a comforting onion-tomato curry.", image:"https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=900&q=80", isAvailable:true }
];

const gallery = [
  ["Biryani", "https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=1100&q=85"],
  ["Paneer", "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=1100&q=85"],
  ["Chicken", "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1100&q=85"],
  ["Indian Food", "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1100&q=85"],
  ["Restaurant", "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1100&q=85"],
  ["Starters", "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1100&q=85"],
  ["Fresh Food", "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1100&q=85"],
  ["Drinks", "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=1100&q=85"]
];

function SectionHeading({eyebrow, title, text, light=false}) {
  return <div className={`max-w-2xl ${light ? "text-white" : ""}`}>
    <div className="eyebrow">{eyebrow}</div>
    <h2 className="section-title">{title}</h2>
    {text && <p className={`mt-4 leading-7 ${light ? "text-white/65" : "text-stone-600"}`}>{text}</p>}
  </div>
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [["Home","home"],["Menu","menu"],["About","about"],["Gallery","gallery"],["Contact","contact"]];
  return <header className="fixed top-0 left-0 right-0 z-50">
    <div className="nav-shell">
      <a href="#home" className="brand" onClick={()=>setOpen(false)}>
        <span>KUNJ</span><small>RESTAURANT</small>
      </a>
      <nav className="hidden md:flex items-center gap-8">
        {links.map(([label,id])=><a className="nav-link" href={`#${id}`} key={id}>{label}</a>)}
      </nav>
      <div className="hidden md:flex items-center gap-3">
        <a href="#contact" className="call-link"><Phone size={16}/> Call Now</a>
        <a href="#menu" className="order-btn">Order Now <ArrowRight size={16}/></a>
      </div>
      <button aria-label="Open menu" className="md:hidden icon-btn" onClick={()=>setOpen(!open)}>{open?<X/>:<MenuIcon/>}</button>
    </div>
    {open && <div className="mobile-nav md:hidden">
      {links.map(([label,id])=><a href={`#${id}`} key={id} onClick={()=>setOpen(false)}>{label}</a>)}
      <a href="#menu" className="order-btn justify-center">Order Now <ArrowRight size={16}/></a>
    </div>}
  </header>
}

function Hero() {
  return <section id="home" className="hero">
    <div className="hero-overlay"/>
    <div className="container hero-content">
      <div className="max-w-3xl">
        <div className="pill light-pill"><Sparkles size={15}/> A local taste worth coming back for</div>
        <h1>Delicious Food,<br/><span>Made With Love.</span></h1>
        <p className="hero-sub">Authentic Veg & Non-Veg Food in Chakai</p>
        <p className="hero-copy">Enjoy delicious food, quality ingredients and warm hospitality at Kunj Restaurant, Chakai.</p>
        <div className="flex flex-wrap gap-3 mt-8">
          <a href="#menu" className="primary-btn">Explore Menu <ArrowRight size={18}/></a>
          <a href="#contact" className="secondary-btn">Order for Home Delivery <Truck size={18}/></a>
        </div>
        <div className="trust-row">
          {["Veg & Non-Veg","Home Delivery","Quality Food","Made With Care"].map((x,i)=><div className="trust" key={x}><span>{["🍽️","🛵","⭐","❤️"][i]}</span>{x}</div>)}
        </div>
      </div>
    </div>
  </section>
}

function DishCard({dish, onAdd}) {
  return <article className="dish-card">
    <div className="dish-image"><img src={dish.image} alt={dish.name} loading="lazy"/><span className={`food-badge ${dish.category==="Veg"?"veg":"nonveg"}`}>{dish.category}</span></div>
    <div className="p-5">
      <div className="flex justify-between gap-3"><h3 className="dish-name">{dish.name}</h3><span className="price">₹{dish.price}</span></div>
      <p className="dish-desc">{dish.description}</p>
      <button className="add-btn" onClick={()=>onAdd(dish)}><ShoppingBag size={15}/> Add to Order</button>
    </div>
  </article>
}

function PopularDishes({onAdd}) {
  return <section className="section cream" id="popular">
    <div className="container">
      <SectionHeading eyebrow="FAN FAVORITES" title="Our Popular Dishes" text="Freshly prepared favorites from Kunj Restaurant."/>
      <div className="dish-grid mt-10">{menuData.slice(0,6).map(d=><DishCard dish={d} key={d.id} onAdd={onAdd}/>)}</div>
    </div>
  </section>
}

function Menu({onAdd}) {
  const tabs=["All","Veg","Non-Veg","Biryani","Starters","Main Course"];
  const [active,setActive]=useState("All");
  const [query,setQuery]=useState("");
  const filtered=menuData.filter(d=>(active==="All"||d.category===active||d.group===active)&&d.name.toLowerCase().includes(query.toLowerCase()));
  return <section className="section" id="menu">
    <div className="container">
      <SectionHeading eyebrow="THE MENU" title="Something Delicious for Everyone" text="A demo menu with sample prices — ready to connect to a Django REST API later."/>
      <div className="menu-tools mt-8">
        <div className="tabs">{tabs.map(t=><button key={t} onClick={()=>setActive(t)} className={active===t?"tab active":"tab"}>{t}</button>)}</div>
        <div className="search"><Search size={17}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search dishes..."/></div>
      </div>
      <div className="menu-list mt-8">{filtered.map(d=><DishCard dish={d} key={d.id} onAdd={onAdd}/>)}</div>
    </div>
  </section>
}

function DeliveryCTA() {
  return <section className="section dark-section">
    <div className="container">
      <div className="delivery-card">
        <div className="relative z-10 max-w-2xl">
          <div className="eyebrow light">HOME DELIVERY</div>
          <h2 className="section-title text-white">Craving Something Delicious?</h2>
          <p className="mt-4 text-white/70 text-lg leading-8">Enjoy your favorite food from Kunj Restaurant at your home. Home delivery is available in Chakai.</p>
          <div className="flex flex-wrap gap-3 mt-8">
            <a href="#contact" className="primary-btn">Order on WhatsApp <MessageCircle size={18}/></a>
            <a href="#contact" className="secondary-btn">Call for Home Delivery <Phone size={18}/></a>
          </div>
        </div>
        <div className="delivery-orb"><Truck size={100}/></div>
      </div>
    </div>
  </section>
}

function About() {
  return <section className="section cream" id="about">
    <div className="container about-grid">
      <div className="about-photo"><img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=85" alt="Restaurant dining interior" loading="lazy"/><div className="owner-card"><Heart size={18}/><div><b>Owned & Managed by</b><span>Mr. Raju Ray</span></div></div></div>
      <div>
        <SectionHeading eyebrow="OUR STORY" title="Welcome to Kunj Restaurant" text="Kunj Restaurant is a local dining destination in Chakai, Jamui, serving vegetarian and non-vegetarian food for customers who want a warm, satisfying meal."/>
        <p className="mt-6 text-stone-600 leading-8">From dine-in meals to convenient home delivery, our focus is simple: serve food that feels comforting, flavorful and thoughtfully prepared. This website is a demo UI designed for the restaurant and can be connected to a real menu and ordering system later.</p>
        <div className="mt-8 flex flex-wrap gap-3"><span className="mini-chip"><Utensils size={16}/> Dine-in</span><span className="mini-chip"><Truck size={16}/> Home Delivery</span><span className="mini-chip"><Heart size={16}/> Made With Care</span></div>
      </div>
    </div>
  </section>
}

function Features() {
  const items=[["Fresh & Tasty Food", "Carefully presented meals made for everyday cravings.", Utensils],["Home Delivery","Enjoy Kunj Restaurant from the comfort of home.",Truck],["Veg & Non-Veg Options","A menu designed with different food preferences in mind.",Sparkles],["Made With Care","Warm hospitality and a local restaurant experience.",Heart]];
  return <section className="section" id="features"><div className="container"><SectionHeading eyebrow="WHY KUNJ" title="A Local Place for Good Food" text="Simple things that make the dining experience feel welcoming."/><div className="feature-grid mt-10">{items.map(([t,d,I])=><div className="feature-card" key={t}><div className="feature-icon"><I/></div><h3>{t}</h3><p>{d}</p></div>)}</div></div></section>
}

function Gallery() {
  const [selected,setSelected]=useState(null);
  return <section className="section cream" id="gallery"><div className="container"><SectionHeading eyebrow="FOOD & MOMENTS" title="A Taste of Kunj" text="A visual gallery using high-quality demo food and restaurant imagery."/><div className="gallery-grid mt-10">{gallery.map(([name,url],i)=><button key={url} className={`gallery-item gi-${i}`} onClick={()=>setSelected({name,url})}><img src={url} alt={name} loading="lazy"/><span>{name}</span></button>)}</div></div>
    {selected&&<div className="lightbox" onClick={()=>setSelected(null)}><button className="lightbox-close" aria-label="Close"><X/></button><img src={selected.url} alt={selected.name} onClick={e=>e.stopPropagation()}/><div>{selected.name}</div></div>}
  </section>
}

function Reviews() {
  const reviews=[["Delicious food and great service.","Demo Customer"],["A warm local place for a satisfying meal.","Demo Customer"],["The menu has something for everyone.","Demo Customer"]];
  return <section className="section dark-section"><div className="container"><div className="text-center max-w-2xl mx-auto"><div className="eyebrow light">SAMPLE REVIEWS</div><h2 className="section-title text-white">What Guests Could Say</h2><p className="mt-4 text-white/60">These are demo testimonials for the UI and are not real customer reviews.</p></div><div className="review-grid mt-10">{reviews.map(([t,n])=><div className="review-card" key={t}><div className="stars">{[1,2,3,4,5].map(i=><Star key={i} size={16} fill="currentColor"/>)}</div><p>“{t}”</p><span>— {n}</span></div>)}</div></div></section>
}

function Contact() {
  return <section className="section" id="contact"><div className="container"><div className="contact-grid"><div><SectionHeading eyebrow="COME VISIT" title="Visit Kunj Restaurant" text="Find us in Chakai, Jamui, Bihar. For orders and delivery, please use the restaurant's real contact details when they are available."/><div className="contact-lines"><div><MapPin/> <span><b>Location</b>Chakai, Jamui, Bihar, India</span></div><div><Utensils/> <span><b>Owner</b>Mr. Raju Ray</span></div><div><Phone/> <span><b>Call for Orders</b>90068 19652</span></div><div><Truck/> <span><b>Delivery</b>Home Delivery Available</span></div></div></div><div className="map-placeholder"><div className="map-grid"/><div className="map-pin"><MapPin size={28}/></div><div className="map-label"><b>Kunj Restaurant</b><span>Chakai, Jamui, Bihar</span></div><div className="map-note">Google Maps-style placeholder — exact street location not provided.</div></div></div></div></section>
}

function Footer() {
  return <footer><div className="container footer-grid"><div><a href="#home" className="brand footer-brand"><span>KUNJ</span><small>RESTAURANT</small></a><p>Veg & Non-Veg Restaurant<br/>Chakai, Jamui, Bihar</p><p className="owner-foot">Owned & Managed by Mr. Raju Ray</p></div><div><h4>Explore</h4><a href="#home">Home</a><a href="#menu">Menu</a><a href="#about">About</a><a href="#gallery">Gallery</a><a href="#contact">Contact</a></div><div><h4>Services</h4><span>Dine-in</span><span>Home Delivery</span><span>Veg Food</span><span>Non-Veg Food</span></div><div><h4>Follow</h4><div className="socials"><a href="#" aria-label="Instagram"><Instagram/></a><a href="#" aria-label="Facebook"><Facebook/></a><a href="#" aria-label="WhatsApp"><MessageCircle/></a></div></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Kunj Restaurant. Demo UI.</span><span>Built as a frontend-only concept.</span></div></footer>
}

function App() {
  const [toast,setToast]=useState("");
  const onAdd=(dish)=>{setToast(`${dish.name} added to your demo order`); setTimeout(()=>setToast(""),2200)};
  useEffect(()=>{document.documentElement.style.scrollBehavior="smooth"; return()=>{document.documentElement.style.scrollBehavior="auto"}},[]);
  return <><Navbar/><main><Hero/><PopularDishes onAdd={onAdd}/><Menu onAdd={onAdd}/><DeliveryCTA/><About/><Features/><Gallery/><Reviews/><Contact/><section className="final-cta"><div className="container text-center"><div className="eyebrow light">READY WHEN YOU ARE</div><h2>Your Next Delicious Meal<br/>Is Just One Order Away.</h2><div className="flex justify-center flex-wrap gap-3 mt-8"><a href="#menu" className="primary-btn">View Menu <ArrowRight size={18}/></a><a href="#contact" className="secondary-btn">Order Now <ShoppingBag size={18}/></a></div></div></section></main><Footer/>{toast&&<div className="toast"><ShoppingBag size={17}/>{toast}</div>}</>
}

createRoot(document.getElementById("root")).render(<App/>);