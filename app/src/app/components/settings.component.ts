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
  selector: 'bh-settings',
  templateUrl: './settings.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class settingsComponent {
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
      this.sd_egOMYkhSU4i5HAG8(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_egOMYkhSU4i5HAG8(bh) {
    try {
      bh = this.sd_k2GpdPpd19NLOqet(bh);
      //appendnew_next_sd_egOMYkhSU4i5HAG8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_egOMYkhSU4i5HAG8');
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
      bh = this.sd_KU4DQujLAkyDU0Vz(bh);
      //appendnew_next_goBack
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3vtrtATQaRVQzR6S');
    }
  }

  setAction(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_QdMnr82CBLrQHmcb(bh);
      //appendnew_next_setAction
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fC3fI2FD4bT9iFP5');
    }
  }
  //appendnew_flow_settingsComponent_start

  sd_k2GpdPpd19NLOqet(bh) {
    try {
      this.page.currentUser = undefined;
      bh = this.sd_ptwq7KqqUOghlfsh(bh);
      //appendnew_next_sd_k2GpdPpd19NLOqet
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_k2GpdPpd19NLOqet');
    }
  }

  sd_ptwq7KqqUOghlfsh(bh) {
    try {
      localStorage.setItem('selectedPage', JSON.stringify('Settings'));
      //appendnew_next_sd_ptwq7KqqUOghlfsh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ptwq7KqqUOghlfsh');
    }
  }

  async sd_KU4DQujLAkyDU0Vz(bh) {
    try {
      const commonInstance: common = this.__page_injector__.get(common);

      let outputVariables = await commonInstance.goBack();

      //appendnew_next_sd_KU4DQujLAkyDU0Vz
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KU4DQujLAkyDU0Vz');
    }
  }

  sd_QdMnr82CBLrQHmcb(bh) {
    try {
      const page = this.page;
      bh.action = 'Change Password';
      bh = this.sd_KQQjVtluk7du5Fv8(bh);
      //appendnew_next_sd_QdMnr82CBLrQHmcb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QdMnr82CBLrQHmcb');
    }
  }

  sd_KQQjVtluk7du5Fv8(bh) {
    try {
      sessionStorage.setItem('action', JSON.stringify(bh.action));
      //appendnew_next_sd_KQQjVtluk7du5Fv8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KQQjVtluk7du5Fv8');
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
  //appendnew_flow_settingsComponent_Catch
}
