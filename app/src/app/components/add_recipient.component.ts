// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { FormBuilder } from '@angular/forms'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { common } from 'app/sd-services/common'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-add_recipient',
  templateUrl: './add_recipient.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class add_recipientComponent {
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
      this.sd_Gfr2hHDFOoFQAimW(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_Gfr2hHDFOoFQAimW(bh) {
    try {
      bh = this.sd_M7ZV5kANBoFKgwCG(bh);
      //appendnew_next_sd_Gfr2hHDFOoFQAimW
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Gfr2hHDFOoFQAimW');
    }
  }

  submit(form: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form };
      bh.local = {};
      bh = this.sd_qbhHZa919CS4d1h2(bh);
      //appendnew_next_submit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ODrh3Sfx1REEWwne');
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
      bh = this.sd_CMNsoXJuSmqjTssG(bh);
      //appendnew_next_allowNumbers
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kNCFhOLZejvpWiLg');
    }
  }
  //appendnew_flow_add_recipientComponent_start

  sd_M7ZV5kANBoFKgwCG(bh) {
    try {
      this.page.recipient = undefined;
      bh = this.sd_E2V426LzUJrHoQKU(bh);
      //appendnew_next_sd_M7ZV5kANBoFKgwCG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_M7ZV5kANBoFKgwCG');
    }
  }

  sd_E2V426LzUJrHoQKU(bh) {
    try {
      localStorage.setItem('selectedPage', JSON.stringify('Add Recipient'));
      bh = this.sd_rKgw42ditcdlC767(bh);
      //appendnew_next_sd_E2V426LzUJrHoQKU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_E2V426LzUJrHoQKU');
    }
  }

  sd_rKgw42ditcdlC767(bh) {
    try {
      this.page.user = JSON.parse(sessionStorage.getItem('user'));
      bh = this.sd_k8OaqriVZGMeUJWf(bh);
      //appendnew_next_sd_rKgw42ditcdlC767
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rKgw42ditcdlC767');
    }
  }

  sd_k8OaqriVZGMeUJWf(bh) {
    try {
      const page = this.page;
      page.recipient = {
        name: '',
        accountNumber: '',
        email: page.user.email,
      };
      //appendnew_next_sd_k8OaqriVZGMeUJWf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_k8OaqriVZGMeUJWf');
    }
  }

  async sd_qbhHZa919CS4d1h2(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.input.form.valid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_WICiulyiS6FI5sYx(bh);
      } else {
        bh = await this.sd_L5sZZkQobJ66k5uM(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qbhHZa919CS4d1h2');
    }
  }

  sd_WICiulyiS6FI5sYx(bh) {
    try {
      const page = this.page;
      page.showSpinner = true;
      bh = this.sd_kEhsPmGmgY60nlvK(bh);
      //appendnew_next_sd_WICiulyiS6FI5sYx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WICiulyiS6FI5sYx');
    }
  }

  async sd_kEhsPmGmgY60nlvK(bh) {
    try {
      const commonInstance: common = this.__page_injector__.get(common);

      let outputVariables = await commonInstance.setVariable(
        this.page.recipient
      );
      bh.result = outputVariables.input.data;

      bh = this.sd_177791i56e9PKy6Z(bh);
      //appendnew_next_sd_kEhsPmGmgY60nlvK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kEhsPmGmgY60nlvK');
    }
  }

  sd_177791i56e9PKy6Z(bh) {
    try {
      const page = this.page;
      page.showSpinner = false;
      bh = this.sd_gDwdTRFRVt5EAv8c(bh);
      //appendnew_next_sd_177791i56e9PKy6Z
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_177791i56e9PKy6Z');
    }
  }

  async sd_gDwdTRFRVt5EAv8c(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/recipient_data');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_sd_gDwdTRFRVt5EAv8c
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gDwdTRFRVt5EAv8c');
    }
  }

  sd_L5sZZkQobJ66k5uM(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Fill in all details', 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_L5sZZkQobJ66k5uM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_L5sZZkQobJ66k5uM');
    }
  }

  sd_CMNsoXJuSmqjTssG(bh) {
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
      //appendnew_next_sd_CMNsoXJuSmqjTssG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CMNsoXJuSmqjTssG');
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
  //appendnew_flow_add_recipientComponent_Catch
}
