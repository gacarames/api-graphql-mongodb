export default {
  Query: {
    allProducts: async (parent, args, { models }) => models.Product.find(),
    getProduct: async (parent, args, { models }) =>
      models.Product.findById(args),
  },
  Mutation: {
    createProduct: async (parent, args, { models, user }) =>
      models.Product.create(Object.assign(args.product, { by: user })),
  },
};
