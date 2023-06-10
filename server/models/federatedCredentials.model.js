const { Schema, model } = require('mongoose');

const federatedCredentialSchema = new Schema({
  provider: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
});

const federated_credentials = model(
  'FederatedCredential',
  federatedCredentialSchema
);

module.exports = federated_credentials;
