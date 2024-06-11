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
  selector: 'bh-add_profile_pic',
  templateUrl: './add_profile_pic.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class add_profile_picComponent {
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
      this.sd_8FU1L1W790CTURGh(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_8FU1L1W790CTURGh(bh) {
    try {
      bh = this.sd_8ERQ29poGomAH1lH(bh);
      //appendnew_next_sd_8FU1L1W790CTURGh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8FU1L1W790CTURGh');
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
      bh = this.sd_Wxns6F4VJ8PiWiv5(bh);
      //appendnew_next_goBack
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8BzR3p3OlYioLbBC');
    }
  }
  //appendnew_flow_add_profile_picComponent_start

  sd_8ERQ29poGomAH1lH(bh) {
    try {
      //appendnew_next_sd_8ERQ29poGomAH1lH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8ERQ29poGomAH1lH');
    }
  }

  async sd_Wxns6F4VJ8PiWiv5(bh) {
    try {
      const commonInstance: common = this.__page_injector__.get(common);

      let outputVariables = await commonInstance.goBack();

      //appendnew_next_sd_Wxns6F4VJ8PiWiv5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Wxns6F4VJ8PiWiv5');
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
  //appendnew_flow_add_profile_picComponent_Catch
}
