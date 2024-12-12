import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// Définir l'URL de l'API
const PRODUCTS_API_URL = 'https://dummyjson.com/products';

export const fetchProducts = async () => {
  const { data } = await axios.get(PRODUCTS_API_URL);
  return data.products;  // Retourne les produits
};

 Hook personnalisé pour récupérer les produits
export const useProducts = () => {
  return useQuery(['products'], fetchProducts);
};
