import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";



class UserService {
  async create(email: string) {
    const usersRepository = getCustomRepository(UsersRepository);

    //VERIFICAR SE O USUARIO EXISTE
    const userExists = await usersRepository.findOne({
      email
    });

    //se não existir, salvar no DB
    if(userExists){
      return userExists;
    }

    //Se exsitir, retronar user
    const user = usersRepository.create({
      email
    });
    await usersRepository.save(user);
    return user;
    
  }

}

export { UserService};