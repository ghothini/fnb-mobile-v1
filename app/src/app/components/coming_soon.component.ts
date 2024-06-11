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
  selector: 'bh-coming_soon',
  templateUrl: './coming_soon.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class coming_soonComponent {
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
      this.sd_rCryj0d3w1AcXYk1(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_rCryj0d3w1AcXYk1(bh) {
    try {
      bh = this.sd_u5WgrKOEBJuzHou5(bh);
      //appendnew_next_sd_rCryj0d3w1AcXYk1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rCryj0d3w1AcXYk1');
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
      bh = this.sd_k4B7JboW63w4JUcP(bh);
      //appendnew_next_goBack
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_d2KKfBMbysoiJcTH');
    }
  }
  //appendnew_flow_coming_soonComponent_start

  sd_u5WgrKOEBJuzHou5(bh) {
    try {
      //appendnew_next_sd_u5WgrKOEBJuzHou5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_u5WgrKOEBJuzHou5');
    }
  }

  async sd_k4B7JboW63w4JUcP(bh) {
    try {
      const commonInstance: common = this.__page_injector__.get(common);

      let outputVariables = await commonInstance.goBack();

      //appendnew_next_sd_k4B7JboW63w4JUcP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_k4B7JboW63w4JUcP');
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
  //appendnew_flow_coming_soonComponent_Catch
}
