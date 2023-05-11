import WooCommerceRestApi from "woocommerce-rest-ts-api";

const api = new WooCommerceRestApi({
  url: "http://localhost:8081",
  consumerKey: "ck_70e28623ff528e94ac36d1acae188aa456d5432d",
  consumerSecret: "cs_6e4a740a25b094c43e50664eadec5cc2f9594851",
  version: "wc/v3",
  queryStringAuth: false // Force Basic Authentication as query string true and using under HTTPS
});

export async function getProducts({ perPage = 20 }: { perPage: number }) {
  const products = await api.get('products', {
    per_page: perPage,
  });

  console.log("Total of pages:", products.headers['x-wp-totalpages']);
  console.log("Total of items:", products.headers['x-wp-total']);

  return products.data;
}