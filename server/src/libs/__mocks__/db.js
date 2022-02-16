module.exports = {
  getInstance: () => ({
    define: jest.fn(),
    transaction: () => ({
      commit: jest.fn(),
      rollback: jest.fn(),
    }),
  }),
  connect: jest.fn(),
};
