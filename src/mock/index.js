export const mockData = Array.from({ length: 30 }).map((_, index) => ({
    id: index + 1,
    name: `Shoes Name ${index + 1}`,
    discount: 40,
    currentPrice: 699,
    originalPrice: 1999,
    rating: 4.5,
    reviews: 88,
  }));