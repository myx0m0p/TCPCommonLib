module.exports = {
  Stats: {
    Dictionary: {
      ParamTypes: require('./dist/stats/dictionary/param-types-dictionary')
    }
  },
  Governance: {
    Dictionary: {
      BlockchainNodesTypes: require('./dist/governance/dictionary/blockchain-nodes-types-dictionary')
    }
  },
  Airdrop: {
    Dictionary: {
      AirdropStatuses: require('./dist/airdrop/dictionary/airdrop-statuses'),
      AirdropUserPersonalStatuses: require('./dist/airdrop/dictionary/airdrop-user-personal-statuses')
    }
  },
  Events: {
    Dictionary: {
      EventsIds: require('./dist/events/dictionary/events-ids-dictionary'), // deprecated, use a direct import
    }
  },
  Common: {
    Dictionary: {
      CommonHeaders: require('./dist/common/dictionary/common-headers'),
      EntityNames: require('./dist/common/dictionary/entity-names'), // deprecated, use a direct import
    },
  },
  InteractionTypesDictionary: require('./dist/common/dictionary/interaction-types-dictionary'),
  ContentTypesDictionary: require('./dist/common/dictionary/content-types-dictionary'),
  EntityNames: require('./dist/common/dictionary/entity-names'),
  EventsIdsDictionary: require('./dist/events/dictionary/events-ids-dictionary'),
  Posts: {
    Dictionary: {
      PostTypes: require('./dist/posts/dictionary/post-types'),
    },
    Validator: {
      PostFieldsValidator: require('./dist/posts/validator/post-fields-validator'),
    },
  },
};
