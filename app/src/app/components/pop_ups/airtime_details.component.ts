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
  selector: 'bh-airtime_details',
  templateUrl: './airtime_details.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class airtime_detailsComponent {
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
      this.sd_zjpiWOyBFghSqCKH(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_zjpiWOyBFghSqCKH(bh) {
    try {
      bh = this.sd_2nITGwhCd7PRhjq6(bh);
      //appendnew_next_sd_zjpiWOyBFghSqCKH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zjpiWOyBFghSqCKH');
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
      bh = this.sd_Vu3Q5zgctIyUOJZl(bh);
      //appendnew_next_goBackToBank
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gqaQbtmVTkZueI6r');
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
      bh = this.sd_4ROZjjy39sOjCcZW(bh);
      //appendnew_next_buy
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_x1qBKHWc0vQI4xpo');
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
      bh = this.sd_RXYbpHEPujHY7QNe(bh);
      //appendnew_next_goBack
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_st5m0B8MGxGA7FgV');
    }
  }
  //appendnew_flow_airtime_detailsComponent_start

  sd_2nITGwhCd7PRhjq6(bh) {
    try {
      bh = this.sd_L0DOWUtYu3QzOwWj(bh);
      //appendnew_next_sd_2nITGwhCd7PRhjq6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2nITGwhCd7PRhjq6');
    }
  }

  sd_L0DOWUtYu3QzOwWj(bh) {
    try {
      bh = this.sd_m1B9ke7dS6biVQd9(bh);
      //appendnew_next_sd_L0DOWUtYu3QzOwWj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_L0DOWUtYu3QzOwWj');
    }
  }

  sd_m1B9ke7dS6biVQd9(bh) {
    try {
      this.page.loggedInUser = JSON.parse(sessionStorage.getItem('user'));
      bh = this.sd_vbyqwlYUD9u6Q1n9(bh);
      //appendnew_next_sd_m1B9ke7dS6biVQd9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_m1B9ke7dS6biVQd9');
    }
  }

  sd_vbyqwlYUD9u6Q1n9(bh) {
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
        cell: new FormControl(page.loggedInUser.cell),
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

      //appendnew_next_sd_vbyqwlYUD9u6Q1n9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vbyqwlYUD9u6Q1n9');
    }
  }

  async sd_Vu3Q5zgctIyUOJZl(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/bank');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_Vu3Q5zgctIyUOJZl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Vu3Q5zgctIyUOJZl');
    }
  }

  async sd_4ROZjjy39sOjCcZW(bh) {
    try {
      if (
        this.sdService.operators['gte'](
          this.page.loggedInUser.balance,
          this.page.airtimeForm.value.amount,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_6hCfCYi0nbrxfeGQ(bh);
      } else {
        bh = await this.sd_CujTaU6EN7rlvVg2(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4ROZjjy39sOjCcZW');
    }
  }

  sd_6hCfCYi0nbrxfeGQ(bh) {
    try {
      const page = this.page;
      console.log('airtimeForm', page.airtimeForm.value);

      page.loggedInUser.balance =
        page.loggedInUser.balance - page.airtimeForm.value.amount;

      console.log('page', page);
      bh = this.sd_sxgmbQZXtgUmpagW(bh);
      //appendnew_next_sd_6hCfCYi0nbrxfeGQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6hCfCYi0nbrxfeGQ');
    }
  }

  sd_sxgmbQZXtgUmpagW(bh) {
    try {
      sessionStorage.setItem('user', JSON.stringify(this.page.loggedInUser));
      bh = this.sd_Igh9Z5stTzYOVqCk(bh);
      //appendnew_next_sd_sxgmbQZXtgUmpagW
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sxgmbQZXtgUmpagW');
    }
  }

  sd_Igh9Z5stTzYOVqCk(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_lAbfwbbbbQzhZxvw(bh);
      //appendnew_next_sd_Igh9Z5stTzYOVqCk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Igh9Z5stTzYOVqCk');
    }
  }

  sd_lAbfwbbbbQzhZxvw(bh) {
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
      bh = this.sd_G4qQFwO4pCp2Hm3h(bh);
      //appendnew_next_sd_lAbfwbbbbQzhZxvw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lAbfwbbbbQzhZxvw');
    }
  }

  async sd_G4qQFwO4pCp2Hm3h(bh) {
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
      bh = this.sd_0Pb0Uhvb5rO399T1(bh);
      //appendnew_next_sd_G4qQFwO4pCp2Hm3h
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_G4qQFwO4pCp2Hm3h');
    }
  }

  async sd_0Pb0Uhvb5rO399T1(bh) {
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
      bh = this.sd_eIipOQSbbRJCI0Ka(bh);
      //appendnew_next_sd_0Pb0Uhvb5rO399T1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0Pb0Uhvb5rO399T1');
    }
  }

  sd_eIipOQSbbRJCI0Ka(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Purchase Successful', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      bh = this.sd_hKRqPgBx5eOz9254(bh);
      //appendnew_next_sd_eIipOQSbbRJCI0Ka
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_eIipOQSbbRJCI0Ka');
    }
  }

  async sd_hKRqPgBx5eOz9254(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/bank');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_hKRqPgBx5eOz9254
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hKRqPgBx5eOz9254');
    }
  }

  sd_CujTaU6EN7rlvVg2(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('Insufficent funds', 'Ok', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_CujTaU6EN7rlvVg2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CujTaU6EN7rlvVg2');
    }
  }

  async sd_RXYbpHEPujHY7QNe(bh) {
    try {
      const commonInstance: common = this.__page_injector__.get(common);

      let outputVariables = await commonInstance.goBack();

      //appendnew_next_sd_RXYbpHEPujHY7QNe
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RXYbpHEPujHY7QNe');
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
  //appendnew_flow_airtime_detailsComponent_Catch
}
