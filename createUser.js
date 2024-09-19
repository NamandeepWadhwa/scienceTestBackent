const prisma=require('./prismaInstance');

module.exports = async (req, res) => {
  const { name, email } = req.body;
  try {
    const user = await prisma.user.create({
      data: {
        email,
      },
    });
    res.json(user);
  } catch (error) {
    res.json({ error: error.message });
  }
};