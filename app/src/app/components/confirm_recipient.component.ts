// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { common } from 'app/sd-services/common'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-confirm_recipient',
  templateUrl: './confirm_recipient.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class confirm_recipientComponent {
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
      this.sd_yTHj8ZNoVlKD1KVJ(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_yTHj8ZNoVlKD1KVJ(bh) {
    try {
      bh = this.sd_Itylvv29aFDq3XO5(bh);
      //appendnew_next_sd_yTHj8ZNoVlKD1KVJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yTHj8ZNoVlKD1KVJ');
    }
  }

  addBeneficiary(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_9HCtSuxjKbhwkem6(bh);
      //appendnew_next_addBeneficiary
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HfEBls1PHdyPfz19');
    }
  }

  finish(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_9U0Eul2eRmEyFDy3(bh);
      //appendnew_next_finish
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oS8fFRFO8181BnQd');
    }
  }

  pay(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_GEnVUQpB082bFZ4X(bh);
      //appendnew_next_pay
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_k0bKpLFFCx8GoKw9');
    }
  }
  //appendnew_flow_confirm_recipientComponent_start

  async sd_Itylvv29aFDq3XO5(bh) {
    try {
      const commonInstance: common = this.__page_injector__.get(common);

      let outputVariables = await commonInstance.getVariable();
      bh.result = outputVariables.local.data;

      bh = this.sd_z57xMIcuinEIvCZB(bh);
      //appendnew_next_sd_Itylvv29aFDq3XO5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Itylvv29aFDq3XO5');
    }
  }

  sd_z57xMIcuinEIvCZB(bh) {
    try {
      this.page.result = bh.result;
      this.page.showSpinner = false;
      this.page.confirm = true;
      this.page.pay = false;
      bh = this.sd_CMSqN7bV5Zs7DVoJ(bh);
      //appendnew_next_sd_z57xMIcuinEIvCZB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_z57xMIcuinEIvCZB');
    }
  }

  sd_CMSqN7bV5Zs7DVoJ(bh) {
    try {
      this.page.user = JSON.parse(sessionStorage.getItem('user'));
      bh = this.sd_Xs5gKoHxjKCCykQT(bh);
      //appendnew_next_sd_CMSqN7bV5Zs7DVoJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CMSqN7bV5Zs7DVoJ');
    }
  }

  sd_Xs5gKoHxjKCCykQT(bh) {
    try {
      localStorage.setItem('selectedPage', JSON.stringify('Add Recipient'));
      bh = this.sd_KQv8gKoSvPN9u2Tp(bh);
      //appendnew_next_sd_Xs5gKoHxjKCCykQT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Xs5gKoHxjKCCykQT');
    }
  }

  sd_KQv8gKoSvPN9u2Tp(bh) {
    try {
      const page = this.page; // // bh.body = {
      // //     email : page.user.email
      // // }

      // console.log("user ==>",page.user)
      //appendnew_next_sd_KQv8gKoSvPN9u2Tp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KQv8gKoSvPN9u2Tp');
    }
  }

  sd_9HCtSuxjKbhwkem6(bh) {
    try {
      this.page.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.sd_ObIFNwgRSGCCOiy2(bh);
      //appendnew_next_sd_9HCtSuxjKbhwkem6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9HCtSuxjKbhwkem6');
    }
  }

  sd_ObIFNwgRSGCCOiy2(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdURL + 'add-beneficiary';
      page.showSpinner = true;
      page.confirm = false;
      page.pay = true;
      bh = this.postBeneficiary(bh);
      //appendnew_next_sd_ObIFNwgRSGCCOiy2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ObIFNwgRSGCCOiy2');
    }
  }

  async postBeneficiary(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.result,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_dNm7jgXD5ZEwE6Z7(bh);
      //appendnew_next_postBeneficiary
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ELx72nDMdUGSALsy');
    }
  }

  sd_dNm7jgXD5ZEwE6Z7(bh) {
    try {
      const page = this.page;
      page.showSpinner = false;

      bh = this.sd_fb0yVUgUqFTmfsuR(bh);
      //appendnew_next_sd_dNm7jgXD5ZEwE6Z7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dNm7jgXD5ZEwE6Z7');
    }
  }

  async sd_fb0yVUgUqFTmfsuR(bh) {
    try {
      const commonInstance: common = this.__page_injector__.get(common);

      let outputVariables = await commonInstance.getVariable();
      this.page.result = outputVariables.local.data;

      //appendnew_next_sd_fb0yVUgUqFTmfsuR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fb0yVUgUqFTmfsuR');
    }
  }

  async sd_9U0Eul2eRmEyFDy3(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/pay_beneficiary');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_sd_9U0Eul2eRmEyFDy3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9U0Eul2eRmEyFDy3');
    }
  }

  async sd_GEnVUQpB082bFZ4X(bh) {
    try {
      const commonInstance: common = this.__page_injector__.get(common);

      let outputVariables = await commonInstance.setVariable(this.page.result);
      bh.result = outputVariables.input.data;

      bh = this.sd_rnjZX52qm2WqWDjI(bh);
      //appendnew_next_sd_GEnVUQpB082bFZ4X
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GEnVUQpB082bFZ4X');
    }
  }

  async sd_rnjZX52qm2WqWDjI(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/pay');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_sd_rnjZX52qm2WqWDjI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rnjZX52qm2WqWDjI');
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
  //appendnew_flow_confirm_recipientComponent_Catch
}
