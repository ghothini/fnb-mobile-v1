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
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
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

  changeLimits(form: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form };
      bh.local = {};
      bh = this.checkingInvalidFields(bh);
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
      this.page.ssdUrl = undefined;
      this.page.showSpinner = false;
      this.page.currentUser = undefined;
      bh = this.sd_ZPC7PjaNuuTiIJNA(bh);
      //appendnew_next_sd_QmkAYlNdJ9mGSFYz
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QmkAYlNdJ9mGSFYz');
    }
  }

  sd_ZPC7PjaNuuTiIJNA(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_cwmv1n3H7vtrUgp9(bh);
      //appendnew_next_sd_ZPC7PjaNuuTiIJNA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZPC7PjaNuuTiIJNA');
    }
  }

  sd_cwmv1n3H7vtrUgp9(bh) {
    try {
      this.page.currentUser = JSON.parse(sessionStorage.getItem('user'));
      bh = this.getUsersLimits(bh);
      //appendnew_next_sd_cwmv1n3H7vtrUgp9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cwmv1n3H7vtrUgp9');
    }
  }

  getUsersLimits(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + `get-limit/${page.currentUser.email}`;
      page.showSpinner = true;
      // Init form
      page.changeLimitsForm = new FormGroup({
        transfers: new FormControl('', Validators.required),
        payments: new FormControl('', [Validators.required]),
        payAndClear: new FormControl('', [Validators.required]),
        prepaid: new FormControl('', [Validators.required]),
        sendMoney: new FormControl('', [Validators.required]),
        vouchers: new FormControl('', [Validators.required]),
        cardlessCashWithdrawal: new FormControl('', [Validators.required]),
      });
      bh = this.sd_8BLGEcNOEIvq4nwb(bh);
      //appendnew_next_getUsersLimits
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_igYQZYB0wwxjPJIx');
    }
  }

  async sd_8BLGEcNOEIvq4nwb(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.body,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_ZUexHrSTJi7SwpSG(bh);
      //appendnew_next_sd_8BLGEcNOEIvq4nwb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8BLGEcNOEIvq4nwb');
    }
  }

  sd_ZUexHrSTJi7SwpSG(bh) {
    try {
      const page = this.page;
      page.showSpinner = false;
      page.changeLimitsForm = new FormGroup({
        transfers: new FormControl(page.result.transfers, Validators.required),
        payments: new FormControl(page.result.payments, [Validators.required]),
        payAndClear: new FormControl(page.result.payAndClear, [
          Validators.required,
        ]),
        prepaid: new FormControl(page.result.prepaid, [Validators.required]),
        sendMoney: new FormControl(page.result.sendMoney, [
          Validators.required,
        ]),
        vouchers: new FormControl(page.result.vouchers, [Validators.required]),
        cardlessCashWithdrawal: new FormControl(
          page.result.cardlessCashWithdrawal,
          [Validators.required]
        ),
      });
      //appendnew_next_sd_ZUexHrSTJi7SwpSG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZUexHrSTJi7SwpSG');
    }
  }

  async checkingInvalidFields(bh) {
    try {
      if (
        this.sdService.operators['true'](
          this.page.changeLimitsForm.invalid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_0UNTamidNxDbi7ES(bh);
      } else {
        bh = await this.sd_1P36hwFlABCvZYmR(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9PK2X8VQgEcrYuzL');
    }
  }

  sd_1P36hwFlABCvZYmR(bh) {
    try {
      const page = this.page;
      page.showSpinner = true;
      bh.url = `${page.ssdUrl}update-limits`;

      bh.input.form = {
        email: page.currentUser.email,
        cardlessCashWithdrawal: bh.input.form.value.cardlessCashWithdrawal,
        payAndClear: bh.input.form.value.payAndClear,
        payments: bh.input.form.value.payments,
        prepaid: bh.input.form.value.prepaid,
        sendMoney: bh.input.form.value.sendMoney,
        transfers: bh.input.form.value.transfers,
        vouchers: bh.input.form.value.vouchers,
      };
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
        url: bh.url,
        method: 'put',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.input.form,
      };
      this.page.data = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_Gs1408wMiAnwWO4l(bh);
      //appendnew_next_sd_5iTDLklc90d8NiC2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5iTDLklc90d8NiC2');
    }
  }

  sd_Gs1408wMiAnwWO4l(bh) {
    try {
      const page = this.page;
      page.showSpinner = false;
      bh = this.sd_UxLBy8bqL5HenyXM(bh);
      //appendnew_next_sd_Gs1408wMiAnwWO4l
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Gs1408wMiAnwWO4l');
    }
  }

  sd_UxLBy8bqL5HenyXM(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Limits updated successfully!', 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      bh = this.sd_80Om8Q1LuwD37QXu(bh);
      //appendnew_next_sd_UxLBy8bqL5HenyXM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UxLBy8bqL5HenyXM');
    }
  }

  async sd_80Om8Q1LuwD37QXu(bh) {
    try {
      const commonInstance: common = this.__page_injector__.get(common);

      let outputVariables = await commonInstance.goBack();

      //appendnew_next_sd_80Om8Q1LuwD37QXu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_80Om8Q1LuwD37QXu');
    }
  }

  sd_0UNTamidNxDbi7ES(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('All fields are required', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_0UNTamidNxDbi7ES
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0UNTamidNxDbi7ES');
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
