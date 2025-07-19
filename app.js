const express = require("express");
const app = express();
const remittanceRoutes = require("./routes/remittance");

app.use(express.json());
app.use("/api/remit", remittanceRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`GoldRoute API running on port ${PORT}`));