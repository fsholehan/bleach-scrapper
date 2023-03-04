exports.populerAnimes = async (req, res) => {
  try {
    const popularAnime = await User.aggregate([
      {
        $unwind: "$anime"
      },
      {
        $group: {
          _id: "$anime.slug",
          count: { $sum: "$anime.count" }
        }
      },
      {
        $sort: { count: -1 }
      },
      {
        $limit: 6
      }
    ]);
    res.json(popularAnime);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
