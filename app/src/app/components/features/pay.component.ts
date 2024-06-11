// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Location } from '@angular/common'; //_splitter_
import { Component, Injector } from '@angular/core'; //_splitter_
import { FormControl, FormGroup } from '@angular/forms'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-pay',
  templateUrl: './pay.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class payComponent {
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
      this.sd_6GhdTfAuBFE9oMiE(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_6GhdTfAuBFE9oMiE(bh) {
    try {
      bh = this.sd_ZhlDKIJRRL4nzAgh(bh);
      //appendnew_next_sd_6GhdTfAuBFE9oMiE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6GhdTfAuBFE9oMiE');
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
      bh = this.sd_1EOLIrXTI0AkSa1Z(bh);
      //appendnew_next_goBack
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mdqDUC8ULYpYbes1');
    }
  }

  submit(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_mN43q02NijFPwvIP(bh);
      //appendnew_next_submit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_INsPkoF2I6stXxZP');
    }
  }
  //appendnew_flow_payComponent_start

  sd_ZhlDKIJRRL4nzAgh(bh) {
    try {
      bh = this.sd_Z07RwCfbca3o40KI(bh);
      //appendnew_next_sd_ZhlDKIJRRL4nzAgh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZhlDKIJRRL4nzAgh');
    }
  }

  sd_Z07RwCfbca3o40KI(bh) {
    try {
      this.page.quote = undefined;
      bh = this.sd_94UUEejAMkL5eMjJ(bh);
      //appendnew_next_sd_Z07RwCfbca3o40KI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Z07RwCfbca3o40KI');
    }
  }

  sd_94UUEejAMkL5eMjJ(bh) {
    try {
      this.page.loggedInUser = JSON.parse(sessionStorage.getItem('user'));
      bh = this.sd_5nGehRQGAKuqGXV3(bh);
      //appendnew_next_sd_94UUEejAMkL5eMjJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_94UUEejAMkL5eMjJ');
    }
  }

  sd_5nGehRQGAKuqGXV3(bh) {
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

      const date = new Date();

      const day = date.getDate();
      const month = date.toLocaleString('default', { month: 'long' });
      const year = date.getFullYear();
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');

      page.formattedDate = `${day} ${month} ${year} ${hours}:${minutes}`;

      console.log('page', page);

      page.payForm = new FormGroup({
        customer: new FormControl(page.loggedInUser.name),
        recipientName: new FormControl(''),
        cardNumber: new FormControl(page.loggedInUser.accountNumber),
        amount: new FormControl(''),
        ownRef: new FormControl(''),
        recipientRef: new FormControl(''),
        email: new FormControl(page.loggedInUser.email),
        sendProof: new FormControl(''),
        transactionDate: new FormControl(page.formattedDate),
      });

      //appendnew_next_sd_5nGehRQGAKuqGXV3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5nGehRQGAKuqGXV3');
    }
  }

  sd_1EOLIrXTI0AkSa1Z(bh) {
    try {
      this.page.location = this.__page_injector__.get(Location);
      bh = this.sd_bmX0GiQp6NaZ3grS(bh);
      //appendnew_next_sd_1EOLIrXTI0AkSa1Z
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1EOLIrXTI0AkSa1Z');
    }
  }

  sd_bmX0GiQp6NaZ3grS(bh) {
    try {
      const page = this.page;
      page.location.back();

      //appendnew_next_sd_bmX0GiQp6NaZ3grS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bmX0GiQp6NaZ3grS');
    }
  }

  async sd_mN43q02NijFPwvIP(bh) {
    try {
      if (
        this.sdService.operators['gte'](
          this.page.loggedInUser.balance,
          this.page.payForm.value.amount,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_87u5vf1sAWZgg8wZ(bh);
      } else {
        bh = await this.sd_2M9yLasHjJOVIazz(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mN43q02NijFPwvIP');
    }
  }

  sd_87u5vf1sAWZgg8wZ(bh) {
    try {
      const page = this.page;
      console.log('submitted page', page.payForm.value);

      page.loggedInUser.balance =
        page.loggedInUser.balance - page.payForm.value.amount;

      console.log('page', page);
      bh = this.sd_TlB7htOQ8ofL8HQx(bh);
      //appendnew_next_sd_87u5vf1sAWZgg8wZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_87u5vf1sAWZgg8wZ');
    }
  }

  sd_TlB7htOQ8ofL8HQx(bh) {
    try {
      sessionStorage.setItem('user', JSON.stringify(this.page.loggedInUser));
      bh = this.sd_wuJbdiHRyvy8O0e6(bh);
      //appendnew_next_sd_TlB7htOQ8ofL8HQx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TlB7htOQ8ofL8HQx');
    }
  }

  sd_wuJbdiHRyvy8O0e6(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_Tcg4UXywzDFqRyjt(bh);
      //appendnew_next_sd_wuJbdiHRyvy8O0e6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wuJbdiHRyvy8O0e6');
    }
  }

  sd_Tcg4UXywzDFqRyjt(bh) {
    try {
      const page = this.page;
      bh.url = `https://111e-169-239-176-9.ngrok-free.app/api/pay`;
      bh.url2 = `https://111e-169-239-176-9.ngrok-free.app/api/update`;

      // Add in pay
      bh.body = page.payForm.value;

      // update in users
      bh.body2 = {
        email: page.loggedInUser.email,
        collection: 'users',
        balance: page.loggedInUser.balance,
      };
      bh = this.sd_DYB2LfCrhED6xWGT(bh);
      //appendnew_next_sd_Tcg4UXywzDFqRyjt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Tcg4UXywzDFqRyjt');
    }
  }

  async sd_DYB2LfCrhED6xWGT(bh) {
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
      bh = this.sd_uxzf2cB3321WVCck(bh);
      //appendnew_next_sd_DYB2LfCrhED6xWGT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DYB2LfCrhED6xWGT');
    }
  }

  async sd_uxzf2cB3321WVCck(bh) {
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
      bh = this.sd_yegflL4smDHdpDeI(bh);
      //appendnew_next_sd_uxzf2cB3321WVCck
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uxzf2cB3321WVCck');
    }
  }

  sd_yegflL4smDHdpDeI(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('Pay Successful', 'Ok', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      bh = this.sd_te8Ame92IoqQehLd(bh);
      //appendnew_next_sd_yegflL4smDHdpDeI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yegflL4smDHdpDeI');
    }
  }

  async sd_te8Ame92IoqQehLd(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/bank');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_te8Ame92IoqQehLd
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_te8Ame92IoqQehLd');
    }
  }

  sd_2M9yLasHjJOVIazz(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('Insufficent funds', 'Ok', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_2M9yLasHjJOVIazz
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2M9yLasHjJOVIazz');
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
  //appendnew_flow_payComponent_Catch
}
