// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-pay_recipient',
  templateUrl: './pay_recipient.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class pay_recipientComponent {
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
      this.sd_TqrbAEHGml5qG4Ir(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_TqrbAEHGml5qG4Ir(bh) {
    try {
      bh = this.sd_IGUe37GzsytwXOZB(bh);
      //appendnew_next_sd_TqrbAEHGml5qG4Ir
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TqrbAEHGml5qG4Ir');
    }
  }

  viewLimits(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_hvJESq01Mk3VLe0P(bh);
      //appendnew_next_viewLimits
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KHQanxO7Ldk1uXuS');
    }
  }

  addRecipient(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_zVzjTVddQu0HwTVs(bh);
      //appendnew_next_addRecipient
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hcC59gINMABoyJ7B');
    }
  }

  getRecipients(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_Dw1WTFmKeNXwtEaH(bh);
      //appendnew_next_getRecipients
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IZWSBXSSBykC5QBs');
    }
  }

  pay(index: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { index };
      bh.local = {};
      this.sd_jfq63OKHjdbtPtQW(bh);
      //appendnew_next_pay
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_z0MSUO3k2vmNvprJ');
    }
  }
  //appendnew_flow_pay_recipientComponent_start

  sd_IGUe37GzsytwXOZB(bh) {
    try {
      this.page.showSpinner = false;
      this.page.beneficiary = undefined;
      bh = this.sd_ueIDshDGqCGuKaO6(bh);
      //appendnew_next_sd_IGUe37GzsytwXOZB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IGUe37GzsytwXOZB');
    }
  }

  sd_ueIDshDGqCGuKaO6(bh) {
    try {
      localStorage.setItem('selectedPage', JSON.stringify('Pay'));
      bh = this.sd_4QNH8oMwWf8TnkCj(bh);
      //appendnew_next_sd_ueIDshDGqCGuKaO6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ueIDshDGqCGuKaO6');
    }
  }

  sd_4QNH8oMwWf8TnkCj(bh) {
    try {
      this.page.user = JSON.parse(sessionStorage.getItem('user'));
      bh = this.sd_A5HQ46YJqsJsgP6w(bh);
      this.sd_41Bhf2YtqOIh3DEA(bh);
      //appendnew_next_sd_4QNH8oMwWf8TnkCj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4QNH8oMwWf8TnkCj');
    }
  }

  sd_A5HQ46YJqsJsgP6w(bh) {
    try {
      let outputVariables = this.getRecipients();

      //appendnew_next_sd_A5HQ46YJqsJsgP6w
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_A5HQ46YJqsJsgP6w');
    }
  }

  sd_41Bhf2YtqOIh3DEA(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.user);
      //appendnew_next_sd_41Bhf2YtqOIh3DEA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_41Bhf2YtqOIh3DEA');
    }
  }

  async sd_hvJESq01Mk3VLe0P(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/limits');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_sd_hvJESq01Mk3VLe0P
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hvJESq01Mk3VLe0P');
    }
  }

  async sd_zVzjTVddQu0HwTVs(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/add_recipient');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_sd_zVzjTVddQu0HwTVs
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zVzjTVddQu0HwTVs');
    }
  }

  sd_Dw1WTFmKeNXwtEaH(bh) {
    try {
      const page = this.page;
      page.showSpinner = true;
      bh = this.sd_IJSgy2TwJ7C4GXrS(bh);
      //appendnew_next_sd_Dw1WTFmKeNXwtEaH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Dw1WTFmKeNXwtEaH');
    }
  }

  sd_IJSgy2TwJ7C4GXrS(bh) {
    try {
      this.page.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.sd_ACm0fUpAXUliJFYn(bh);
      //appendnew_next_sd_IJSgy2TwJ7C4GXrS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IJSgy2TwJ7C4GXrS');
    }
  }

  sd_ACm0fUpAXUliJFYn(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdURL + 'get-beneficiaries';
      bh = this.sd_Ushpwhe5mPnsICNs(bh);
      //appendnew_next_sd_ACm0fUpAXUliJFYn
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ACm0fUpAXUliJFYn');
    }
  }

  async sd_Ushpwhe5mPnsICNs(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_y8wXXnP9FMyd6Xmp(bh);
      //appendnew_next_sd_Ushpwhe5mPnsICNs
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Ushpwhe5mPnsICNs');
    }
  }

  sd_y8wXXnP9FMyd6Xmp(bh) {
    try {
      const page = this.page;
      page.showSpinner = false;
      page.beneficiary = page.result.filter((user: any) => {
        return page.user.email == user.email;
      });

      // console.log("filter ==>", page.result)
      //appendnew_next_sd_y8wXXnP9FMyd6Xmp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_y8wXXnP9FMyd6Xmp');
    }
  }

  sd_jfq63OKHjdbtPtQW(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), bh.input.index);
      //appendnew_next_sd_jfq63OKHjdbtPtQW
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jfq63OKHjdbtPtQW');
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
  //appendnew_flow_pay_recipientComponent_Catch
}
