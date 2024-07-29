import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { appDeclarations, appBootstrap, appProviders } from './config/declarations';
import { appImportModules } from './config/import-modules';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxScannerQrcodeModule} from 'ngx-scanner-qrcode';
import { AmountSeparatorPipe } from './pipes/amount-separator.pipe';



@NgModule({
  declarations: [...appDeclarations, AmountSeparatorPipe],
  imports: [...appImportModules, Ng2SearchPipeModule, NgxScannerQrcodeModule,],
  providers: [...appProviders],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [...appBootstrap]
})
export class AppModule { }
