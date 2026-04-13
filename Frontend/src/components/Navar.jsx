import { useState } from "react";
import { Search, MapPin, ShoppingCart, Menu, X, ChevronDown } from "lucide-react";
import Logo from "../images/logo.png";
import { User } from "lucide-react";
const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header>
        
            <nav className="bg-[#0f1111] text-nav-foreground">
         
                <div className="flex items-center px-2 py-2 gap-2 lg:px-4">
                   
                    <button
                        className="lg:hidden p-1 hover:outline hover:outline-1 hover:outline-nav-foreground rounded-sm"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X size={24} className="text-white" /> : <Menu size={24}className="text-white" />}
                    </button>

                
                    <a href="/" className="flex items-center px-2 py-1 hover:outline hover:outline-1 hover:outline-white hover:text-white rounded-sm shrink-0">
                        <span className=" text-xl font-bold tracking-tight">
                            <img className="mt-2 w-32 object-cover " src={Logo} alt="ff" />
                        </span>
                    </a>

                  
                    <a href="#" className=" hidden md:flex items-center gap-1 px-2 py-1hover:outline hover:outline-1 hover:outline-white hover:text-white rounded-sm shrink-0">
                        <MapPin size={18} className="text-white" />
                        <div className=" text-white text-xs leading-tight">
                            <span className=" text-muted-foreground">Deliver to</span>
                            <p className="font-bold text-sm">United States</p>
                        </div>
                    </a>

                   
                    <div className="bg-gray-300 hidden sm:flex flex-1 min-w-0">
                        <select className="hidden lg:block bg-muted text-foreground text-xs px-2 rounded-l-md border-none outline-none">
                            <option>All</option>
                            <option>Electronics</option>
                            <option>Fashion</option>
                            <option>Home</option>
                            <option>Books</option>
                        </select>
                        <input
                            type="text"
                            placeholder="Search ShopZone"
                            className=" bg-white flex-1 min-w-0 px-3 py-2 text-foreground text-sm outline-none lg:rounded-none rounded-l-md"
                        />
                        <button className=" bg-amber-400 bg-yell hover:brightness-110 px-3 rounded-r-md" aria-label="Search">
                            <Search size={20} className="text-primary-foreground text-white"  />
                        </button>
                    </div>

               
                    <div className="hidden sm:flex items-center gap-1">
                        <a href="#" className=" text-white flex items-center gap-0.5 px-2 py-1 hover:outline hover:outline-1 hover:outline-nav-foreground rounded-sm text-xs">
                            <span>EN</span>
                            <ChevronDown size={12} className="text-white" />
                        </a>

                        <a href="#" className=" text-white px-2 py-1 hover:outline hover:outline-1 hover:outline-nav-foreground rounded-sm text-xs leading-tight">
                            <span className=" text-white text-muted-foreground">Hello, sign in</span>
                            <p className="font-bold text-sm flex items-center gap-0.5">
                                Account <ChevronDown size={12} className="text-white" />
                            </p>
                        </a>

                        <a href="#" className=" text-white px-2 py-1 hover:outline hover:outline-1 hover:outline-nav-foreground rounded-sm text-xs leading-tight">
                            <span className=" text-muted-foreground">Returns</span>
                            <p className="font-bold text-sm">& Orders</p>
                        </a>
                    </div>

                 
                    <div className="sm:hidden flex items-center gap-2 ml-auto">
                        <a href="#" className="text-xs text-nav-foreground"> <User size={18} className="text-white" /></a>
                    </div>

                    <a href="#" className=" text-white flex items-center px-2 py-1 hover:outline hover:outline-1 hover:outline-nav-foreground rounded-sm shrink-0 relative">
                        <ShoppingCart size={28} className="text-white" />
                        <span className="absolute top-0 right-1 bg-primary text-primary-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                            
                        </span>
                        <span className=" text-white hidden sm:inline font-bold text-sm ml-1">Cart</span>
                    </a>
                </div>

             
                <div className="sm:hidden flex items-center px-2 pb-2 gap-2">
                    <div className="flex flex-1 min-w-0">
                        <input
                            type="text"
                            placeholder="Search ShopZone"
                            className=" bg-white flex-1 min-w-0 px-3 py-2.5 text-foreground text-sm outline-none rounded-l-md"
                        />
                        <button className="bg-yellow-500 hover:brightness-110 px-3 rounded-r-md" aria-label="Search">
                            <Search size={20} className=" text-white-foreground" />
                        </button>
                    </div>
                </div>

                <div className=" text-white sm:hidden flex items-center gap-1.5 px-3 py-1.5 bg-nav-secondary text-nav-foreground">
                    <MapPin size={16} className="shrink-0 text-white" />
                    <span className="text-xs">Deliver to United States</span>
                </div>
            </nav>

        
            <div className="bg-[#323434] text-sm">
                <div className="flex items-center gap-1 px-2 py-1 overflow-x-auto whitespace-nowrap scrollbar-hide">

                   
                    <div className="flex md:hidden gap-1">
                        {["Today's Deals", "Customer Service"]
                            .slice(0, 2)
                            .map((item) => (
                                <a
                                    key={item}
                                    href="#"
                                    className="text-white px-2 py-1 hover:outline hover:outline-1 hover:outline-white rounded-sm shrink-0"
                                >
                                    {item}
                                </a>
                            ))}
                    </div>

                    {/* Desktop: all items */}
                    <div className="hidden md:flex gap-1">
                        {[
                            "Today's Deals",
                            "Customer Service",
                            "Registry",
                            "Gift Cards",
                            "Sell",
                            "Electronics",
                            "Fashion",
                            "Home",
                            "Books",
                        ].map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="text-white px-2 py-1 hover:outline hover:outline-1 hover:outline-white rounded-sm shrink-0"
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                </div>
            </div>

           
            {mobileOpen && (
                <div className="  lg:hidden bg-card text-card-foreground ">
                    <div className="p-4 space-y-3">
                        <a href="#" className="block py-2  font-bold">Your Account</a>
                        <a href="#" className="block py-2 ">Your Orders</a>
                        <a href="#" className="block py-2 ">Your Lists</a>
                        <div className="pt-2 pb-1 text-xs font-bold uppercase text-muted-foreground tracking-wider">Shop by Category</div>
                        {["Electronics", "Fashion", "Home", "Books", "Toys", "Grocery"].map((cat) => (
                            <a key={cat} href="#" className="block py-2 ">{cat}</a>
                        ))}
                        <div className="pt-2 pb-1 text-xs font-bold uppercase text-muted-foreground tracking-wider">Help & Settings</div>
                        <a href="#" className="block py-2 ">Customer Service</a>
                        <a href="#" className="flex items-center gap-2 py-2 ">
                            <User size={18} />
                            Sign In
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;