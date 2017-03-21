export function ASObjectFactory(AstroClass) {

  const ASObject = AstroClass.create({
    name: 'AS.Object',
    typeField: 'objectType',
  });

  return ASObject.extend({

    fields: {

      attachments:{
        type: [ ASObject ],
        optional: true,
      },

      displayName: {
        type: String,
        optional: true,
      },

      published: {
        type: Date,
        immutable: true,
        default: () => new Date,
      },

    },

  });

}
