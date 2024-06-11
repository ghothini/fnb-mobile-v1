// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { FormControl, FormGroup } from '@angular/forms'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { common } from 'app/sd-services/common'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-airtimeAnother_details',
  templateUrl: './airtimeAnother_details.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class airtimeAnother_detailsComponent {
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
      this.sd_ZWk7CgWAoxHijQE6(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_ZWk7CgWAoxHijQE6(bh) {
    try {
      bh = this.sd_1ptxED68vGFSlRem(bh);
      //appendnew_next_sd_ZWk7CgWAoxHijQE6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZWk7CgWAoxHijQE6');
    }
  }

  goBackToBank(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_SzCWSYT8XYgFrrQm(bh);
      //appendnew_next_goBackToBank
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4Q1xgT0qxMdjxRHG');
    }
  }

  buy(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_LL8fJw3h4l2Q1sMn(bh);
      //appendnew_next_buy
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Aoh8QiXBxIq3gyFE');
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
      bh = this.sd_O1GYd8CKhEQuhXxH(bh);
      //appendnew_next_goBack
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZyaE807FtlayvVOS');
    }
  }
  //appendnew_flow_airtimeAnother_detailsComponent_start

  sd_1ptxED68vGFSlRem(bh) {
    try {
      bh = this.sd_I6Ck8WFM6r3yfT8O(bh);
      //appendnew_next_sd_1ptxED68vGFSlRem
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1ptxED68vGFSlRem');
    }
  }

  sd_I6Ck8WFM6r3yfT8O(bh) {
    try {
      bh = this.sd_qhiPYM3uEmm0N3w3(bh);
      //appendnew_next_sd_I6Ck8WFM6r3yfT8O
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_I6Ck8WFM6r3yfT8O');
    }
  }

  sd_qhiPYM3uEmm0N3w3(bh) {
    try {
      this.page.loggedInUser = JSON.parse(sessionStorage.getItem('user'));
      bh = this.sd_rJRe6FEsisjK0BOC(bh);
      //appendnew_next_sd_qhiPYM3uEmm0N3w3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qhiPYM3uEmm0N3w3');
    }
  }

  sd_rJRe6FEsisjK0BOC(bh) {
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

      const date = new Date();

      const day = date.getDate();
      const month = date.toLocaleString('default', { month: 'long' });
      const year = date.getFullYear();
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');

      page.formattedDate = `${day} ${month} ${year} ${hours}:${minutes}`;

      page.airtimeForm = new FormGroup({
        customer: new FormControl(page.loggedInUser.name),
        cell: new FormControl(''),
        networkProvider: new FormControl(''),
        bundleType: new FormControl('Airtime'),
        amount: new FormControl(''),
        fromAccount: new FormControl('Easy Zero'),
        transactionDate: new FormControl(page.formattedDate),
      });

      page.networkProvider = [
        { value: 'delhi-0', viewValue: 'Delhi' },
        { value: 'mumbai-1', viewValue: 'Mumbai' },
        { value: 'pune-2', viewValue: 'Pune' },
      ];

      //appendnew_next_sd_rJRe6FEsisjK0BOC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rJRe6FEsisjK0BOC');
    }
  }

  async sd_SzCWSYT8XYgFrrQm(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/bank');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_SzCWSYT8XYgFrrQm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SzCWSYT8XYgFrrQm');
    }
  }

  async sd_LL8fJw3h4l2Q1sMn(bh) {
    try {
      if (
        this.sdService.operators['gte'](
          this.page.loggedInUser.balance,
          this.page.airtimeForm.value.amount,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_fUudOu6qnSN7CIJc(bh);
      } else {
        bh = await this.sd_FkO10BcT5ZdxrRKa(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LL8fJw3h4l2Q1sMn');
    }
  }

  sd_fUudOu6qnSN7CIJc(bh) {
    try {
      const page = this.page;
      console.log('airtimeForm', page.airtimeForm.value);

      page.loggedInUser.balance =
        page.loggedInUser.balance - page.airtimeForm.value.amount;

      console.log('page', page);
      bh = this.sd_6J0ILSu31spNrBsr(bh);
      //appendnew_next_sd_fUudOu6qnSN7CIJc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fUudOu6qnSN7CIJc');
    }
  }

  sd_6J0ILSu31spNrBsr(bh) {
    try {
      sessionStorage.setItem('user', JSON.stringify(this.page.loggedInUser));
      bh = this.sd_xqgR99EOqaKxMYIs(bh);
      //appendnew_next_sd_6J0ILSu31spNrBsr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6J0ILSu31spNrBsr');
    }
  }

  sd_xqgR99EOqaKxMYIs(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_tdwCuy894ZgUM7nx(bh);
      //appendnew_next_sd_xqgR99EOqaKxMYIs
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xqgR99EOqaKxMYIs');
    }
  }

  sd_tdwCuy894ZgUM7nx(bh) {
    try {
      const page = this.page;
      bh.url = `https://111e-169-239-176-9.ngrok-free.app/api/buy-airtime`;
      bh.url2 = `https://111e-169-239-176-9.ngrok-free.app/api/update`;

      bh.body = page.airtimeForm.value;

      bh.body2 = {
        email: page.loggedInUser.email,
        collection: 'users',
        balance: page.loggedInUser.balance,
      };
      bh = this.sd_SsPmsyckLWULE36b(bh);
      //appendnew_next_sd_tdwCuy894ZgUM7nx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tdwCuy894ZgUM7nx');
    }
  }

  async sd_SsPmsyckLWULE36b(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.body,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_151xn46uUHeCLgN3(bh);
      //appendnew_next_sd_SsPmsyckLWULE36b
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SsPmsyckLWULE36b');
    }
  }

  async sd_151xn46uUHeCLgN3(bh) {
    try {
      let requestOptions = {
        url: bh.url2,
        method: 'put',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.body2,
      };
      this.page.update = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_3kYbKQMbfceW6u51(bh);
      //appendnew_next_sd_151xn46uUHeCLgN3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_151xn46uUHeCLgN3');
    }
  }

  sd_3kYbKQMbfceW6u51(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Purchase Successful', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      bh = this.sd_jQfO12W4pPzDwVAg(bh);
      //appendnew_next_sd_3kYbKQMbfceW6u51
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3kYbKQMbfceW6u51');
    }
  }

  async sd_jQfO12W4pPzDwVAg(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/bank');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_jQfO12W4pPzDwVAg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jQfO12W4pPzDwVAg');
    }
  }

  sd_FkO10BcT5ZdxrRKa(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('Insufficent funds', 'Ok', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_FkO10BcT5ZdxrRKa
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FkO10BcT5ZdxrRKa');
    }
  }

  async sd_O1GYd8CKhEQuhXxH(bh) {
    try {
      const commonInstance: common = this.__page_injector__.get(common);

      let outputVariables = await commonInstance.goBack();

      //appendnew_next_sd_O1GYd8CKhEQuhXxH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_O1GYd8CKhEQuhXxH');
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
  //appendnew_flow_airtimeAnother_detailsComponent_Catch
}
