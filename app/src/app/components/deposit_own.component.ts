// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { FormControl, FormGroup } from '@angular/forms'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { common } from 'app/sd-services/common'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-deposit_own',
  templateUrl: './deposit_own.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class deposit_ownComponent {
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
      this.sd_sxuSmmggwJhNkaMJ(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_sxuSmmggwJhNkaMJ(bh) {
    try {
      bh = this.sd_50nnJusge0WlEeKa(bh);
      //appendnew_next_sd_sxuSmmggwJhNkaMJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sxuSmmggwJhNkaMJ');
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
      bh = this.sd_iAwLBsP1GTw129bJ(bh);
      //appendnew_next_goBack
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6dRBPgiYAUEsVX8G');
    }
  }

  deposit(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_1WWXSPwsvBm2czQv(bh);
      //appendnew_next_deposit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rCwW2FYOhzByj19y');
    }
  }
  //appendnew_flow_deposit_ownComponent_start

  sd_50nnJusge0WlEeKa(bh) {
    try {
      bh = this.sd_fwxLkqzq3xDQqn6O(bh);
      //appendnew_next_sd_50nnJusge0WlEeKa
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_50nnJusge0WlEeKa');
    }
  }

  sd_fwxLkqzq3xDQqn6O(bh) {
    try {
      this.page.depositForm = undefined;
      this.page.quote = undefined;
      bh = this.sd_OaQEDxEmVHx3C3g1(bh);
      //appendnew_next_sd_fwxLkqzq3xDQqn6O
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fwxLkqzq3xDQqn6O');
    }
  }

  sd_OaQEDxEmVHx3C3g1(bh) {
    try {
      this.page.loggedInUser = JSON.parse(sessionStorage.getItem('user'));
      bh = this.sd_SCwW4nHklebIcI9W(bh);
      //appendnew_next_sd_OaQEDxEmVHx3C3g1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OaQEDxEmVHx3C3g1');
    }
  }

  sd_SCwW4nHklebIcI9W(bh) {
    try {
      const page = this.page;
      page.depositForm = new FormGroup({
        accountNumber: new FormControl(page.loggedInUser._id),
        depositAmount: new FormControl(''),
      });
      page.loggedInUser.balance = '';
      console.log('page', page);
      //appendnew_next_sd_SCwW4nHklebIcI9W
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_n1swxNd5XPSBN52k');
    }
  }

  async sd_iAwLBsP1GTw129bJ(bh) {
    try {
      const commonInstance: common = this.__page_injector__.get(common);

      let outputVariables = await commonInstance.goBack();

      //appendnew_next_sd_iAwLBsP1GTw129bJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iAwLBsP1GTw129bJ');
    }
  }

  async sd_1WWXSPwsvBm2czQv(bh) {
    try {
      const commonInstance: common = this.__page_injector__.get(common);

      let outputVariables = await commonInstance.update(this.page.quote);

      bh = this.sd_nI18BeqqDSJEhPi2(bh);
      //appendnew_next_sd_1WWXSPwsvBm2czQv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1WWXSPwsvBm2czQv');
    }
  }

  sd_nI18BeqqDSJEhPi2(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_KjA1mPc8d0LZLJFC(bh);
      //appendnew_next_sd_nI18BeqqDSJEhPi2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nI18BeqqDSJEhPi2');
    }
  }

  sd_KjA1mPc8d0LZLJFC(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + 'update';
      bh.url2 = page.ssdUrl + `get-user/${page.loggedInUser.email}`;
      page.loggedInUser.balance = page.quote;
      page.loggedInUser.collection = 'users';

      console.log('bh', bh);
      console.log('page', page);
      bh = this.sd_Z1kgiWyXkMK4cKNl(bh);
      //appendnew_next_sd_KjA1mPc8d0LZLJFC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KjA1mPc8d0LZLJFC');
    }
  }

  async sd_Z1kgiWyXkMK4cKNl(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'put',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.loggedInUser,
      };
      this.page.loggedInUser = await this.sdService.nHttpRequest(
        requestOptions
      );
      bh = this.sd_Gp3SXjhwB91r12WX(bh);
      //appendnew_next_sd_Z1kgiWyXkMK4cKNl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Z1kgiWyXkMK4cKNl');
    }
  }

  async sd_Gp3SXjhwB91r12WX(bh) {
    try {
      let requestOptions = {
        url: bh.url2,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.loggedInUser.collection,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_9vr6cKjC0YU5tOu6(bh);
      //appendnew_next_sd_Gp3SXjhwB91r12WX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Gp3SXjhwB91r12WX');
    }
  }

  sd_9vr6cKjC0YU5tOu6(bh) {
    try {
      sessionStorage.setItem('user', JSON.stringify(this.page.result));
      bh = this.sd_D4TSF2KvJlb00H4k(bh);
      //appendnew_next_sd_9vr6cKjC0YU5tOu6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9vr6cKjC0YU5tOu6');
    }
  }

  async sd_D4TSF2KvJlb00H4k(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/bank');
      this.page.loggedInUser = await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_D4TSF2KvJlb00H4k
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_D4TSF2KvJlb00H4k');
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
  //appendnew_flow_deposit_ownComponent_Catch
}
