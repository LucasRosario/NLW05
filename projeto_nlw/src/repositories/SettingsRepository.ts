import { EntityRepository, Repository } from "typeorm";

import { Setting } from "../entities/Setings"

@EntityRepository(Setting)
class SettingsRepository extends Repository<Setting> {

}


export { SettingsRepository}