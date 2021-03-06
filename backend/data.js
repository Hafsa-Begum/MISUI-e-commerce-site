import bcrypt from "bcryptjs";

const data = {
    users: [
        {
            name: 'Hafsa',
            age: '26',
            gender: 'Female',
            phone: '1942448775',
            email: 'admin@admin.com',
            password: bcrypt.hashSync('123456', 8),
            isAdmin: true
        },
        {
            name: 'John',
            age: '30',
            gender: 'Male',
            phone: '9193847588',
            email: 'john@123.com',
            password: bcrypt.hashSync('123456', 8),
            isAdmin: false
        }
    ],
    products: [
        {
            name: 'Nike Slim Shirt',
            category: 'Shirts',
            image: '/images/p1.jpg',
            price: 120,
            brand: 'Nike',
            countInStock: 10,
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            name: 'Adidas Fit Shirt',
            category: 'Shirts',
            image: '/images/p2.jpg',
            price: 100,
            brand: 'Adidas',
            countInStock: 20,
            rating: 4.0,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            name: 'Lacoste Free Shirt',
            category: 'Shirts',
            image: '/images/p3.jpg',
            price: 220,
            brand: 'Lacoste',
            countInStock: 0,
            rating: 4.8,
            numReviews: 17,
            description: 'high quality product',
        },
        {
            name: 'Nike Slim Pant',
            category: 'Pants',
            image: '/images/p4.jpg',
            price: 78,
            brand: 'Nike',
            countInStock: 6,
            rating: 4.5,
            numReviews: 14,
            description: 'high quality product',
        },
        {
            name: 'Puma Slim Pant',
            category: 'Pants',
            image: '/images/p5.jpg',
            price: 65,
            brand: 'Puma',
            countInStock: 13,
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            name: 'Adidas Fit Pant',
            category: 'Pants',
            image: '/images/p6.jpg',
            price: 139,
            brand: 'Adidas',
            countInStock: 25,
            rating: 4.5,
            numReviews: 15,
            description: 'high quality product',
        },
    ],
};
export default data;