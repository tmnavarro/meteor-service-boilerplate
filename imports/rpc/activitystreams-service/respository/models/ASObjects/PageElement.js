export function PageElementFactory(ASObject) {

  return ASObject.inherit({

    name: 'AS.Object.PageObject',

    fields: {

      name: String,

      className: String,

    }

  });

}
