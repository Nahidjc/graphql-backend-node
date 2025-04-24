const NodeService = require('../services/nodeService');
const ActionService = require('../services/actionService');
const TriggerService = require('../services/triggerService');
const ResponseService = require('../services/responseService');
const ResourceTemplateService = require('../services/resourceTemplateService');

const resolvers = {
  Query: {
    node: async (parent, args) => {
      return await NodeService.getById(args.nodeId);
    },
  },
  NodeObject: {
    triggerId: async (parent) => {
      return parent.trigger;
    },

    trigger: async (parent) => {
      return await TriggerService.getById(parent.trigger);
    },

    actionIds: async (parent) => {
      return parent.postActions || null;
    },

    actions: async (parent) => {
      if (!parent.postActions) return [];
      const actions = await ActionService.getAll();
      return actions.filter(({ _id }) => parent.postActions.includes(_id));
    },

    responseIds: async (parent) => {
      return parent.responses;
    },

    responses: async (parent) => {
      if (!parent.responses) return [];
      const responses = await ResponseService.getAll();
      return responses.filter(({ _id }) => parent.responses.includes(_id));
    },

    parentIds: async (parent) => {
      return parent.parents;
    },

    parents: async (parent) => {
      if (!parent.parents) return null;
      const nodes = await NodeService.getAll();
      return nodes.filter(({ compositeId }) =>
        parent.parents.includes(compositeId)
      );
    },

    compositeId: async (parent) => {
      return parent.compositeId;
    },
  },

  Trigger: {
    resourceTemplate: async (parent) => {
      const template = await ResourceTemplateService.getById(parent.resourceTemplateId);
      if (template && !template.createdAt) {
        template.createdAt = String(Date.now());
      }
      return template;
    },
  },

  Action: {
    resourceTemplate: async (parent) => {
      const template = await ResourceTemplateService.getById(parent.resourceTemplateId);
      if (template && !template.createdAt) {
        template.createdAt = String(Date.now());
      }
      return template;
    },
  },
};

module.exports = resolvers;
