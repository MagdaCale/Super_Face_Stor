import { Product } from "./types"

const searchInput = document.querySelector('input[type="text"]')!
const sortSelect = document.querySelector('select')!
const electronicsButton = document.querySelector('#electronics-button')!
const jewelleryButton = document.querySelector('#jewellery-button')!
const mensClothingButton = document.querySelector('#mens-clothing-button')!
const womensClothingButton = document.querySelector('#womens-clothing-button')!


const API: string = "https://fakestoreapi.com/products"


async function fetchProducts() {
  try {
    const response = await fetch(API)
    const products: Product[] = await response.json()

    searchInput.addEventListener('input', (event) => {
      const query = (event.target as HTMLInputElement).value.toLowerCase()
      const filteredProducts = products.filter(product => 
        product.title.toLowerCase().includes(query)
      )
      renderProducts(filteredProducts)
    })

    sortSelect.addEventListener('change', (event) => {
      const sortBy = (event.target as HTMLSelectElement).value
      if (sortBy === 'price') {
        products.sort((a, b) => a.price - b.price)
      } else if (sortBy === 'name') {
        products.sort((a, b) => a.title.localeCompare(b.title))
      }
      renderProducts(products)
    })

    electronicsButton.addEventListener('click', () => {
      const filteredProducts = products.filter(product => 
        product.category === 'electronics'
      )
      renderProducts(filteredProducts)
    })

    jewelleryButton.addEventListener('click', () => {
      const filteredProducts = products.filter(product => 
        product.category === 'jewelery'
      )
      renderProducts(filteredProducts)
    })

    mensClothingButton.addEventListener('click', () => {
      const filteredProducts = products.filter(product => 
        product.category === "men's clothing"
      )
      renderProducts(filteredProducts)
    })

    womensClothingButton.addEventListener('click', () => {
      const filteredProducts = products.filter(product => 
        product.category === "women's clothing"
      )
      renderProducts(filteredProducts)
    })

    renderProducts(products)

  } catch (error) {
    console.error(error)
  }
}


const productGrid = document.createElement('div')
productGrid.className = 'product-grid'
document.body.appendChild(productGrid)

function renderProducts(products: Product[]) {
  productGrid.innerHTML = products.map(product => `
    <div class="product-card">
      <div class="product-image-container">
        <img src="${product.image}" alt="${product.title}" class="product-image">
      </div>
      <div class="product-details">
        <p class="product-title">${product.title}</p>
        <div class="line"></div>
        <div class="add-to-cart-container">
          <p class="product-price">${product.price.toFixed(2)} $</p>
          <button class="add-to-cart" onclick="animateButton(event)">Add to cart</button>
        </div>
      </div>
    </div>
  `).join('')
}

fetchProducts()