// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms'; //_splitter_
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
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
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

  buy(form: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form };
      bh.local = {};
      bh = this.sd_uSvAU4XSF5ERlRwS(bh);
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

  allowNumbers(event: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event };
      bh.local = {};
      bh = this.sd_AsUcVEf2bwM8DEI5(bh);
      //appendnew_next_allowNumbers
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_J4bPS5NRuJHVdl5z');
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
      this.page.showSpinner = false;
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
        cell: new FormControl('', Validators.required),
        networkProvider: new FormControl('', Validators.required),
        bundleType: new FormControl('Airtime'),
        amount: new FormControl('', Validators.required),
        fromAccount: new FormControl('Easy Zero'),
        email: new FormControl(page.loggedInUser.email),
        transactionDate: new FormControl(page.formattedDate),
      });

      page.networkProvider = [
        { value: 'delhi-0', viewValue: 'Delhi' },
        { value: 'mumbai-1', viewValue: 'Mumbai' },
        { value: 'pune-2', viewValue: 'Pune' },
      ];

      bh = this.sd_CGHc3pbnJjTzQ7el(bh);
      //appendnew_next_sd_rJRe6FEsisjK0BOC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rJRe6FEsisjK0BOC');
    }
  }

  sd_CGHc3pbnJjTzQ7el(bh) {
    try {
      localStorage.setItem('selectedPage', JSON.stringify('Purchase Details'));
      //appendnew_next_sd_CGHc3pbnJjTzQ7el
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CGHc3pbnJjTzQ7el');
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

  async sd_uSvAU4XSF5ERlRwS(bh) {
    try {
      if (
        this.sdService.operators['true'](
          this.page.airtimeForm.invalid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_J0ZcqFWP8tjcHkKO(bh);
      } else {
        bh = await this.sd_LL8fJw3h4l2Q1sMn(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uSvAU4XSF5ERlRwS');
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
      page.showSpinner = true;
      page.loggedInUser.balance =
        page.loggedInUser.balance - page.airtimeForm.value.amount;
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
      this.page.ssdURL = bh.system.environment.properties.ssdURL;
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
      bh.url = page.ssdURL + 'buy-airtime';
      bh.url2 = page.ssdURL + 'update';
      bh.url_get = page.ssdURL + `get-users`;

      bh.body = page.airtimeForm.value;

      bh.body2 = {
        email: page.loggedInUser.email,
        collection: 'users',
        balance: page.loggedInUser.balance,
      };
      bh = this.buyAirtime(bh);
      //appendnew_next_sd_tdwCuy894ZgUM7nx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tdwCuy894ZgUM7nx');
    }
  }

  async buyAirtime(bh) {
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
      bh = this.updateUser(bh);
      //appendnew_next_buyAirtime
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SsPmsyckLWULE36b');
    }
  }

  async updateUser(bh) {
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
      bh = this.getUser(bh);
      //appendnew_next_updateUser
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_151xn46uUHeCLgN3');
    }
  }

  async getUser(bh) {
    try {
      let requestOptions = {
        url: bh.url_get,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      this.page.get_user = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_G6LgCezreEDe39ZL(bh);
      //appendnew_next_getUser
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_x86XYZre0jtEn7A5');
    }
  }

  sd_G6LgCezreEDe39ZL(bh) {
    try {
      const page = this.page;
      page.showSpinner = false;

      bh.foundUser = page.get_user.find((user: any) => {
        return user.email == page.loggedInUser.email;
      });

      bh = this.sd_kLxQN65XQwLECWBg(bh);
      //appendnew_next_sd_G6LgCezreEDe39ZL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_G6LgCezreEDe39ZL');
    }
  }

  sd_kLxQN65XQwLECWBg(bh) {
    try {
      sessionStorage.setItem('user', JSON.stringify(bh.foundUser));
      bh = this.sd_3kYbKQMbfceW6u51(bh);
      //appendnew_next_sd_kLxQN65XQwLECWBg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kLxQN65XQwLECWBg');
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
        this.sdService.getPathAndQParamsObj('/home/airtime');
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

  sd_J0ZcqFWP8tjcHkKO(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('All fields are required', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_J0ZcqFWP8tjcHkKO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_J0ZcqFWP8tjcHkKO');
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

  sd_AsUcVEf2bwM8DEI5(bh) {
    try {
      const page = this.page;
      bh.allowedKeys = [
        'Backspace',
        'ArrowLeft',
        'ArrowRight',
        'Delete',
        'Control',
      ]; // Add any other allowed keys here
      if (
        bh.allowedKeys.includes(bh.input.event.key) ||
        (bh.input.event.ctrlKey &&
          (bh.input.event.key === 'v' || bh.input.event.key === 'c'))
      ) {
        return; // Allow these keys
      }

      if (!/^\d$/.test(bh.input.event.key)) {
        bh.input.event.preventDefault(); // Prevent non-numeric keys
      }
      //appendnew_next_sd_AsUcVEf2bwM8DEI5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AsUcVEf2bwM8DEI5');
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
