// Permission numbers map to read/write access levels.
//  - 660: User must be logged to write or read the resource.
//  - 444: No one can write the resource. Everyone can read the resource.

export const rules: Record<string, number> = {
	products: 444,
	featured_products: 444,
	orders: 660,
	users: 660,
};
