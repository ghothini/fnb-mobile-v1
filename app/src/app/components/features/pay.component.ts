// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Location } from '@angular/common'; //_splitter_
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
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
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
      bh = this.sd_mYq7iz7SEzt8K1tZ(bh);
      //appendnew_next_submit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_INsPkoF2I6stXxZP');
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
      bh = this.sd_v9qn1dR9qFe8IDbr(bh);
      //appendnew_next_allowNumbers
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wU87Sten91GyJyJA');
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
      this.page.showSpinner = false;
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

      page.payForm = new FormGroup({
        customer: new FormControl(page.loggedInUser.name),
        recipientName: new FormControl('', Validators.required),
        cardNumber: new FormControl(page.loggedInUser.accountNumber),
        amount: new FormControl('', Validators.required),
        ownRef: new FormControl('', Validators.required),
        recipientRef: new FormControl(''),
        email: new FormControl(page.loggedInUser.email),
        sendProof: new FormControl('', Validators.required),
        transactionDate: new FormControl(page.formattedDate),
      });

      bh = this.sd_tFci8iV2ctBF5MIl(bh);
      //appendnew_next_sd_5nGehRQGAKuqGXV3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5nGehRQGAKuqGXV3');
    }
  }

  sd_tFci8iV2ctBF5MIl(bh) {
    try {
      localStorage.setItem('selectedPage', JSON.stringify('Pay'));
      //appendnew_next_sd_tFci8iV2ctBF5MIl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tFci8iV2ctBF5MIl');
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

  async sd_mYq7iz7SEzt8K1tZ(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          this.page.payForm.status,
          'VALID',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_mN43q02NijFPwvIP(bh);
      } else {
        bh = await this.sd_METwXwgOsk2ebHtJ(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mYq7iz7SEzt8K1tZ');
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
      page.showSpinner = true;
      page.loggedInUser.balance =
        page.loggedInUser.balance - page.payForm.value.amount;

      bh = this.sd_wuJbdiHRyvy8O0e6(bh);
      //appendnew_next_sd_87u5vf1sAWZgg8wZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_87u5vf1sAWZgg8wZ');
    }
  }

  sd_wuJbdiHRyvy8O0e6(bh) {
    try {
      this.page.ssdURL = bh.system.environment.properties.ssdURL;
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
      bh.url = page.ssdURL + 'pay';
      bh.url_update = page.ssdURL + 'update';
      bh.url_user = page.ssdURL + 'get-users';

      // Add in pay
      bh.body = page.payForm.value;

      // update in users
      bh.body2 = {
        email: page.loggedInUser.email,
        collection: 'users',
        balance: page.loggedInUser.balance,
      };
      bh = this.buyPost(bh);
      //appendnew_next_sd_Tcg4UXywzDFqRyjt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Tcg4UXywzDFqRyjt');
    }
  }

  async buyPost(bh) {
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
      bh = this.update(bh);
      //appendnew_next_buyPost
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rmwAjgJ2A0YZw6xb');
    }
  }

  async update(bh) {
    try {
      let requestOptions = {
        url: bh.url_update,
        method: 'put',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.body2,
      };
      this.page.update = await this.sdService.nHttpRequest(requestOptions);
      bh = this.getUser(bh);
      //appendnew_next_update
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oDh5uXHf5qoEZzTv');
    }
  }

  async getUser(bh) {
    try {
      let requestOptions = {
        url: bh.url_user,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      this.page.get_user = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_U2xXQRRxoE5SCP4h(bh);
      //appendnew_next_getUser
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zWNR3bKbToUrCEoF');
    }
  }

  sd_U2xXQRRxoE5SCP4h(bh) {
    try {
      const page = this.page;
      bh.found = page.get_user.find((user: any) => {
        return user.email == page.loggedInUser.email;
      });

      page.showSpinner = false;

      bh = this.sd_0BVRABPBifM9oHQD(bh);
      //appendnew_next_sd_U2xXQRRxoE5SCP4h
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_U2xXQRRxoE5SCP4h');
    }
  }

  sd_0BVRABPBifM9oHQD(bh) {
    try {
      sessionStorage.setItem('user', JSON.stringify(bh.found));
      bh = this.sd_yegflL4smDHdpDeI(bh);
      //appendnew_next_sd_0BVRABPBifM9oHQD
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0BVRABPBifM9oHQD');
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
        this.sdService.getPathAndQParamsObj('/home/bank');
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

  sd_METwXwgOsk2ebHtJ(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('Fill in all fields', 'Ok', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_METwXwgOsk2ebHtJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_METwXwgOsk2ebHtJ');
    }
  }

  sd_v9qn1dR9qFe8IDbr(bh) {
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
      //appendnew_next_sd_v9qn1dR9qFe8IDbr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_v9qn1dR9qFe8IDbr');
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
