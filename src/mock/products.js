import faker from 'faker'

const generateProductData = (number) => {
    const products = [];
    const colors = ['Kırmızı', 'Beyaz', 'Sarı', 'Yeşil', 'Lacivert', 'Siyah', 'Mavi'];
    const brands = ['Samsung', 'Vestel', 'Apple', 'Xiomi', 'LG', 'General Mobile', 'Huawei']
  

    while (number > 0) {
        const price = faker.commerce.price(500, 999);
        const random = Math.floor(Math.random() * 6) + 1;
        const productColors = [];

        for (let i = 0; i < random; i++) {
            const colorRandomCount = [Math.floor(Math.random() * 6) + 1];

            if(!productColors.includes(colors[colorRandomCount])) {
                productColors.push(colors[colorRandomCount]);
            }
        }

        products.push({
            id: number,
            name: faker.commerce.productName(),
            description: faker.commerce.productDescription(2),
            productMaterial:faker.commerce.productMaterial(),
            productAdjective: faker.commerce.productAdjective(),
            picture: "https://productimages.hepsiburada.net/s/42/550/10751193153586.jpg",
            smallImage: "https://productimages.hepsiburada.net/s/42/550/10751193153586.jpg",
            price: price,
            originalPrice: (Math.floor(price) + Math.floor(faker.commerce.price(100, 200))).toFixed(2),
            currency: 'TL',
            date: faker.date.recent(),
            colors: productColors,
            brand: brands[random]
        });
        number--;
    }

    return JSON.stringify(products);
}

export default generateProductData;