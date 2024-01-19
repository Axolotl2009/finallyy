var quantity = 0;

function addToCart() {
    quantity += 1; // Increment by 1
    document.getElementById("quantity").innerHTML = quantity;
}

function removeFromCart() {
    if (quantity > 0) {
        quantity -= 1; // Decrement by 1
        document.getElementById("quantity").innerHTML = quantity;
    }
}
const products = [
    {
        id: 1,
        name: "Product 1",
        price: 20,
        image: "product1.jpg"
    },
    {
        id: 2,
        name: "Product 2",
        price: 30,
        image: "product2.jpg"
    },
    // Add more products as needed
];

// Function to render product cards
function renderProducts() {
    const productsContainer = document.getElementById('products');

    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');

        const image = document.createElement('img');
        image.src = product.image;
        image.alt = product.name;

        const name = document.createElement('h2');
        name.textContent = product.name;

        const price = document.createElement('p');
        price.textContent = `$${product.price.toFixed(2)}`;

        const buyButton = document.createElement('button');
        buyButton.classList.add('button');
        buyButton.textContent = 'Add to Cart';

        // Add event listener to the button if you want to handle the purchase logic
        // buyButton.addEventListener('click', () => { /* Your logic here */ });

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(price);
        card.appendChild(buyButton);

        productsContainer.appendChild(card);
    });
}

function searchProduct() {
    var searchInput = document.getElementById("searchInput").value.toLowerCase();
    var products = document.getElementsByClassName("product");

    for (var i = 0; i < products.length; i++) {
        var productName = products[i].getElementsByTagName("h2")[0].innerText.toLowerCase();

        if (productName.includes(searchInput)) {
            products[i].style.display = "block";
        } else {
            products[i].style.display = "none";
        }
    }
}

function toggleButton(button) {
    // Toggle the "active" class on the button
    button.classList.toggle('active');

    // Toggle the text content based on the "active" class
    if (button.classList.contains('active')) {
        button.textContent = 'Remove';
    } else {
        button.textContent = 'Add';
    }
}
function filterByCategory() {
    // Add logic to filter products based on the selected category
    var selectedCategory = document.getElementById("categorySelect").value;
    // Implement your filtering logic or call a function to handle it
    // For now, let's log the selected category to the console
    console.log("Selected Category:", selectedCategory);
}
function addToCart(button) {
    // Add logic to handle adding to cart
    console.log("Product added to cart");
    // You can modify the quantity or update the UI as needed
}

function removeFromCart(button) {
    // Add logic to handle removing from cart
    console.log("Product removed from cart");
    // You can modify the quantity or update the UI as needed
}
function toggleButton(button) {
    // Toggle the button text between "Add to Cart" and "Remove from Cart"
    if (button.textContent === "Add to Cart") {
        button.textContent = "Remove from Cart";
        // Add logic for adding to cart here
        console.log("Product added to cart");
    } else {
        button.textContent = "Add to Cart";
        // Add logic for removing from cart here
        console.log("Product removed from cart");
    }
    // You can modify the quantity or update the UI as needed
    
}
         // Define a variable to store the shopping cart items
         const cartItems = [];

         function redirectToSignIn() {
             window.location.href = "file:///C:/Users/Huda%20Nagy/Desktop/New%20folder/SSS.html";
         }
         
         function addToCart(productName, price) {
             // Check if the product is already in the cart
             const existingItem = cartItems.find(item => item.name === productName);
         
             if (existingItem) {
                 // If the product is already in the cart, increase the quantity
                 existingItem.quantity++;
             } else {
                 // If the product is not in the cart, add it with a quantity of 1
                 cartItems.push({ name: productName, price: price, quantity: 1 });
             }
         
             // Update the cart display
             updateCartDisplay();
         }
         
         function removeFromCart(productName) {
             // Find the index of the product in the cart
             const index = cartItems.findIndex(item => item.name === productName);
         
             if (index !== -1) {
                 // Remove the product from the cart
                 cartItems.splice(index, 1);
             }
         
             // Update the cart display
             updateCartDisplay();
         }
         
         function updateCartDisplay() {
             // Get the cart items ul element
             const cartList = document.getElementById("cartItems");
         
             // Clear existing cart items
             cartList.innerHTML = "";
         
             // Initialize total price
             let totalPrice = 0;
         
             // Add each item to the cart list and calculate total price
             cartItems.forEach(item => {
                 const listItem = document.createElement("li");
                 listItem.innerHTML = `
                     <div class="cart-item">
                         <span class="cart-item-name">${item.name}</span>
                         <span class="cart-item-quantity">${item.quantity}x</span>
                         <span class="cart-item-price">$${item.price * item.quantity}</span>
                         <button class="remove-button" onclick="removeFromCart('${item.name}')">Remove</button>
                     </div>`;
                 cartList.appendChild(listItem);
         
                 // Update total price
                 totalPrice += item.price * item.quantity;
             });
         
             // Display total price
             const cartTotal = document.getElementById("cartTotal");
             cartTotal.textContent = `Total: $${totalPrice}`;
         }
         
         function toggleCart() {
             const cartList = document.getElementById("cartItems");
             cartList.classList.toggle("hidden");
         }
         function searchProduct() {
                     var searchTerm = document.getElementById("searchInput").value.toLowerCase();
                     var products = document.querySelectorAll(".product");
                     var searchResult = document.getElementById("searchResult");
         
                     // Clear previous search results
                     searchResult.innerHTML = "";
         
                     // Iterate through products to find matching ones
                     products.forEach(function(product) {
                         var productName = product.querySelector("h2").innerText.toLowerCase();
         
                         // Check if the product name contains the search term
                         if (productName.includes(searchTerm)) {
                             // Clone the matching product and append it to the search result
                             var clonedProduct = product.cloneNode(true);
                             searchResult.appendChild(clonedProduct);
                         }
                     });
                 }
                 function addItemToCart() {
                     // Get existing cart items from localStorage or initialize an empty array
                     const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
         
                     // Add a sample item to the cart
                     const newItem = `Product ${cartItems.length + 1}`;
                     cartItems.push(newItem);
         
                     // Update localStorage with the new cart items
                     localStorage.setItem('cartItems', JSON.stringify(cartItems));
         
                     // Update the cart link text on the index.html page
                     const cartLink = document.getElementById('cartLink');
                     cartLink.textContent = `🛒 Shopping Cart (${cartItems.length} items)`;
                 }
             
             // Add more products as needed
         ;
         
         
         function updateDropdown() {
             const searchInput = document.getElementById('searchInput');
             const searchDropdown = document.getElementById('searchDropdown');
         
             // Clear previous items
             searchDropdown.innerHTML = '';
         
             const searchTerm = searchInput.value.toLowerCase();
         
             // Filter products based on the search term
            
         
             // Display matching products in the dropdown
             filteredProducts.forEach(product => {
                 const dropdownItem = document.createElement('div');
                 dropdownItem.classList.add('search-dropdown-item');
                 dropdownItem.textContent = product;
         
                 // Set up a click event to fill the search input with the selected product
                 dropdownItem.addEventListener('click', () => {
                     searchInput.value = product;
                     searchDropdown.style.display = 'none';
                 });
         
                 searchDropdown.appendChild(dropdownItem);
             });
         
             // Show or hide the dropdown based on the number of matching products
             searchDropdown.style.display = filteredProducts.length > 0 ? 'block' : 'none';
         }
         
         function searchProduct() {
             const searchInput = document.getElementById('searchInput').value.toLowerCase(); // Ensure the search term is lowercase
             const filteredProducts = products.filter(product => product.toLowerCase().includes(searchInput));
         
             // Assuming products have a "title" property, you can filter based on that as well
             const filteredTitles = products.filter(product => product.title.toLowerCase().includes(searchInput));
         
             console.log('Filtered Products:', filteredProducts);
             console.log('Filtered Titles:', filteredTitles);
         
             // You can do something with the filtered products, for example, display them in the UI
         }
           // Retrieve the saved username from localStorage and display it
        var savedUsername = localStorage.getItem("savedUsername");
        document.getElementById("savedUsername").innerText = savedUsername;


