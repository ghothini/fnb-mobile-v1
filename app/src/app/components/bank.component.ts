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
  selector: 'bh-bank',
  templateUrl: './bank.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class bankComponent {
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
      this.sd_K89ydCREuQk6JRCc(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  goToTransactions(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_lzbhoAkaARC0iBfx(bh);
      //appendnew_next_goToTransactions
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EgdyPsf05vhDko23');
    }
  }

  openScanner(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_oGYWxWUU8emMzYxX(bh);
      //appendnew_next_openScanner
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FiIUdNr6qFB4fMbg');
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
      bh = this.sd_yGgH5FkjrZJOiZ8Q(bh);
      //appendnew_next_goToSearch
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wRGirzdWOtJZPnPH');
    }
  }

  goToAirtime(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_kGLL3bXWMEQMJJhl(bh);
      //appendnew_next_goToAirtime
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_z29Tapg2rpzkM1mJ');
    }
  }

  goToElectricity(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_xpqupbZrQoVdJQAu(bh);
      //appendnew_next_goToElectricity
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6jIFi34pkIioCrQV');
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
      bh = this.sd_SgsNGx1cZnLcpg5l(bh);
      //appendnew_next_goToEwallet
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_aVvo7DBqeWCgk6Oy');
    }
  }

  goToPay(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_tDYSVNbUXDNJl3OU(bh);
      //appendnew_next_goToPay
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Yo8FSaXAR6ou4ZLB');
    }
  }

  goToCard(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_4gY2NKIDRROAm3qN(bh);
      //appendnew_next_goToCard
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wX3DmtKIglUiskZF');
    }
  }
  sd_K89ydCREuQk6JRCc(bh) {
    try {
      bh = this.sd_3313vsjK8WDNBsFI(bh);
      //appendnew_next_sd_K89ydCREuQk6JRCc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_K89ydCREuQk6JRCc');
    }
  }

  //appendnew_flow_bankComponent_start

  async sd_lzbhoAkaARC0iBfx(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/view-transactions');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_lzbhoAkaARC0iBfx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lzbhoAkaARC0iBfx');
    }
  }

  async sd_oGYWxWUU8emMzYxX(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/qr-code-reader');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_oGYWxWUU8emMzYxX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oGYWxWUU8emMzYxX');
    }
  }

  async sd_yGgH5FkjrZJOiZ8Q(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/search');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_yGgH5FkjrZJOiZ8Q
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yGgH5FkjrZJOiZ8Q');
    }
  }

  async sd_kGLL3bXWMEQMJJhl(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/airtime');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_kGLL3bXWMEQMJJhl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kGLL3bXWMEQMJJhl');
    }
  }

  async sd_xpqupbZrQoVdJQAu(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/electricity');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_xpqupbZrQoVdJQAu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xpqupbZrQoVdJQAu');
    }
  }

  async sd_SgsNGx1cZnLcpg5l(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/eWallet');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_SgsNGx1cZnLcpg5l
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SgsNGx1cZnLcpg5l');
    }
  }

  async sd_tDYSVNbUXDNJl3OU(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/pay');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_tDYSVNbUXDNJl3OU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tDYSVNbUXDNJl3OU');
    }
  }

  async sd_4gY2NKIDRROAm3qN(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/cards');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_4gY2NKIDRROAm3qN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4gY2NKIDRROAm3qN');
    }
  }

  sd_3313vsjK8WDNBsFI(bh) {
    try {
      this.page.currentQuote = undefined;
      bh = this.sd_9bDRCvGWsSYHLJOr(bh);
      //appendnew_next_sd_3313vsjK8WDNBsFI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3313vsjK8WDNBsFI');
    }
  }

  sd_9bDRCvGWsSYHLJOr(bh) {
    try {
      const commonInstance: common = this.__page_injector__.get(common);
      bh.currentQuote = commonInstance['currentQuote'];
      bh = this.sd_27vHPFM3aNGZbRyw(bh);
      //appendnew_next_sd_9bDRCvGWsSYHLJOr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9bDRCvGWsSYHLJOr');
    }
  }

  sd_27vHPFM3aNGZbRyw(bh) {
    try {
      this.page.loggedInUser = JSON.parse(sessionStorage.getItem('user'));
      bh = this.sd_n4nRrKPEshmLxTLw(bh);
      //appendnew_next_sd_27vHPFM3aNGZbRyw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_27vHPFM3aNGZbRyw');
    }
  }

  sd_n4nRrKPEshmLxTLw(bh) {
    try {
      const page = this.page; // console.log("new bh :", bh.currentQuote.input.newQuote)
      // page.currentQuote = page.logged.balance;

      // if (bh.currentQuote) {
      //     console.log('value');
      //     page.currentQuote = bh.currentQuote.input.newQuote;
      //     console.log("new bh :", bh.currentQuote.input.newQuote);
      // } else {
      //     console.log('no value');
      // }

      console.log('page', page);
      console.log('bh', bh);

      //appendnew_next_sd_n4nRrKPEshmLxTLw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_n4nRrKPEshmLxTLw');
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
  //appendnew_flow_bankComponent_Catch
}
