import Head from 'next/head';
import Link from 'next/link';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import PaginationStyles from './styles/PaginationStyles';
import DisplayError from './ErrorMessage';
import { perPage } from '../config';

const PAGINIATION_QUERY = gql`
  query PAGINIATION_QUERY {
    _allProductsMeta {
      count
    }
  }
`;

const Pagination = ({ page }) => {
  console.log('');
  const { error, loading, data } = useQuery(PAGINIATION_QUERY);
  if (loading) return 'Loading...';
  if (error) return <DisplayError error={error} />;

  const Itemcount = data._allProductsMeta.count;
  const pageCount = Math.ceil(Itemcount / perPage);

  return (
    <PaginationStyles>
      <Head>
        <title>
          ZStore - Page {page} of {pageCount}
        </title>
      </Head>
      <Link href={`/products/${page - 1}`}>
        <a aria-disabled={page <= 1}>&#8592; Perv</a>
      </Link>
      <p>
        Page {page} of {pageCount}
      </p>
      <p>{Itemcount} Items Total</p>
      <Link href={`/products/${page + 1}`}>
        <a aria-disabled={page === pageCount}>&#8594; Next</a>
      </Link>
    </PaginationStyles>
  );
};

// 1.We need a link to the previous page
// 2. We need a link to the next page
// 3. We need to know how many total pages there are
// 4. we need to know the current page we are on

export default Pagination;
