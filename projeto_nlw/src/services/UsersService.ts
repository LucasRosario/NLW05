import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";



class UsersService {
  
  private usersRepository: Repository<User>

  constructor(){
    this.usersRepository = getCustomRepository(UsersRepository);
  }

  async create(email: string) {

    //VERIFICAR SE O USUARIO EXISTE
    const userExists = await this.usersRepository.findOne({
      email
    });

    //se não existir, salvar no DB
    if(userExists){
      return userExists;
    }

    //Se exsitir, retronar user
    const user = this.usersRepository.create({
      email
    });
    await this.usersRepository.save(user);
    return user;
    
  }

  async findByEmail(email: string) {
    const user = await this.usersRepository.findOne({ email });
  
    return user;
  }
}

export { UsersService};