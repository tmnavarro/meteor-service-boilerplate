export function AccountResolver(AccountRepository, id) {

  return AccountRepository.findUser(id);

}
