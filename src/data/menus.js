import { WORDPRESS_GRAPHQL_PROVIDER_WPGRAPHQL, WORDPRESS_GRAPHQL_PROVIDER_GATOGRAPHQL } from './providers/providers';

import { QUERY_ALL_MENUS as WPGRAPHQL_QUERY_ALL_MENUS } from './providers/wpgraphql/menus';

import { QUERY_ALL_MENUS as GATOGRAPHQL_QUERY_ALL_MENUS } from './providers/gatographql/menus';

const { WORDPRESS_GRAPHQL_PROVIDER } = process.env;

module.exports = {
  ...(WORDPRESS_GRAPHQL_PROVIDER === WORDPRESS_GRAPHQL_PROVIDER_WPGRAPHQL
    ? {
        QUERY_ALL_MENUS: WPGRAPHQL_QUERY_ALL_MENUS,
      }
    : {}),
  ...(WORDPRESS_GRAPHQL_PROVIDER === WORDPRESS_GRAPHQL_PROVIDER_GATOGRAPHQL
    ? {
        QUERY_ALL_MENUS: GATOGRAPHQL_QUERY_ALL_MENUS,
      }
    : {}),
};
