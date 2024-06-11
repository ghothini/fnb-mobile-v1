// _neu_generated_code__dont_modify_directly_
//append_imports_start

import * as sd_O7BgeFkazhosv8N2 from 'app/sd-services/common'; //_splitter_
import { Injectable } from '@angular/core'; //_splitter_
//append_imports_end
@Injectable({ providedIn: 'root' })
export class NeuServiceInvokerService {
  constructor(private sd_O7BgeFkazhosv8N2: sd_O7BgeFkazhosv8N2.common) {}
  invoke(
    injectedServiceId: string,
    methodName: string,
    ...methodArguments: any[]
  ) {
    return this[injectedServiceId][methodName](...methodArguments);
  }
}
