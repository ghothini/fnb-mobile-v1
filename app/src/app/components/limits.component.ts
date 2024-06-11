// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { FormControl, FormGroup, Validators } from '@angular/forms'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { common } from 'app/sd-services/common'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-limits',
  templateUrl: './limits.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class limitsComponent {
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
      this.sd_bk9iYnDDXkqipMt5(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_bk9iYnDDXkqipMt5(bh) {
    try {
      bh = this.sd_L71dMFp8ELSXvdR6(bh);
      //appendnew_next_sd_bk9iYnDDXkqipMt5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bk9iYnDDXkqipMt5');
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
      bh = this.sd_b0Qu37P5ojbtrECl(bh);
      //appendnew_next_goBack
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bZCvoXOCXM7qEgPz');
    }
  }

  changeLimits(form: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form };
      bh.local = {};
      bh = this.sd_ZPC7PjaNuuTiIJNA(bh);
      //appendnew_next_changeLimits
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hxe3t0gMk44EwbqG');
    }
  }
  //appendnew_flow_limitsComponent_start

  sd_L71dMFp8ELSXvdR6(bh) {
    try {
      bh = this.sd_QmkAYlNdJ9mGSFYz(bh);
      //appendnew_next_sd_L71dMFp8ELSXvdR6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_L71dMFp8ELSXvdR6');
    }
  }

  sd_QmkAYlNdJ9mGSFYz(bh) {
    try {
      this.page.changeLimitsForm = undefined;
      bh = this.sd_ZUexHrSTJi7SwpSG(bh);
      //appendnew_next_sd_QmkAYlNdJ9mGSFYz
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QmkAYlNdJ9mGSFYz');
    }
  }

  sd_ZUexHrSTJi7SwpSG(bh) {
    try {
      const page = this.page;
      page.changeLimitsForm = new FormGroup({
        transfers: new FormControl('', [Validators.required]),
        payments: new FormControl('', [Validators.required]),
        payAndClear: new FormControl('', [Validators.required]),
        prepaid: new FormControl('', [Validators.required]),
        sendMoney: new FormControl('', [Validators.required]),
        vouchers: new FormControl('', [Validators.required]),
        cardlessCashWithdrawal: new FormControl('', [Validators.required]),
      });

      bh = this.sd_cwmv1n3H7vtrUgp9(bh);
      //appendnew_next_sd_ZUexHrSTJi7SwpSG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZUexHrSTJi7SwpSG');
    }
  }

  sd_cwmv1n3H7vtrUgp9(bh) {
    try {
      this.page.result = JSON.parse(sessionStorage.getItem('user'));
      bh = this.sd_He707OrmkxeYVodm(bh);
      //appendnew_next_sd_cwmv1n3H7vtrUgp9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cwmv1n3H7vtrUgp9');
    }
  }

  sd_He707OrmkxeYVodm(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_igYQZYB0wwxjPJIx(bh);
      //appendnew_next_sd_He707OrmkxeYVodm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_He707OrmkxeYVodm');
    }
  }

  sd_igYQZYB0wwxjPJIx(bh) {
    try {
      const page = this.page;
      bh.body = {
        // email: page.userDetails.email,
        // username: page.usernameForm.value.username,
        // collection: 'users'
      };

      bh.url1 = page.ssdUrl + `get-limit/${page.result._id}`;

      bh = this.sd_8BLGEcNOEIvq4nwb(bh);
      //appendnew_next_sd_igYQZYB0wwxjPJIx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_igYQZYB0wwxjPJIx');
    }
  }

  async sd_8BLGEcNOEIvq4nwb(bh) {
    try {
      let requestOptions = {
        url: bh.url1,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.body,
      };
      this.page.data = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_gJ5z914BxWPfHOJf(bh);
      //appendnew_next_sd_8BLGEcNOEIvq4nwb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8BLGEcNOEIvq4nwb');
    }
  }

  sd_gJ5z914BxWPfHOJf(bh) {
    try {
      const page = this.page;

      page.changeLimitsForm = new FormGroup({
        transfers: new FormControl(page.data.transfers, Validators.required),
        payments: new FormControl(page.data.payments, [Validators.required]),
        payAndClear: new FormControl(page.data.payAndClear, [
          Validators.required,
        ]),
        prepaid: new FormControl(page.data.prepaid, [Validators.required]),
        sendMoney: new FormControl(page.data.sendMoney, [Validators.required]),
        vouchers: new FormControl(page.data.vouchers, [Validators.required]),
        cardlessCashWithdrawal: new FormControl(
          page.data.cardlessCashWithdrawal,
          [Validators.required]
        ),
      });

      bh = this.sd_MLZqsWOuCTHErd5S(bh);
      //appendnew_next_sd_gJ5z914BxWPfHOJf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gJ5z914BxWPfHOJf');
    }
  }

  sd_MLZqsWOuCTHErd5S(bh) {
    try {
      this.page.transfers = this.page.data.transfers;
      this.page.payAndClear = this.page.data.payAndClear;
      this.page.payments = this.page.data.payments;
      this.page.prepaid = this.page.data.prepaid;
      this.page.sendMoney = this.page.data.sendMoney;
      this.page.vouchers = this.page.data.vouchers;
      this.page.cardlessCashWithdrawal = this.page.data.cardlessCashWithdrawal;
      //appendnew_next_sd_MLZqsWOuCTHErd5S
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MLZqsWOuCTHErd5S');
    }
  }

  async sd_b0Qu37P5ojbtrECl(bh) {
    try {
      const commonInstance: common = this.__page_injector__.get(common);

      let outputVariables = await commonInstance.goBack();

      //appendnew_next_sd_b0Qu37P5ojbtrECl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_b0Qu37P5ojbtrECl');
    }
  }

  sd_ZPC7PjaNuuTiIJNA(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_1P36hwFlABCvZYmR(bh);
      //appendnew_next_sd_ZPC7PjaNuuTiIJNA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZPC7PjaNuuTiIJNA');
    }
  }

  sd_1P36hwFlABCvZYmR(bh) {
    try {
      const page = this.page;
      bh.input.form = {
        email: page.data.email,
        collection: 'users',
        cardlessCashWithdrawal: bh.input.form.value.cardlessCashWithdrawal,
        payAndClear: bh.input.form.value.payAndClear,
        payments: bh.input.form.value.payments,
        prepaid: bh.input.form.value.prepaid,
        sendMoney: bh.input.form.value.sendMoney,
        transfers: bh.input.form.value.transfers,
        vouchers: bh.input.form.value.vouchers,
      };

      bh.input.form2 = {
        collection: 'limits',
      };

      bh.url2 = `https://111e-169-239-176-9.ngrok-free.app/api/update-limits`;
      bh.url3 = `https://111e-169-239-176-9.ngrok-free.app/api/get-limit/${page.data._id}`;

      bh = this.sd_5iTDLklc90d8NiC2(bh);
      //appendnew_next_sd_1P36hwFlABCvZYmR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1P36hwFlABCvZYmR');
    }
  }

  async sd_5iTDLklc90d8NiC2(bh) {
    try {
      let requestOptions = {
        url: bh.url2,
        method: 'put',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.input.form,
      };
      this.page.data = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_XD8AoTvru87ILYsy(bh);
      //appendnew_next_sd_5iTDLklc90d8NiC2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5iTDLklc90d8NiC2');
    }
  }

  async sd_XD8AoTvru87ILYsy(bh) {
    try {
      let requestOptions = {
        url: bh.url3,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.input.form2,
      };
      bh.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_UxLBy8bqL5HenyXM(bh);
      //appendnew_next_sd_XD8AoTvru87ILYsy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XD8AoTvru87ILYsy');
    }
  }

  sd_UxLBy8bqL5HenyXM(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('Limits Changed', 'OK', {
        duration: 4000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      bh = this.sd_FuYXdmyecIa2TJMC(bh);
      //appendnew_next_sd_UxLBy8bqL5HenyXM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UxLBy8bqL5HenyXM');
    }
  }

  async sd_FuYXdmyecIa2TJMC(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/settings');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_FuYXdmyecIa2TJMC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FuYXdmyecIa2TJMC');
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
  //appendnew_flow_limitsComponent_Catch
}
