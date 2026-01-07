/* ---------------- CAKE DATA ---------------- */
const cakes = [
    {
        id: 1,
        name: "Chocolate Truffle",
        price: 899,
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587"
    },
    {
        id: 2,
        name: "Red Velvet",
        price: 999,
        image: "https://images.unsplash.com/photo-1542826438-bd32f43d626f"
    },
    {
        id: 3,
        name: "Strawberry Bliss",
        price: 799,
        image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62"
    },
    {
        id: 4,
        name: "Black Forest",
        price: 849,
        image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec"
    }
];

let cart = [];

/* ---------------- LOAD CAKES ---------------- */
const cakeGrid = document.getElementById("cakeGrid");

function loadCakes() {
    cakeGrid.innerHTML = "";
    cakes.forEach(cake => {
        cakeGrid.innerHTML += `
        <div class="cake-card">
            <img src="${cake.image}">
            <h3>${cake.name}</h3>
            <p>₹${cake.price}</p>
            <button onclick="addToCart(${cake.id})">Add to Cart</button>
        </div>
        `;
    });
}
loadCakes();

/* ---------------- ADD TO CART ---------------- */
function addToCart(id) {
    const cake = cakes.find(c => c.id === id);
    cart.push(cake);
    updateCart();
}

/* ---------------- UPDATE CART ---------------- */
function updateCart() {
    document.getElementById("cartCount").innerText = cart.length;

    const cartItems = document.getElementById("cartItems");
    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach(item => {
        total += item.price;
        cartItems.innerHTML += `
            <p>${item.name} - ₹${item.price}</p>
        `;
    });

    document.getElementById("totalPrice").innerText = total;
}

/* ---------------- CART MODAL ---------------- */
function toggleCart() {
    document.getElementById("cartModal").classList.toggle("active");
}

document.querySelector(".cart").addEventListener("click", toggleCart);

/* ---------------- PLACE ORDER ---------------- */
function placeOrder() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    alert("🎉 Order placed successfully!\nThank you for choosing Royal Crumbs.");
    cart = [];
    updateCart();
    toggleCart();
}

/* ---------------- SMOOTH SCROLL ---------------- */
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        document.querySelector(link.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

/* ---------------- SCROLL ANIMATION ---------------- */
window.addEventListener("scroll", () => {
    document.querySelectorAll(".cake-card").forEach(card => {
        const position = card.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) {
            card.classList.add("show");
        }
    });
});

/* ---------------- ACTIVE NAV LINK ---------------- */
window.addEventListener("scroll", () => {
    document.querySelectorAll("section").forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 100;
        let height = section.offsetHeight;
        let id = section.getAttribute("id");

        if (top >= offset && top < offset + height) {
            document.querySelectorAll("nav a").forEach(a => a.classList.remove("active"));
            document.querySelector(`nav a[href="#${id}"]`)?.classList.add("active");
        }
    });
});
/* -------- HEALTH QUOTES ROTATION -------- */
const healthQuotes = [
    "Where indulgence meets balance — crafted treats, mindful sweetness.",
    "Less guilt, more joy — premium cakes made with care.",
    "Celebrating health, happiness, and handcrafted sweetness.",
    "Pure ingredients. Thoughtful baking. Honest happiness.",
    "Because great taste should also feel good."
];

let quoteIndex = 0;
const quoteElement = document.getElementById("healthQuote");

function changeQuote() {
    quoteElement.style.opacity = 0;

    setTimeout(() => {
        quoteElement.textContent = healthQuotes[quoteIndex];
        quoteElement.style.opacity = 1;
        quoteIndex = (quoteIndex + 1) % healthQuotes.length;
    }, 500);
}

setInterval(changeQuote, 3000);
changeQuote();
