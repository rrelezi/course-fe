import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface CheckoutItem {
    id: string
    name: string
    price: number
    quantity: number
    total: number
    image: string
    description: string
    discountText: string
    coupon: string
}

export interface ICheckoutStore {
    items: CheckoutItem[]
    drawerVisible: boolean
    setDrawerVisible: (drawerVisible: boolean) => void
    addItem: (item: CheckoutItem) => void
    removeItem: (item: string) => void
    onQuantityChange: (itemId: string, quantity: number | null) => void
    clear: () => void
}

export const useCheckoutStore = create(
    persist(
        (set) => {
            return {
                items: [],
                addItem: (item: CheckoutItem) =>
                    set((state: ICheckoutStore) => {
                        const existingItem = state.items.filter(
                            (stateItem) => item.id === stateItem.id
                        )

                        if (existingItem.length > 0)
                            return {
                                items: state.items.map((item, index) => {
                                    if (
                                        index ===
                                        state.items.indexOf(existingItem[0])
                                    )
                                        return {
                                            ...item,
                                            quantity: item.quantity + 1,
                                            total: item.total + item.price,
                                        }
                                    return item
                                }),
                                drawerVisible: true,
                            }

                        return {
                            items: [...state.items, item],
                            drawerVisible: true,
                        }
                    }),
                removeItem: (itemId: string) =>
                    set((state: ICheckoutStore) => ({
                        items: state.items.filter((item) => item.id !== itemId),
                    })),
                onQuantityChange: (itemId: string, quantity: number) => {
                    set((state: ICheckoutStore) => ({
                        items: state.items.map((item) =>
                            item.id === itemId
                                ? {
                                      ...item,
                                      quantity,
                                      total: item.price * quantity,
                                  }
                                : item
                        ),
                    }))
                },
                setDrawerVisible: (drawerVisible: boolean) =>
                    set({ drawerVisible: drawerVisible }),
                clear: () => set(() => ({ items: [], drawerVisible: false })),
            }
        },
        { name: 'checkoutStore' }
    )
)
