import {
  Component,
  Inject,
  OnInit,
  Optional,
} from '@angular/core';
import {
  ConfigOptionsService,
  ConstantsService,
  GeneratedString,
  GeneratorService,
  GeneratorFactory,
  LocalStorageKeys,
  LocalStorageService,
  STORAGE,
  сonstantsInstance,
} from 'src/app/services/';
import { ConfigModel } from 'src/app/models';

const initConfigOptions: ConfigModel = {
  login: 'kuzaukou',
  name: 'Aliaksandr',
  email: 'Aliaksandr_Kuzaukou@epam.com',
};

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
  providers: [
    { provide: ConstantsService, useValue: сonstantsInstance },
    {
      provide: GeneratedString,
      useFactory: GeneratorFactory(10),
      deps: [GeneratorService],
    },
    { provide: STORAGE, useClass: LocalStorageService },
  ],
})
export class FirstComponent implements OnInit {
  name = 'Guest';
  id: number | null;

  constructor(
    @Optional() private generatorService: GeneratorService,
    @Optional() private configOptionsService: ConfigOptionsService,
    @Optional() private constantsService: ConstantsService,
    @Inject(GeneratedString) private generatedString: string,
    @Inject(STORAGE) private localStorage: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.id = this.configOptionsService.setConfigOptions(initConfigOptions);
    this.name = this.configOptionsService.getConfigOptionsById(this.id).name;
    console.log(
      'GeneratorService.generate(5):',
      this.generatorService.generate(5)
    );
    console.log('GeneratedString(10):', this.generatedString);
    console.log('ConstantsService:', this.constantsService.getAllData());
    this.localStorage.set(LocalStorageKeys.name, initConfigOptions.name);
    console.log(
      'localStorage Name:',
      this.localStorage.get(LocalStorageKeys.name)
    );
  }
}
