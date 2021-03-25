import { Sex } from '../models/enums/sex-enum';

export interface ConfigModel {
    readonly id?: number;
    readonly login: string;
    readonly email: string;
    readonly phoneNumber?: number;
    readonly name?: string;
    readonly sex?: Sex;
    readonly birthdate?: Date;
  }
