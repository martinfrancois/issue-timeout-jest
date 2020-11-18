describe('Timeout', () => {
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  it('should not timeout', async () => {
    jest.setTimeout(30000);
    await sleep(10000);
  });
});
