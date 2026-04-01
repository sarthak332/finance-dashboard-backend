import Record from "../models/record.model.js";

export const getSummary = async (req, res) => {
  try {
    const userId = req.user._id;

    const data = await Record.aggregate([
      {
        $match: { createdBy: userId },
      },
      {
        $group: {
          _id: "$type",
          total: { $sum: "$amount" },
        },
      },
    ]);

    let income = 0;
    let expense = 0;

    data.forEach((item) => {
      if (item._id === "income") income = item.total;
      if (item._id === "expense") expense = item.total;
    });

    res.json({
      totalIncome: income,
      totalExpense: expense,
      netBalance: income - expense,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getCategoryBreakdown = async (req, res) => {
  try {
    const userId = req.user._id;

    const data = await Record.aggregate([
      {
        $match: { createdBy: userId },
      },
      {
        $group: {
          _id: "$category",
          total: { $sum: "$amount" },
        },
      },
      {
        $sort: { total: -1 },
      },
    ]);

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getRecentActivity = async (req, res) => {
  try {
    const records = await Record.find({
      createdBy: req.user._id,
    })
      .sort({ createdAt: -1 })
      .limit(5);

    res.json(records);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getMonthlyTrends = async (req, res) => {
  try {
    const userId = req.user._id;

    const data = await Record.aggregate([
      {
        $match: { createdBy: userId },
      },
      {
        $group: {
          _id: {
            month: { $month: "$date" },
            year: { $year: "$date" },
          },
          total: { $sum: "$amount" },
        },
      },
      {
        $sort: { "_id.year": 1, "_id.month": 1 },
      },
    ]);

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};