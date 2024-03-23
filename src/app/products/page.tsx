import Image from "next/image";
import Link from "next/link";

export default async function ProductsPage() {
  const data = [
  {
    id: 1,
    title: "Capuccino Coffe",
    image: "/images/products/1.png",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tag: ["", ""],
  },
  {
    id: 2,
    title: "Cinnamon Coffe",
    image: "/images/products/2.png",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    title: "Strawberry Mojito",
    image: "https://media.istockphoto.com/id/1157873069/photo/fresh-lemonade-with-ice-mint-and-strawberry-on-top-in-glass-on-black-table-background-copy.webp?b=1&s=170667a&w=0&k=20&c=IL8kIYPVt0-3O702yJwJaSNH3Kjrm3RGRzj9Yq2KUPw=",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 4,
    title: "Americano",
    image: "https://media.istockphoto.com/id/1359781504/photo/sweet-coffee-aroma-coffee-beans-and-morning-coffee.webp?b=1&s=170667a&w=0&k=20&c=gsb3a2YXO6cqViIbEAGVevgHnhAa9epopoS9WR_STOc=",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 5,
    title: "Mojito",
    image: "https://media.istockphoto.com/id/1164929603/photo/fresh-mojito-cocktail-with-lime-and-mint-in-glass-on-concrete-background-cold-refreshing-drink.webp?b=1&s=170667a&w=0&k=20&c=uXBSg2DIc_GGiUSwoLzEtXgQEka7HdnEBlRjcOdI_Lw=",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 6,
    title: "Cold Brew",
    image: "https://media.istockphoto.com/id/1209718260/photo/cold-brew-coffee-with-milk-and-ice-cubes-in-glass.webp?b=1&s=170667a&w=0&k=20&c=29_tq_7fMxyuUfZWtQimejkq513xgDe-8PDy9lrx5CM=",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 7,
    title: "Affogato",
    image: "https://media.istockphoto.com/id/476824782/photo/coffee-latte.webp?b=1&s=170667a&w=0&k=20&c=uPNvWOLa2nYAAQJbxoSZiRxNWuBxBV7mYU3TY5IKdB4=",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 8,
    title: "Lemon Mojito",
    image: "https://media.istockphoto.com/id/587953028/photo/homemade-boozy-bourbon-whiskey-smash.webp?b=1&s=170667a&w=0&k=20&c=QfP3fpkWLFCfQ3cpgVhU4KXjRUmzrpA_586CUQ9fCBw=",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="flex flex-wrap gap-4 justify-center content-center py-3 w-full">
        {data.length > 0 &&
          data.map((product: any) => (
            <Link
              key={product.id}
              href={`/products/detail/${product.id}`}
              className="max-w-sm rounded overflow-hidden shadow-lg"
            >
              <Image
                className="object-cover h-auto w-full"
                src={product.image}
                alt="products image"
                width={500}
                height={500}
                loading="lazy"
              />
              <div className="px-2 pb-2 rounded-lg">
                <h5 className="text-lg tracking-tight text-dark dark:text-white truncate text-center">
                  {product.title}
                </h5>

                <button
                  type="button"
                  className="inline-flex items-center mt-2 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </button>
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
}
