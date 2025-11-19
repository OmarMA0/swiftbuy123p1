import { ref } from 'vue';

export const products = ref([]);
export const isloading = ref(true);
export const error = ref(null);
export const featured_products = ref([])
export const category = ref([])

export async function fetchProducts() {
  // Check localStorage first
  const cached = localStorage.getItem('products');
  
  if (cached) {
    products.value = JSON.parse(cached);
    isloading.value = false;
    console.log('Using cached products');
    return;
  }
  
  // Fetch from API
  try {
    isloading.value = true;
    const res = await fetch('https://fakestoreapi.com/products');
    if (!res.ok) throw Error('Network Error');
    
    products.value = await res.json();
    
    // Cache in localStorage
    localStorage.setItem('products', JSON.stringify(products.value));
    
  } catch (err) {
    error.value = err.message;
  } finally {
    isloading.value = false;
  }
}
export function calculate_featured(){
    featured_products.value = [...products.value].sort((b,a)=>a.rating.rate - b.rating.rate ).slice(0,3)


}
export function get_categories() {
  console.log(products.value)

  for (const product of products.value) {
    if (!category.value.includes(product.category)) {
      category.value.push(product.category)
    }
  }
}