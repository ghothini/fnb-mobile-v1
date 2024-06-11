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
  selector: 'bh-confirm_limits',
  templateUrl: './confirm_limits.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class confirm_limitsComponent {
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
      this.sd_wURU5ynK5ZzePLB3(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_wURU5ynK5ZzePLB3(bh) {
    try {
      bh = this.sd_Yx9vKLiZeaJVmgXY(bh);
      //appendnew_next_sd_wURU5ynK5ZzePLB3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wURU5ynK5ZzePLB3');
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
      bh = this.sd_r6H5nwWcbpxzjOiK(bh);
      //appendnew_next_goBack
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_u0E5pHe8zZhTfbA0');
    }
  }
  //appendnew_flow_confirm_limitsComponent_start

  sd_Yx9vKLiZeaJVmgXY(bh) {
    try {
      //appendnew_next_sd_Yx9vKLiZeaJVmgXY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Yx9vKLiZeaJVmgXY');
    }
  }

  async sd_r6H5nwWcbpxzjOiK(bh) {
    try {
      const commonInstance: common = this.__page_injector__.get(common);

      let outputVariables = await commonInstance.goBack();

      //appendnew_next_sd_r6H5nwWcbpxzjOiK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_r6H5nwWcbpxzjOiK');
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
  //appendnew_flow_confirm_limitsComponent_Catch
}
