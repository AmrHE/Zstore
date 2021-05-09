import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next/head';
import styled from 'styled-components';
import DisplayError from './ErrorMessage';

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      name
      price
      description
      id
      photo {
        altText
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

const SingleProduct = ({ id }) => {
  const { data, loading, error } = useQuery(SINGLE_ITEM_QUERY, {
    variables: {
      id,
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;

  console.log({ data, loading, error });

  return (
    <ProductStyles>
      <Head>
        <title>ZStore | {data.Product.name}</title>
      </Head>
      <img
        src={data.Product.photo.image.publicUrlTransformed}
        alt={data.Product.photo.altText}
      />
      <div className="details">
        <h2>{data.Product.name}</h2>
        <p>{data.Product.description}</p>
      </div>
    </ProductStyles>
  );
};

export default SingleProduct;

const ProductStyles = styled.div`
  /* background: red;  */
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  max-width: var(--maxWidth);
  justify-content: center;
  align-items: top;
  gap: 2rem;
  img {
    width: 100%;
    object-fit: contain;
  }
`;
