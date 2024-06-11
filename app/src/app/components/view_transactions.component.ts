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
      bh = this.sd_3oH2r6rOuBE5VSlL(bh);
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

  sd_3oH2r6rOuBE5VSlL(bh) {
    try {
      bh = this.sd_GFUVMLwhBkIKvPjv(bh);
      //appendnew_next_sd_3oH2r6rOuBE5VSlL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3oH2r6rOuBE5VSlL');
    }
  }

  sd_GFUVMLwhBkIKvPjv(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
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
      bh.url = `https://111e-169-239-176-9.ngrok-free.app/api/get-airtime/${page.loggedInUser.email}`;
      bh.url2 = `https://111e-169-239-176-9.ngrok-free.app/api/get-electricity/${page.loggedInUser.email}`;
      bh.url3 = `https://111e-169-239-176-9.ngrok-free.app/api/get-ewallet/${page.loggedInUser.email}`;
      bh.url4 = `https://111e-169-239-176-9.ngrok-free.app/api/get-pay/${page.loggedInUser.email}`;

      bh = this.sd_NO1swfx7Djl88TaU(bh);
      //appendnew_next_sd_UtIdsMpnbEzdy33G
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UtIdsMpnbEzdy33G');
    }
  }

  async sd_NO1swfx7Djl88TaU(bh) {
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
      bh = this.sd_ywShD8cOBT5apeHm(bh);
      //appendnew_next_sd_NO1swfx7Djl88TaU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NO1swfx7Djl88TaU');
    }
  }

  async sd_ywShD8cOBT5apeHm(bh) {
    try {
      let requestOptions = {
        url: bh.url2,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      this.page.electricity = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_lNXTuv9JhUg8NEh8(bh);
      //appendnew_next_sd_ywShD8cOBT5apeHm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ywShD8cOBT5apeHm');
    }
  }

  async sd_lNXTuv9JhUg8NEh8(bh) {
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
      bh = this.sd_Yu8yEAuVIKQrq9PN(bh);
      //appendnew_next_sd_lNXTuv9JhUg8NEh8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lNXTuv9JhUg8NEh8');
    }
  }

  async sd_Yu8yEAuVIKQrq9PN(bh) {
    try {
      let requestOptions = {
        url: bh.url4,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      this.page.pay = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_QXMibve5VdwFRL9r(bh);
      //appendnew_next_sd_Yu8yEAuVIKQrq9PN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Yu8yEAuVIKQrq9PN');
    }
  }

  sd_QXMibve5VdwFRL9r(bh) {
    try {
      const page = this.page;
      page.transctions = [
        ...page.airtime,
        ...page.electricity,
        ...page.ewallet,
        ...page.pay,
      ];

      const newArray = page.transctions.map((transaction) => {
        let description;
        if (transaction.bundleType) {
          description = `Airtime purchase for ${transaction.cell} on ${transaction.networkProvider}`;
        } else if (transaction.meterNumber) {
          description = `Electricity purchase for meter number ${transaction.meterNumber}`;
        } else if (transaction.cellNumber) {
          description = `Transaction for cell number ${transaction.cellNumber}`;
        } else if (transaction.cardNumber) {
          description = `Money sent to ${transaction.recipientName} with reference ${transaction.ownRef}`;
        }

        return {
          transactionDate: transaction.transactionDate,
          amount: transaction.amount,
          description: description,
        };
      });
      newArray.sort((a, b) => {
        page.dateA = new Date(a.transactionDate);
        page.dateB = new Date(b.transactionDate);
        return page.dateB - page.dateA;
      });

      page.newArr = newArray;
      console.log('newArray', page.newArr);
      //appendnew_next_sd_QXMibve5VdwFRL9r
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QXMibve5VdwFRL9r');
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
