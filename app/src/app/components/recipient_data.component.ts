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
  selector: 'bh-recipient_data',
  templateUrl: './recipient_data.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class recipient_dataComponent {
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
      this.sd_Y2LAyt8yFnpn3ujo(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_Y2LAyt8yFnpn3ujo(bh) {
    try {
      bh = this.sd_FW7bwhhjuc5SamHg(bh);
      //appendnew_next_sd_Y2LAyt8yFnpn3ujo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Y2LAyt8yFnpn3ujo');
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
      bh = this.sd_6GKm3o8AvrFiX6zp(bh);
      //appendnew_next_submit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Ta0Cq4svpsccYeSU');
    }
  }
  //appendnew_flow_recipient_dataComponent_start

  sd_FW7bwhhjuc5SamHg(bh) {
    try {
      this.page.showSpinner = false;
      bh = this.sd_W4BKtSs0gYOZhgpG(bh);
      //appendnew_next_sd_FW7bwhhjuc5SamHg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FW7bwhhjuc5SamHg');
    }
  }

  sd_W4BKtSs0gYOZhgpG(bh) {
    try {
      localStorage.setItem('selectedPage', JSON.stringify('Add Recipient'));
      bh = this.sd_1eHmIx3IPRpwZ2sL(bh);
      //appendnew_next_sd_W4BKtSs0gYOZhgpG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_W4BKtSs0gYOZhgpG');
    }
  }

  sd_1eHmIx3IPRpwZ2sL(bh) {
    try {
      this.page.user = JSON.parse(sessionStorage.getItem('user'));
      bh = this.sd_at6S5CLXdzz5SBXd(bh);
      //appendnew_next_sd_1eHmIx3IPRpwZ2sL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1eHmIx3IPRpwZ2sL');
    }
  }

  async sd_at6S5CLXdzz5SBXd(bh) {
    try {
      const commonInstance: common = this.__page_injector__.get(common);

      let outputVariables = await commonInstance.getVariable();
      bh.result = outputVariables.local.data;

      bh = this.sd_fMI7OaBugQF68gev(bh);
      //appendnew_next_sd_at6S5CLXdzz5SBXd
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_at6S5CLXdzz5SBXd');
    }
  }

  sd_fMI7OaBugQF68gev(bh) {
    try {
      const page = this.page;
      page.recipient = {
        ownRef: '',
        recipientRef: '',
        accountNumber: bh.result.accountNumber,
        name: bh.result.name,
        email: page.user.email,
      };
      //appendnew_next_sd_fMI7OaBugQF68gev
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fMI7OaBugQF68gev');
    }
  }

  async sd_6GKm3o8AvrFiX6zp(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.input.form.valid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_Wy7rzDqnxE0lgbcM(bh);
      } else {
        bh = await this.sd_4nxQgdFO5PT3Y4S0(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6GKm3o8AvrFiX6zp');
    }
  }

  sd_Wy7rzDqnxE0lgbcM(bh) {
    try {
      const page = this.page;
      page.showSpinner = true;
      bh = this.sd_nRTD1AQalJPu0XkV(bh);
      //appendnew_next_sd_Wy7rzDqnxE0lgbcM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Wy7rzDqnxE0lgbcM');
    }
  }

  async sd_nRTD1AQalJPu0XkV(bh) {
    try {
      const commonInstance: common = this.__page_injector__.get(common);

      let outputVariables = await commonInstance.setVariable(
        this.page.recipient
      );
      bh.result = outputVariables.input.data;

      bh = this.sd_ivykFOjnkTcDZkxa(bh);
      //appendnew_next_sd_nRTD1AQalJPu0XkV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nRTD1AQalJPu0XkV');
    }
  }

  sd_ivykFOjnkTcDZkxa(bh) {
    try {
      const page = this.page;
      page.showSpinner = false;
      bh = this.sd_noz2LxSMwpU8JeFX(bh);
      //appendnew_next_sd_ivykFOjnkTcDZkxa
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ivykFOjnkTcDZkxa');
    }
  }

  async sd_noz2LxSMwpU8JeFX(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/confirm_recipient');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_sd_noz2LxSMwpU8JeFX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_noz2LxSMwpU8JeFX');
    }
  }

  sd_4nxQgdFO5PT3Y4S0(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('Fill in all fields', '', {
        duration: 1000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_4nxQgdFO5PT3Y4S0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4nxQgdFO5PT3Y4S0');
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
  //appendnew_flow_recipient_dataComponent_Catch
}
