export function PersonFactory(ASObject) {

  return ASObject.inherit({

    name: 'AS.Object.Person',

    fields: {

      firstName: String,

      lastName: String,

      email: String,

    }

  });

}
