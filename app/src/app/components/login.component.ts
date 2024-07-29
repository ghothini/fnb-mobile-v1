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
  selector: 'bh-login',
  templateUrl: './login.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class loginComponent {
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
      this.sd_45uy5mdWi5EPQeTa(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_45uy5mdWi5EPQeTa(bh) {
    try {
      bh = this.sd_JiXbyYIEfixaMome(bh);
      //appendnew_next_sd_45uy5mdWi5EPQeTa
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_45uy5mdWi5EPQeTa');
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
      bh = this.sd_cIzhLEz4ftM3kv08(bh);
      //appendnew_next_goBack
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_eOdC9WAzwU51oSrx');
    }
  }

  showPassword(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.toggling(bh);
      //appendnew_next_showPassword
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EPa7o3No15AsfjHE');
    }
  }

  login(form: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form };
      bh.local = {};
      bh = this.sd_FxdhttEOOGcuVtXK(bh);
      //appendnew_next_login
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_44CrbDcLdLIXeUnr');
    }
  }
  //appendnew_flow_loginComponent_start

  sd_JiXbyYIEfixaMome(bh) {
    try {
      bh = this.sd_PrG6MjwBVP5tc48y(bh);
      //appendnew_next_sd_JiXbyYIEfixaMome
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JiXbyYIEfixaMome');
    }
  }

  sd_PrG6MjwBVP5tc48y(bh) {
    try {
      this.page.password = this.page.password;
      this.page.show = true;
      this.page.submitted = false;
      this.page.userDetails = { email: '', password: '' };
      this.page.loginForm = undefined;
      this.page.email = undefined;
      this.page.showSpinner = false;
      this.page.ssdUrl = undefined;
      bh = this.sd_XcH0HPbNJBk5GnM2(bh);
      //appendnew_next_sd_PrG6MjwBVP5tc48y
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PrG6MjwBVP5tc48y');
    }
  }

  sd_XcH0HPbNJBk5GnM2(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_dQ2knbDgryiwbT69(bh);
      //appendnew_next_sd_XcH0HPbNJBk5GnM2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XcH0HPbNJBk5GnM2');
    }
  }

  sd_dQ2knbDgryiwbT69(bh) {
    try {
      const page = this.page;
      page.password = 'password';

      page.loginForm = new FormGroup({
        email: new FormControl('', [
          Validators.required,
          Validators.pattern(/^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/),
        ]),
        password: new FormControl('', Validators.required),
      });

      bh = this.sd_1dQfjj77Zb9tWDDo(bh);
      //appendnew_next_sd_dQ2knbDgryiwbT69
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dQ2knbDgryiwbT69');
    }
  }

  sd_1dQfjj77Zb9tWDDo(bh) {
    try {
      localStorage.setItem('selectedPage', JSON.stringify('Login'));
      //appendnew_next_sd_1dQfjj77Zb9tWDDo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1dQfjj77Zb9tWDDo');
    }
  }

  async sd_cIzhLEz4ftM3kv08(bh) {
    try {
      const commonInstance: common = this.__page_injector__.get(common);

      let outputVariables = await commonInstance.goBack();

      //appendnew_next_sd_cIzhLEz4ftM3kv08
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cIzhLEz4ftM3kv08');
    }
  }

  toggling(bh) {
    try {
      const page = this.page;
      if (page.password === 'password') {
        page.password = 'text';
        const button = document.getElementById('btn');
        button.innerHTML = 'Hide';

        // page.show = true;
      } else {
        page.password = 'password';
        const button = document.getElementById('btn');
        button.innerHTML = 'Show';

        // page.show = false;
      }

      //appendnew_next_toggling
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SsYT8hn0WZhQPZwc');
    }
  }

  async sd_FxdhttEOOGcuVtXK(bh) {
    try {
      if (
        this.sdService.operators['true'](
          this.page.loginForm.invalid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_gIMb7gIbrAo0Q09p(bh);
      } else {
        bh = await this.sd_7q0RrCOpw7ALlMgL(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FxdhttEOOGcuVtXK');
    }
  }

  sd_7q0RrCOpw7ALlMgL(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + 'login';
      page.showSpinner = true;
      bh.body = page.loginForm.value;

      bh = this.sd_OD8zvEV2HAw9CPuS(bh);
      //appendnew_next_sd_7q0RrCOpw7ALlMgL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7q0RrCOpw7ALlMgL');
    }
  }

  async sd_OD8zvEV2HAw9CPuS(bh) {
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
      bh = this.sd_AJM5lDNztTD8OOWR(bh);
      //appendnew_next_sd_OD8zvEV2HAw9CPuS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OD8zvEV2HAw9CPuS');
    }
  }

  sd_AJM5lDNztTD8OOWR(bh) {
    try {
      const page = this.page;
      page.showSpinner = false;
      bh.isUserExisting = true;
      if (page.result.message && page.result.message === "User don't exist") {
        bh.isUserExisting = false;
      }
      bh = this.sd_JsDGX4JTsLYSoWxZ(bh);
      //appendnew_next_sd_AJM5lDNztTD8OOWR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AJM5lDNztTD8OOWR');
    }
  }

  sd_JsDGX4JTsLYSoWxZ(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.isUserExisting,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_ZCu2UC1aCqPpAC3J(bh);
      } else if (
        this.sdService.operators['false'](
          bh.isUserExisting,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_RuNewNHwsLyRAwry(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JsDGX4JTsLYSoWxZ');
    }
  }

  sd_ZCu2UC1aCqPpAC3J(bh) {
    try {
      const page = this.page;
      bh.isPendingApplication = false;
      if (page.result.isNotApprovedAcc) {
        bh.isPendingApplication = true;
      }
      bh = this.sd_LpiRljUD2nFTMLeW(bh);
      //appendnew_next_sd_ZCu2UC1aCqPpAC3J
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZCu2UC1aCqPpAC3J');
    }
  }

  sd_LpiRljUD2nFTMLeW(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.isPendingApplication,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_YTD1C8oAD7gNiGGG(bh);
      } else if (
        this.sdService.operators['false'](
          bh.isPendingApplication,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_72DqN6b1RHPKOT63(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LpiRljUD2nFTMLeW');
    }
  }

  sd_YTD1C8oAD7gNiGGG(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Your application is still pending!', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_YTD1C8oAD7gNiGGG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YTD1C8oAD7gNiGGG');
    }
  }

  sd_72DqN6b1RHPKOT63(bh) {
    try {
      const page = this.page;
      bh.isPasswordMatching = true;
      if (
        page.result.message &&
        page.result.message === "PASSWORD DON'T MATCH"
      ) {
        bh.isPasswordMatching = false;
      }
      bh = this.sd_P8QtzbDB7dB5JZwb(bh);
      //appendnew_next_sd_72DqN6b1RHPKOT63
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_72DqN6b1RHPKOT63');
    }
  }

  sd_P8QtzbDB7dB5JZwb(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.isPasswordMatching,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_PghIfVviJmN5zGeI(bh);
      } else if (
        this.sdService.operators['false'](
          bh.isPasswordMatching,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_WNaJxQp0zvBigjEu(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_P8QtzbDB7dB5JZwb');
    }
  }

  sd_PghIfVviJmN5zGeI(bh) {
    try {
      sessionStorage.setItem('user', JSON.stringify(this.page.result));
      bh = this.sd_hcHGRCdiyZhmv29d(bh);
      //appendnew_next_sd_PghIfVviJmN5zGeI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PghIfVviJmN5zGeI');
    }
  }

  sd_hcHGRCdiyZhmv29d(bh) {
    try {
      const page = this.page;
      bh.isFirstTimeLogin = false;
      if (page.result.firstTimeLogin) {
        bh.isFirstTimeLogin = true;
      }
      bh = this.sd_FA71l5F6h6xGk01G(bh);
      //appendnew_next_sd_hcHGRCdiyZhmv29d
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hcHGRCdiyZhmv29d');
    }
  }

  sd_FA71l5F6h6xGk01G(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.isFirstTimeLogin,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_tUYtdtRKVfVWM0lu(bh);
      } else if (
        this.sdService.operators['false'](
          bh.isFirstTimeLogin,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_0xXMKnb5NvcDPX76(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FA71l5F6h6xGk01G');
    }
  }

  sd_tUYtdtRKVfVWM0lu(bh) {
    try {
      const page = this.page;
      bh.action = 'New Password';
      bh = this.sd_LpbbEJKLAYxhbNdR(bh);
      //appendnew_next_sd_tUYtdtRKVfVWM0lu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tUYtdtRKVfVWM0lu');
    }
  }

  sd_LpbbEJKLAYxhbNdR(bh) {
    try {
      sessionStorage.setItem('action', JSON.stringify(bh.action));
      bh = this.sd_kQedG9ymH3bYcKWT(bh);
      //appendnew_next_sd_LpbbEJKLAYxhbNdR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LpbbEJKLAYxhbNdR');
    }
  }

  sd_kQedG9ymH3bYcKWT(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('You need to set new password', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      bh = this.sd_2U4d5CqtIFcteErr(bh);
      //appendnew_next_sd_kQedG9ymH3bYcKWT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kQedG9ymH3bYcKWT');
    }
  }

  async sd_2U4d5CqtIFcteErr(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/change-password');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_sd_2U4d5CqtIFcteErr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2U4d5CqtIFcteErr');
    }
  }

  sd_0xXMKnb5NvcDPX76(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Logged in successfully!', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      bh = this.sd_w7pLMcccCEh0xCaL(bh);
      //appendnew_next_sd_0xXMKnb5NvcDPX76
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0xXMKnb5NvcDPX76');
    }
  }

  async sd_w7pLMcccCEh0xCaL(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/bank');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_sd_w7pLMcccCEh0xCaL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_w7pLMcccCEh0xCaL');
    }
  }

  sd_WNaJxQp0zvBigjEu(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Password is incorrect!', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_WNaJxQp0zvBigjEu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WNaJxQp0zvBigjEu');
    }
  }

  sd_RuNewNHwsLyRAwry(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('User account does not exist!', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_RuNewNHwsLyRAwry
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RuNewNHwsLyRAwry');
    }
  }

  sd_gIMb7gIbrAo0Q09p(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('All fields are required', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_gIMb7gIbrAo0Q09p
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gIMb7gIbrAo0Q09p');
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
  //appendnew_flow_loginComponent_Catch
}
