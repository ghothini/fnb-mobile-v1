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
  selector: 'bh-personal_info',
  templateUrl: './personal_info.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class personal_infoComponent {
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
      this.sd_dPgL9CGW7b1kChu2(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_dPgL9CGW7b1kChu2(bh) {
    try {
      bh = this.sd_ikzzmdpAVXbHii6E(bh);
      //appendnew_next_sd_dPgL9CGW7b1kChu2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dPgL9CGW7b1kChu2');
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
      bh = this.sd_1deJkRZi3CK7d4MQ(bh);
      //appendnew_next_goBack
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_eLulLQhTtxuL910b');
    }
  }
  //appendnew_flow_personal_infoComponent_start

  sd_ikzzmdpAVXbHii6E(bh) {
    try {
      this.page.userDetails = JSON.parse(sessionStorage.getItem('user'));
      bh = this.sd_a8YTzAlyRhKPCUhO(bh);
      //appendnew_next_sd_ikzzmdpAVXbHii6E
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ikzzmdpAVXbHii6E');
    }
  }

  sd_a8YTzAlyRhKPCUhO(bh) {
    try {
      const page = this.page; // console.log(page.userDetails)
      bh = this.sd_rQOfEXAMOUzol1j5(bh);
      //appendnew_next_sd_a8YTzAlyRhKPCUhO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_a8YTzAlyRhKPCUhO');
    }
  }

  sd_rQOfEXAMOUzol1j5(bh) {
    try {
      //appendnew_next_sd_rQOfEXAMOUzol1j5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rQOfEXAMOUzol1j5');
    }
  }

  async sd_1deJkRZi3CK7d4MQ(bh) {
    try {
      const commonInstance: common = this.__page_injector__.get(common);

      let outputVariables = await commonInstance.goBack();

      //appendnew_next_sd_1deJkRZi3CK7d4MQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1deJkRZi3CK7d4MQ');
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
  //appendnew_flow_personal_infoComponent_Catch
}
