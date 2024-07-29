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
//append_imports_end

@Component({
  selector: 'bh-username',
  templateUrl: './username.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class usernameComponent {
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
      this.sd_lDfsEOrYpyiftX3M(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_lDfsEOrYpyiftX3M(bh) {
    try {
      bh = this.sd_GHFhBt0oZxdnQMSY(bh);
      //appendnew_next_sd_lDfsEOrYpyiftX3M
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lDfsEOrYpyiftX3M');
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
      bh = this.sd_C2YdxHcp1LpP8prO(bh);
      //appendnew_next_submit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8Y55FILZiHv0qHei');
    }
  }
  //appendnew_flow_usernameComponent_start

  sd_GHFhBt0oZxdnQMSY(bh) {
    try {
      bh = this.sd_nOdVft6eatxx7Ukt(bh);
      //appendnew_next_sd_GHFhBt0oZxdnQMSY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GHFhBt0oZxdnQMSY');
    }
  }

  sd_nOdVft6eatxx7Ukt(bh) {
    try {
      this.page.usernameForm = undefined;
      this.page.usernamePattern =
        /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@]).{8,30}$/;
      this.page.currentUser = undefined;
      this.page.ssdUrl = undefined;
      this.page.showSpinner = false;
      bh = this.sd_sGlzf6ICld962W6M(bh);
      //appendnew_next_sd_nOdVft6eatxx7Ukt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nOdVft6eatxx7Ukt');
    }
  }

  sd_sGlzf6ICld962W6M(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_dxrVY9Rzxi5uTvHQ(bh);
      //appendnew_next_sd_sGlzf6ICld962W6M
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sGlzf6ICld962W6M');
    }
  }

  sd_dxrVY9Rzxi5uTvHQ(bh) {
    try {
      this.page.currentUser = JSON.parse(sessionStorage.getItem('user'));
      bh = this.sd_uRHW1CRPVztMBH4M(bh);
      //appendnew_next_sd_dxrVY9Rzxi5uTvHQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dxrVY9Rzxi5uTvHQ');
    }
  }

  sd_uRHW1CRPVztMBH4M(bh) {
    try {
      const page = this.page;
      page.usernameForm = new FormGroup({
        username: new FormControl(page.currentUser.username, [
          Validators.required,
        ]),
      });
      bh = this.sd_kSC8KQFpXeN9jj3L(bh);
      //appendnew_next_sd_uRHW1CRPVztMBH4M
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uRHW1CRPVztMBH4M');
    }
  }

  sd_kSC8KQFpXeN9jj3L(bh) {
    try {
      localStorage.setItem('selectedPage', JSON.stringify('My Username'));
      //appendnew_next_sd_kSC8KQFpXeN9jj3L
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kSC8KQFpXeN9jj3L');
    }
  }

  sd_C2YdxHcp1LpP8prO(bh) {
    try {
      const page = this.page;
      bh.isEdittedName = false;
      if (page.usernameForm.value.username !== page.currentUser.username) {
        bh.isEdittedName = true;
      }
      bh = this.sd_4ZwmHMnhOLsTC6Gx(bh);
      //appendnew_next_sd_C2YdxHcp1LpP8prO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_C2YdxHcp1LpP8prO');
    }
  }

  async sd_4ZwmHMnhOLsTC6Gx(bh) {
    try {
      if (
        this.sdService.operators['true'](
          this.page.usernameForm.invalid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_aKj8O2pj357xkldt(bh);
      } else {
        bh = await this.sd_URdKdlcrBtv6d2Sn(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4ZwmHMnhOLsTC6Gx');
    }
  }

  async sd_URdKdlcrBtv6d2Sn(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.isEdittedName,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_CHyEx4ZQtCVvlWFH(bh);
      } else {
        bh = await this.sd_gojr8id6OsIyxozo(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_URdKdlcrBtv6d2Sn');
    }
  }

  sd_CHyEx4ZQtCVvlWFH(bh) {
    try {
      const page = this.page;
      page.showSpinner = true;
      bh.url = page.ssdUrl + 'update';
      bh.body = {
        email: page.currentUser.email,
        username: page.usernameForm.value.username,
        collection: 'users',
      };

      bh = this.sd_wYISw7qqKxA6Xq8m(bh);
      //appendnew_next_sd_CHyEx4ZQtCVvlWFH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CHyEx4ZQtCVvlWFH');
    }
  }

  async sd_wYISw7qqKxA6Xq8m(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'put',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.body,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_kIQus7sqVt4JlcDL(bh);
      //appendnew_next_sd_wYISw7qqKxA6Xq8m
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wYISw7qqKxA6Xq8m');
    }
  }

  sd_kIQus7sqVt4JlcDL(bh) {
    try {
      const page = this.page;
      page.showSpinner = false;
      page.currentUser.username = page.usernameForm.value.username;

      bh = this.updateCurrentUser(bh);
      //appendnew_next_sd_kIQus7sqVt4JlcDL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kIQus7sqVt4JlcDL');
    }
  }

  updateCurrentUser(bh) {
    try {
      sessionStorage.setItem('user', JSON.stringify(this.page.currentUser));
      bh = this.sd_BdkXBLh5tBYukSLx(bh);
      //appendnew_next_updateCurrentUser
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PPlEqPGhsGPk0D3o');
    }
  }

  sd_BdkXBLh5tBYukSLx(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Username changed successfully!', 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      bh = this.sd_RH7aa9B2bzYwq49a(bh);
      //appendnew_next_sd_BdkXBLh5tBYukSLx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BdkXBLh5tBYukSLx');
    }
  }

  async sd_RH7aa9B2bzYwq49a(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/settings');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_sd_RH7aa9B2bzYwq49a
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RH7aa9B2bzYwq49a');
    }
  }

  sd_gojr8id6OsIyxozo(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Username is not unique!', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_gojr8id6OsIyxozo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gojr8id6OsIyxozo');
    }
  }

  sd_aKj8O2pj357xkldt(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('Field is required!', 'Ok', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_aKj8O2pj357xkldt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_aKj8O2pj357xkldt');
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
  //appendnew_flow_usernameComponent_Catch
}
