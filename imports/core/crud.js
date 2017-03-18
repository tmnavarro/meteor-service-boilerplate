

export const CrudFactory = (CRUD) => {

  const Crud = new CRUD();

  Crud.addInterface(new CRUD.Interfaces.Publication());
  Crud.addInterface(new CRUD.Interfaces.Method());
  Crud.addInterface(new CRUD.Interfaces.HTTP());

  return Crud;

}
