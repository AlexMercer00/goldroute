const { simulate } = require("../utils/logic");

exports.simulateRemittance = (req, res) => {
  const { sender, receiver, amount } = req.body;

  if (!sender || !receiver || !amount) {
    return res.status(400).json({ error: "Missing parameters." });
  }

  const result = simulate(sender, receiver, amount);
  return res.status(200).json(result);
};