const { v4: uuidv4 } = require("uuid");
const countries = require("../data/countries.json");
const vaults = require("../data/vaults.json");

exports.simulate = (sender, receiver, amount) => {
  const senderRules = countries[sender];
  const receiverRules = countries[receiver];

  const goldRate = 70; // USD per gram
  const grams = amount / goldRate;

  const matchedVault = vaults.find(v => v.countries.includes(sender) && v.countries.includes(receiver));

  const result = {
    transaction_id: uuidv4(),
    sender_country: sender,
    receiver_country: receiver,
    amount,
    gold_equivalent: `${grams.toFixed(2)} g`,
    tcs_applicable: senderRules.tcs_threshold < amount,
    vault_used: matchedVault ? matchedVault.name : "No shared vault found",
    compliant: matchedVault && !senderRules.fx_required && !receiverRules.fx_required,
    notes: "Simulation only. No real remittance executed."
  };

  return result;
};