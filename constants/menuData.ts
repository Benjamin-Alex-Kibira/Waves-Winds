export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: 'Main_Course' | 'Signature_Dishes' | 'Salads' | 'Appetizers' | 'Sides' | 'Desserts';
  image: string;
}

export const menuData: MenuItem[] = [
  // Main Course
  { id: 1, name: 'Grilled Fish Fillet', description: 'Fresh fillet seasoned and grilled to perfection.', price: 18.50, category: 'Main_Course', image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { id: 2, name: 'Salmon', description: 'Pan-seared salmon with a crispy skin.', price: 22.00, category: 'Main_Course', image: 'https://images.pexels.com/photos/7627414/pexels-photo-7627414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { id: 3, name: 'Oven Baked Tilapia', description: 'Tilapia baked with herbs and lemon.', price: 17.00, category: 'Main_Course', image: 'https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { id: 4, name: 'Beef Skewers', description: 'Tender beef cubes grilled on a skewer.', price: 15.00, category: 'Main_Course', image: 'https://images.pexels.com/photos/2092916/pexels-photo-2092916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  
  // Signature Dishes
  { id: 10, name: '"Waves & Winds" Platter', description: 'A grand platter of grilled fish, beef, and pork skewers.', price: 35.00, category: 'Signature_Dishes', image: 'https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { id: 11, name: '"Tidal Wave" Burger', description: 'Beef burger with grilled pork and salmon.', price: 19.50, category: 'Signature_Dishes', image: 'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { id: 12, name: '"Sea Breeze" Salad', description: 'Mixed greens with grilled chicken and seafood.', price: 16.00, category: 'Signature_Dishes', image: 'https://images.pexels.com/photos/1059942/pexels-photo-1059942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  
  // Salads
  { id: 20, name: 'Caesar Salad', description: 'Romaine lettuce with Caesar dressing, croutons, and parmesan.', price: 12.00, category: 'Salads', image: 'https://images.pexels.com/photos/406152/pexels-photo-406152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { id: 21, name: 'Greek Salad', description: 'Tomatoes, cucumbers, feta cheese, and olives.', price: 13.50, category: 'Salads', image: 'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  
  // Appetizers
  { id: 30, name: 'Grilled Pork Skewers', description: 'Juicy pork skewers, grilled to perfection.', price: 9.00, category: 'Appetizers', image: 'https://images.pexels.com/photos/2763321/pexels-photo-2763321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { id: 31, name: 'Onion Rings', description: 'Crispy, golden-fried onion rings.', price: 7.50, category: 'Appetizers', image: 'https://images.pexels.com/photos/3590401/pexels-photo-3590401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  
  // Sides
  { id: 40, name: 'Sweet Potato Fries', description: 'A sweet and savory delight.', price: 6.00, category: 'Sides', image: 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { id: 41, name: 'Mashed Potatoes', description: 'Creamy and buttery mashed potatoes.', price: 5.00, category: 'Sides', image: 'https://images.pexels.com/photos/5647572/pexels-photo-5647572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  
  // Desserts
  { id: 50, name: 'Cheesecake', description: 'Rich and creamy New York style cheesecake.', price: 8.00, category: 'Desserts', image: 'https://images.pexels.com/photos/264727/pexels-photo-264727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { id: 51, name: 'Fruit Platter', description: 'A refreshing selection of seasonal fruits.', price: 9.50, category: 'Desserts', image: 'https://images.pexels.com/photos/5945842/pexels-photo-5945842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
];
