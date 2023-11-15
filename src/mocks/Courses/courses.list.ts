const ids = Array.prototype.fill(1, 30)

const categeories = [
    { name: 'Web Development', slug:`web-development` },
    { name: 'Mobile Development', slug:`mobile-development` },
    { name: 'Data Science', slug:`data-science` },
    { name: 'Programming Languages', slug:`programming-languages` },
    { name: 'Game Development', slug:`game-development` },
]

export const coursesList = ids.map((id) => ({
    id: id.toString(),
    name: `Course ${id}`,
    category: categeories[Math.floor(Math.random() * categeories.length)],
    price: 100,
    quantity: 1,
    total: 100,
    image: 'https://www.openstudycollege.com/osc/uploads/2023/02/online-courses-hero.gif',
    description: `Description ${id}`,
    discountText: '',
    coupon: '',
}))
