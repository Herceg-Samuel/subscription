export const createSubscription = async (req, res, next) => {
  try {
    const subscription = await subscription.create;
  } catch (error) {
    next(error);
  }
};
