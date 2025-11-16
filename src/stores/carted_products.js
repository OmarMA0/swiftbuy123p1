import { ref } from 'vue'

export const carted_products = ref([])

export function add_product(product){
    if (carted_products.value.find(p=>p.id === product.id)) {       //check if that product is already carted
        increase_B_amount(product.id)                                     //increase the amount being bought of that product
        return
    }
    carted_products.value.push({
        ...product,
        amount : 1
    })
}
export function remove_product(id){
    carted_products.value = carted_products.value.filter(p=>p.id !== id)
}

export function increase_B_amount(id) {   //increases the buying amount
    const modified_product = carted_products.value.find(p =>p.id === id) 
    if (modified_product){
    modified_product.amount++
    }
}
export function decrease_B_amount(id) {   // decreases the buying amount
    const modified_product = carted_products.value.find(p =>p.id === id) 
    if (modified_product.amount>0 && modified_product) {
    modified_product.amount--
    }
}
export function get_carted_product(id){
    const product = carted_products.value.find(p=>p.id === id)
    return product
}
export function is_in_carted_products(id){
    if (carted_products.value.find(p=>p.id === id)) {
        return true
    }
    else {
        return false
    }
}