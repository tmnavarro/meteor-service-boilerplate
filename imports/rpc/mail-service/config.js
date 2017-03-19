import { AccountResolver } from './resolvers';

export const Config = {

  api: {
    key: '123-123-123-123',
  },

  templates: {

    request: {
      id: '123-123-123-123',
      substitutions: {
        actor: AccountResolver,
        recipient: AccountResolver,
        sections_list: String
      }
    }

  }

}
