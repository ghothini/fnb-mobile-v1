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
  selector: 'bh-search',
  templateUrl: './search.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class searchComponent {
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
      this.sd_DTvrWz57bEJDLY6e(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_DTvrWz57bEJDLY6e(bh) {
    try {
      bh = this.sd_8SWG1mUj5QFRduiJ(bh);
      //appendnew_next_sd_DTvrWz57bEJDLY6e
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DTvrWz57bEJDLY6e');
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
      bh = this.sd_6JxufpbuAJpEWcAR(bh);
      //appendnew_next_goBack
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zOZ3GO2QbQk3WdRZ');
    }
  }

  goToEwallet(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_KCeErSltVHx68fou(bh);
      //appendnew_next_goToEwallet
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HFz5PyX0RSXzUykb');
    }
  }
  //appendnew_flow_searchComponent_start

  sd_8SWG1mUj5QFRduiJ(bh) {
    try {
      //appendnew_next_sd_8SWG1mUj5QFRduiJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8SWG1mUj5QFRduiJ');
    }
  }

  sd_6JxufpbuAJpEWcAR(bh) {
    try {
      this.page.location = this.__page_injector__.get(Location);
      bh = this.sd_4rSe9bf3ZAu826qz(bh);
      //appendnew_next_sd_6JxufpbuAJpEWcAR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6JxufpbuAJpEWcAR');
    }
  }

  sd_4rSe9bf3ZAu826qz(bh) {
    try {
      const page = this.page;
      page.location.back();
      //appendnew_next_sd_4rSe9bf3ZAu826qz
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4rSe9bf3ZAu826qz');
    }
  }

  async sd_KCeErSltVHx68fou(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/eWallet');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_KCeErSltVHx68fou
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KCeErSltVHx68fou');
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
  //appendnew_flow_searchComponent_Catch
}
