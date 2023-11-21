const ids = Array(30).fill(1)

export const categeories = [
    {
        name: 'Web Development',
        slug: `web-development`,
        image: 'https://www.openstudycollege.com/osc/uploads/2023/02/online-courses-hero.gif',
    },
    {
        name: 'Mobile Development',
        slug: `mobile-development`,
        image: 'https://www.openstudycollege.com/osc/uploads/2023/02/online-courses-hero.gif',
    },
    {
        name: 'Data Science',
        slug: `data-science`,
        image: 'https://www.openstudycollege.com/osc/uploads/2023/02/online-courses-hero.gif',
    },
    {
        name: 'Programming Languages',
        slug: `programming-languages`,
        image: 'https://www.openstudycollege.com/osc/uploads/2023/02/online-courses-hero.gif',
    },
    {
        name: 'Game Development',
        slug: `game-development`,
        image: 'https://www.openstudycollege.com/osc/uploads/2023/02/online-courses-hero.gif',
    },
]

export const coursesList = ids.map((id, index) => ({
    id: (id + index).toString(),
    title: `Course ${id}`,
    category: categeories[Math.floor(Math.random() * categeories.length)],
    price: 100,
    quantity: 1,
    total: 100,
    image: 'https://www.openstudycollege.com/osc/uploads/2023/02/online-courses-hero.gif',
    description: `Description ${id}`,
    discountText: '',
    coupon: '',
}))
