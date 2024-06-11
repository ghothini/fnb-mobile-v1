// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { common } from 'app/sd-services/common'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-id_documents',
  templateUrl: './id_documents.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class id_documentsComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: NeuServiceInvokerService
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_8HAnKWmL390dCSBr(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_8HAnKWmL390dCSBr(bh) {
    try {
      bh = this.sd_iK1BVDdlr1pslLxJ(bh);
      //appendnew_next_sd_8HAnKWmL390dCSBr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8HAnKWmL390dCSBr');
    }
  }

  goBack(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_AerN6PFNNeJ3HHvM(bh);
      //appendnew_next_goBack
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mm29zJYjsirD8AGn');
    }
  }
  //appendnew_flow_id_documentsComponent_start

  sd_iK1BVDdlr1pslLxJ(bh) {
    try {
      //appendnew_next_sd_iK1BVDdlr1pslLxJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iK1BVDdlr1pslLxJ');
    }
  }

  async sd_AerN6PFNNeJ3HHvM(bh) {
    try {
      const commonInstance: common = this.__page_injector__.get(common);

      let outputVariables = await commonInstance.goBack();

      //appendnew_next_sd_AerN6PFNNeJ3HHvM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AerN6PFNNeJ3HHvM');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  // error_handler_slot
  private errorHandler(bh, e, src): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    throw e;
  }
  //appendnew_flow_id_documentsComponent_Catch
}
