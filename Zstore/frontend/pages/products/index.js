import { useRouter } from 'next/dist/client/router';
import Products from '../../components/Products';
import Pagination from '../../components/Pagination.js';

const ProductsPage = () => {
  const { query } = useRouter();
  // console.log({ router });
  const page = parseInt(query.page);
  return (
    <div>
      <Pagination page={page || 1} />
      <Products page={page || 1} />
      <Pagination page={page || 1} />
    </div>
  );
};

export default ProductsPage;
