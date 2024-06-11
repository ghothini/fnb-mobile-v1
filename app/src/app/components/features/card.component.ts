// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Location } from '@angular/common'; //_splitter_
import { Component, Injector } from '@angular/core'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-card',
  templateUrl: './card.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class cardComponent {
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
      this.sd_mBSexFGppPzhHIKz(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_mBSexFGppPzhHIKz(bh) {
    try {
      bh = this.sd_HLdYTEAFr0krmd5a(bh);
      //appendnew_next_sd_mBSexFGppPzhHIKz
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mBSexFGppPzhHIKz');
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
      bh = this.sd_0jyXwyKjWcmHkS2P(bh);
      //appendnew_next_goBack
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wUs9U3CcvBpO3bt7');
    }
  }

  openScanToPay(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_f3tkITNIYIIognCe(bh);
      //appendnew_next_openScanToPay
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IK1CkF0IHzFSFJhb');
    }
  }
  //appendnew_flow_cardComponent_start

  sd_HLdYTEAFr0krmd5a(bh) {
    try {
      bh = this.sd_Ej8lIcjd5rnLva0T(bh);
      //appendnew_next_sd_HLdYTEAFr0krmd5a
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HLdYTEAFr0krmd5a');
    }
  }

  sd_Ej8lIcjd5rnLva0T(bh) {
    try {
      this.page.loggedInUser = JSON.parse(sessionStorage.getItem('user'));
      //appendnew_next_sd_Ej8lIcjd5rnLva0T
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Ej8lIcjd5rnLva0T');
    }
  }

  sd_0jyXwyKjWcmHkS2P(bh) {
    try {
      this.page.location = this.__page_injector__.get(Location);
      bh = this.sd_eNKwox5CTGR08gcB(bh);
      //appendnew_next_sd_0jyXwyKjWcmHkS2P
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0jyXwyKjWcmHkS2P');
    }
  }

  sd_eNKwox5CTGR08gcB(bh) {
    try {
      const page = this.page;
      page.location.back();

      //appendnew_next_sd_eNKwox5CTGR08gcB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_eNKwox5CTGR08gcB');
    }
  }

  async sd_f3tkITNIYIIognCe(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/qr-code-reader');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_f3tkITNIYIIognCe
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_f3tkITNIYIIognCe');
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
  //appendnew_flow_cardComponent_Catch
}
