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
  selector: 'bh-view_transactions',
  templateUrl: './view_transactions.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class view_transactionsComponent {
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
      this.sd_K5NHmbmLJZLJQmKr(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_K5NHmbmLJZLJQmKr(bh) {
    try {
      bh = this.sd_kf5vK3nhsEfEJS6b(bh);
      //appendnew_next_sd_K5NHmbmLJZLJQmKr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_K5NHmbmLJZLJQmKr');
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
      bh = this.sd_3WsT5cgxjILzgAEg(bh);
      //appendnew_next_goBack
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Sr7vn4Z7hXrVNx77');
    }
  }

  goToSearch(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_OiIEySJfDIqsnu5f(bh);
      //appendnew_next_goToSearch
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qgs1V0XSdLd3smGC');
    }
  }
  //appendnew_flow_view_transactionsComponent_start

  sd_kf5vK3nhsEfEJS6b(bh) {
    try {
      this.page.showSpinner = false;
      bh = this.sd_GFUVMLwhBkIKvPjv(bh);
      //appendnew_next_sd_kf5vK3nhsEfEJS6b
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kf5vK3nhsEfEJS6b');
    }
  }

  sd_GFUVMLwhBkIKvPjv(bh) {
    try {
      this.page.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.sd_6Ihta6dFH2WqedTq(bh);
      //appendnew_next_sd_GFUVMLwhBkIKvPjv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GFUVMLwhBkIKvPjv');
    }
  }

  sd_6Ihta6dFH2WqedTq(bh) {
    try {
      this.page.loggedInUser = JSON.parse(sessionStorage.getItem('user'));
      bh = this.sd_UtIdsMpnbEzdy33G(bh);
      //appendnew_next_sd_6Ihta6dFH2WqedTq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6Ihta6dFH2WqedTq');
    }
  }

  sd_UtIdsMpnbEzdy33G(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdURL + `get-airtime/${page.loggedInUser.email}`;
      bh.url2 = page.ssdURL + `get-electricity/${page.loggedInUser.email}`;
      bh.url3 = page.ssdURL + `get-ewallet/${page.loggedInUser.email}`;
      bh.url4 = page.ssdURL + `get-pay/${page.loggedInUser.email}`;
      bh.url5 = page.ssdURL + `get-scan/${page.loggedInUser.email}`;

      bh.body = {
        email: page.loggedInUser.email,
      };

      page.showSpinner = true;

      bh = this.getAirtime(bh);
      //appendnew_next_sd_UtIdsMpnbEzdy33G
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UtIdsMpnbEzdy33G');
    }
  }

  async getAirtime(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      this.page.airtime = await this.sdService.nHttpRequest(requestOptions);
      bh = this.getElectricity(bh);
      //appendnew_next_getAirtime
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NO1swfx7Djl88TaU');
    }
  }

  async getElectricity(bh) {
    try {
      let requestOptions = {
        url: bh.url2,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.body,
      };
      this.page.electricity = await this.sdService.nHttpRequest(requestOptions);
      bh = this.getEwallet(bh);
      //appendnew_next_getElectricity
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ywShD8cOBT5apeHm');
    }
  }

  async getEwallet(bh) {
    try {
      let requestOptions = {
        url: bh.url3,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      this.page.ewallet = await this.sdService.nHttpRequest(requestOptions);
      bh = this.getPay(bh);
      //appendnew_next_getEwallet
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lNXTuv9JhUg8NEh8');
    }
  }

  async getPay(bh) {
    try {
      let requestOptions = {
        url: bh.url4,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.body,
      };
      this.page.pay = await this.sdService.nHttpRequest(requestOptions);
      bh = this.getScan(bh);
      //appendnew_next_getPay
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Yu8yEAuVIKQrq9PN');
    }
  }

  async getScan(bh) {
    try {
      let requestOptions = {
        url: bh.url5,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      this.page.scan = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_QXMibve5VdwFRL9r(bh);
      //appendnew_next_getScan
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iGTVKxedK2f0tho1');
    }
  }

  sd_QXMibve5VdwFRL9r(bh) {
    try {
      const page = this.page;
      page.showSpinner = false;

      bh.airtime = page.airtime.filter((user: any) => {
        return page.loggedInUser.email == user.email;
      });
      page.airtimeArr = bh.airtime;

      bh.eWallet = page.ewallet.filter((user: any) => {
        return page.loggedInUser.email == user.email;
      });
      page.eWalletArr = bh.eWallet;
      console.log('eWallet ==>', page.eWalletArr);

      bh.electricity = page.electricity.filter((user: any) => {
        return page.loggedInUser.email == user.email;
      });
      page.electricityArr = bh.electricity;
      console.log('electricity ==>', page.electricityArr);

      bh.pay = page.pay.filter((user: any) => {
        return page.loggedInUser.email == user.email;
      });
      page.payArr = bh.pay;
      console.log('pay ==>', page.payArr);

      bh.scan = page.scan.filter((user: any) => {
        return page.loggedInUser.email == user.email;
      });
      page.scanArr = bh.scan;
      console.log('scan ==>', page.scanArr);

      bh = this.sd_4oYRr5H41YvEZUZT(bh);
      //appendnew_next_sd_QXMibve5VdwFRL9r
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QXMibve5VdwFRL9r');
    }
  }

  sd_4oYRr5H41YvEZUZT(bh) {
    try {
      this.page.electricityArr = bh.electricity;
      this.page.airtimeArr = bh.airtime;
      this.page.scanArr = bh.scan;
      this.page.payArr = bh.pay;
      this.page.eWalletArr = bh.eWallet;
      bh = this.sd_rxCpdeVmg7uYl6Mi(bh);
      //appendnew_next_sd_4oYRr5H41YvEZUZT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4oYRr5H41YvEZUZT');
    }
  }

  sd_rxCpdeVmg7uYl6Mi(bh) {
    try {
      localStorage.setItem('selectedPage', JSON.stringify('Messages'));
      //appendnew_next_sd_rxCpdeVmg7uYl6Mi
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rxCpdeVmg7uYl6Mi');
    }
  }

  sd_3WsT5cgxjILzgAEg(bh) {
    try {
      this.page.location = this.__page_injector__.get(Location);
      bh = this.sd_DnMTqbMgscweVaTf(bh);
      //appendnew_next_sd_3WsT5cgxjILzgAEg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3WsT5cgxjILzgAEg');
    }
  }

  sd_DnMTqbMgscweVaTf(bh) {
    try {
      const page = this.page;
      page.location.back();
      //appendnew_next_sd_DnMTqbMgscweVaTf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DnMTqbMgscweVaTf');
    }
  }

  async sd_OiIEySJfDIqsnu5f(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/search');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_OiIEySJfDIqsnu5f
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OiIEySJfDIqsnu5f');
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
  //appendnew_flow_view_transactionsComponent_Catch
}
