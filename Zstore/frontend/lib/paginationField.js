import { PAGINIATION_QUERY } from '../components/Pagination';

export default function paginationField() {
  // Run when Apollo tries to query all products
  return {
    keyArgs: false, // This tells Apollo we will take care of everything

    read(existing = [], { args, cache }) {
      console.log({ existing, args, cache });

      const { skip, first } = args;

      // Read teh number of items from on the page from the cache
      const data = cache.readQuery({ query: PAGINIATION_QUERY });
      const count = data?._allProductsMeta?.count;
      const currentPage = skip / first + 1;
      const totalPages = Math.ceil(count / first);

      // check if we have existing items
      const items = existing.slice(skip, skip + first).filter((item) => item);

      if (
        items.length &&
        items.length !== first &&
        currentPage === totalPages
      ) {
        return items;
      }

      if (items.length !== first) {
        // This means that we don't have any items so we need to go to the network and fetch them
        return false;
      }

      // If there are items, just return them from the cache, and we don't need to go to the network
      if (items.length) {
        console.log(`There are${items.length} items in the caceh!`);
        return items;
      }
      return false; // fallback to network just in case if either of those if statements don't work
    },
    merge(existing, incomingNewItems, { args }) {
      const { skip, first } = args;

      // This runs when the Apollo client comes back from the network with the products
      const merged = existing ? existing.slice(0) : [];
      //
      for (let i = skip; i < skip + incomingNewItems.length; ++i) {
        merged[i] = incomingNewItems[i - skip];
      }
      return merged;
    },
  };
}
