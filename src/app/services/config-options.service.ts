import { Injectable } from '@angular/core';
import { ConfigModel } from '../models/config-model'

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {
  private configOptions: Map<number, ConfigModel> = new Map();
  getConfigOptionsById(id: number): ConfigModel | null {
    return this.configOptions.get(id) || null;
  }

  setConfigOptions(options: ConfigModel): number {
    const config = this.createConfigOptions(options);
    this.configOptions.set(config.id, config);
    return config.id;
  }

  private createConfigOptions(options: ConfigModel): ConfigModel {
    if (!this.configOptions.has(options.id)) {
      const id: number = Date.now();
      return {...options, id};
    }
    return {
      ...this.getConfigOptionsById(options.id),
      ...options
    };
  }
}
