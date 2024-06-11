// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { FormControl, FormGroup, Validators } from '@angular/forms'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { common } from 'app/sd-services/common'; //_splitter_
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
      bh = this.sd_dxrVY9Rzxi5uTvHQ(bh);
      //appendnew_next_sd_lDfsEOrYpyiftX3M
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lDfsEOrYpyiftX3M');
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
      bh = this.sd_w7y6dMI2jC8qrxyG(bh);
      //appendnew_next_goBack
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yDGmXN7W9fMVyVhN');
    }
  }

  changeUsername(form: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form };
      bh.local = {};
      bh = this.sd_sGlzf6ICld962W6M(bh);
      //appendnew_next_changeUsername
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8Y55FILZiHv0qHei');
    }
  }
  //appendnew_flow_usernameComponent_start

  sd_dxrVY9Rzxi5uTvHQ(bh) {
    try {
      this.page.userDetails = JSON.parse(sessionStorage.getItem('user'));
      bh = this.sd_GHFhBt0oZxdnQMSY(bh);
      //appendnew_next_sd_dxrVY9Rzxi5uTvHQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dxrVY9Rzxi5uTvHQ');
    }
  }

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
      bh = this.sd_uRHW1CRPVztMBH4M(bh);
      //appendnew_next_sd_nOdVft6eatxx7Ukt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nOdVft6eatxx7Ukt');
    }
  }

  sd_uRHW1CRPVztMBH4M(bh) {
    try {
      const page = this.page;
      page.usernameForm = new FormGroup({
        username: new FormControl('', [
          Validators.required,
          Validators.pattern(page.usernamePattern),
        ]),
      });

      console.log(page.usernameForm);

      console.log('userDetailss:', page.userDetails);
      console.log(page.usernameForm);
      // page.parsedStorage = JSON.parse(page.loggedInUser)
      // console.log("parsed storage:", page.parsedStorage)
      //appendnew_next_sd_uRHW1CRPVztMBH4M
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uRHW1CRPVztMBH4M');
    }
  }

  async sd_w7y6dMI2jC8qrxyG(bh) {
    try {
      const commonInstance: common = this.__page_injector__.get(common);

      let outputVariables = await commonInstance.goBack();

      //appendnew_next_sd_w7y6dMI2jC8qrxyG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_w7y6dMI2jC8qrxyG');
    }
  }

  sd_sGlzf6ICld962W6M(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_CHyEx4ZQtCVvlWFH(bh);
      //appendnew_next_sd_sGlzf6ICld962W6M
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sGlzf6ICld962W6M');
    }
  }

  sd_CHyEx4ZQtCVvlWFH(bh) {
    try {
      const page = this.page;
      bh.body = {
        email: page.userDetails.email,
        username: page.usernameForm.value.username,
        collection: 'users',
      };

      bh.url = page.ssdUrl + 'update';
      bh.url2 = page.ssdUrl + `get-user/${page.userDetails.email}`;

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
      bh = this.sd_fNhq50989haHDjT8(bh);
      //appendnew_next_sd_wYISw7qqKxA6Xq8m
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wYISw7qqKxA6Xq8m');
    }
  }

  async sd_fNhq50989haHDjT8(bh) {
    try {
      let requestOptions = {
        url: bh.url2,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.body,
      };
      this.page.data = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_Qnq8xnGbHoHOLnWD(bh);
      //appendnew_next_sd_fNhq50989haHDjT8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fNhq50989haHDjT8');
    }
  }

  sd_Qnq8xnGbHoHOLnWD(bh) {
    try {
      const page = this.page;
      console.log('y', page.result);

      console.log('x', page.data);

      bh = this.sd_PPlEqPGhsGPk0D3o(bh);
      //appendnew_next_sd_Qnq8xnGbHoHOLnWD
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Qnq8xnGbHoHOLnWD');
    }
  }

  sd_PPlEqPGhsGPk0D3o(bh) {
    try {
      sessionStorage.setItem('user', JSON.stringify(this.page.data));
      bh = this.sd_BdkXBLh5tBYukSLx(bh);
      //appendnew_next_sd_PPlEqPGhsGPk0D3o
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PPlEqPGhsGPk0D3o');
    }
  }

  sd_BdkXBLh5tBYukSLx(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('Username Changed', 'OK', {
        duration: 4000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_BdkXBLh5tBYukSLx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BdkXBLh5tBYukSLx');
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
