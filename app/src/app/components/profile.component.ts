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
  selector: 'bh-profile',
  templateUrl: './profile.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class profileComponent {
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
      this.sd_RZl1lPTvq2B3CnEO(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_RZl1lPTvq2B3CnEO(bh) {
    try {
      bh = this.sd_4eAqkKdvjjOXSJWW(bh);
      //appendnew_next_sd_RZl1lPTvq2B3CnEO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RZl1lPTvq2B3CnEO');
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
      bh = this.sd_4zLalLXWupkFnGD7(bh);
      //appendnew_next_goBack
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HydofGyzBYWDNkwc');
    }
  }

  logout(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_EONESmdyvguzBVw2(bh);
      //appendnew_next_logout
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Gs53YiVAeSkcj5Gz');
    }
  }
  //appendnew_flow_profileComponent_start

  sd_4eAqkKdvjjOXSJWW(bh) {
    try {
      //appendnew_next_sd_4eAqkKdvjjOXSJWW
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4eAqkKdvjjOXSJWW');
    }
  }

  async sd_4zLalLXWupkFnGD7(bh) {
    try {
      const commonInstance: common = this.__page_injector__.get(common);

      let outputVariables = await commonInstance.goBack();

      //appendnew_next_sd_4zLalLXWupkFnGD7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4zLalLXWupkFnGD7');
    }
  }

  sd_EONESmdyvguzBVw2(bh) {
    try {
      sessionStorage.removeItem('user');
      //appendnew_next_sd_EONESmdyvguzBVw2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EONESmdyvguzBVw2');
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
  //appendnew_flow_profileComponent_Catch
}
