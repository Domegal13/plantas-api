// Validar Schema

export const validateSchema = (schema) => {
  return async (req, res, next) => {
    try {
      await schema.validateAsync(req.body);
      next();
    } catch (error) {
      res.send({ message: error.message });
    }
  };
};
