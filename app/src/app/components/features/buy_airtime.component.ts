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
  selector: 'bh-buy_airtime',
  templateUrl: './buy_airtime.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class buy_airtimeComponent {
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
      this.sd_ZZCCD4XQxjJfthGg(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_ZZCCD4XQxjJfthGg(bh) {
    try {
      bh = this.sd_4NC0TDgF3SEBdfuA(bh);
      //appendnew_next_sd_ZZCCD4XQxjJfthGg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZZCCD4XQxjJfthGg');
    }
  }

  goBack2(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_rnwzf7GG4GtwMenu(bh);
      //appendnew_next_goBack2
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UPPt3rtyuEHaLwqM');
    }
  }

  openAirtimeDetails(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_6zQvR1COL7ks0Uhe(bh);
      //appendnew_next_openAirtimeDetails
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ciLgyBpsargQvb9r');
    }
  }

  openAirtimeAnotherDetails(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_vPRi09XZbOaMOagK(bh);
      //appendnew_next_openAirtimeAnotherDetails
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AuwZwELVV5ja31MS');
    }
  }
  //appendnew_flow_buy_airtimeComponent_start

  sd_4NC0TDgF3SEBdfuA(bh) {
    try {
      bh = this.sd_24vDLIgEl1Ye1BkQ(bh);
      //appendnew_next_sd_4NC0TDgF3SEBdfuA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4NC0TDgF3SEBdfuA');
    }
  }

  sd_24vDLIgEl1Ye1BkQ(bh) {
    try {
      this.page.loggedInUser = JSON.parse(sessionStorage.getItem('user'));
      bh = this.sd_AYvdSXjUTKDz7u6s(bh);
      //appendnew_next_sd_24vDLIgEl1Ye1BkQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_24vDLIgEl1Ye1BkQ');
    }
  }

  sd_AYvdSXjUTKDz7u6s(bh) {
    try {
      const page = this.page; // console.log("new bh :", bh.currentQuote.input.newQuote)
      page.currentQuote = page.loggedInUser.balance;

      // if (bh.currentQuote) {
      //     console.log('value');
      //     page.currentQuote = bh.currentQuote.input.newQuote;
      //     console.log("new bh :", bh.currentQuote.input.newQuote);
      // } else {
      //     console.log('no value');
      // }

      console.log('page', page);
      console.log('bh', bh);

      //appendnew_next_sd_AYvdSXjUTKDz7u6s
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AYvdSXjUTKDz7u6s');
    }
  }

  async sd_rnwzf7GG4GtwMenu(bh) {
    try {
      const commonInstance: common = this.__page_injector__.get(common);

      let outputVariables = await commonInstance.goBack();

      //appendnew_next_sd_rnwzf7GG4GtwMenu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rnwzf7GG4GtwMenu');
    }
  }

  async sd_6zQvR1COL7ks0Uhe(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/airtime-details');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_6zQvR1COL7ks0Uhe
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6zQvR1COL7ks0Uhe');
    }
  }

  async sd_vPRi09XZbOaMOagK(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/airtimeAnother-details');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_vPRi09XZbOaMOagK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vPRi09XZbOaMOagK');
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
  //appendnew_flow_buy_airtimeComponent_Catch
}
