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
  selector: 'bh-change_password',
  templateUrl: './change_password.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class change_passwordComponent {
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
      this.sd_Qa3gEQ8XuawZxvmf(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_Qa3gEQ8XuawZxvmf(bh) {
    try {
      bh = this.sd_T6K84FQUvcDX1YSo(bh);
      //appendnew_next_sd_Qa3gEQ8XuawZxvmf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Qa3gEQ8XuawZxvmf');
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
      bh = this.sd_PSAf9tcJS5NXhVBp(bh);
      //appendnew_next_goBack
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EKizbmhhiynIcaPQ');
    }
  }

  changePassword(form: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form };
      bh.local = {};
      bh = this.checkingInvalidFields(bh);
      //appendnew_next_changePassword
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bXl36kavUNfxNOZt');
    }
  }
  //appendnew_flow_change_passwordComponent_start

  sd_T6K84FQUvcDX1YSo(bh) {
    try {
      this.page.userDetails = JSON.parse(sessionStorage.getItem('user'));
      bh = this.sd_JSAMA1ZV6YjMOc7j(bh);
      //appendnew_next_sd_T6K84FQUvcDX1YSo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_T6K84FQUvcDX1YSo');
    }
  }

  sd_JSAMA1ZV6YjMOc7j(bh) {
    try {
      bh = this.sd_4QTWai7UHhI5IGma(bh);
      //appendnew_next_sd_JSAMA1ZV6YjMOc7j
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JSAMA1ZV6YjMOc7j');
    }
  }

  sd_4QTWai7UHhI5IGma(bh) {
    try {
      this.page.changepasswordForm = undefined;
      this.page.passwordPattern =
        /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@]).{8,30}$/;
      this.page.showSpinner = false;
      this.page.actionAfterPassword = undefined;
      this.page.ssdUrl = undefined;
      this.page.disabledOldPasswordField = false;
      bh = this.sd_EaPg8dVWme9LOGJ3(bh);
      //appendnew_next_sd_4QTWai7UHhI5IGma
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4QTWai7UHhI5IGma');
    }
  }

  sd_EaPg8dVWme9LOGJ3(bh) {
    try {
      this.page.action = JSON.parse(sessionStorage.getItem('action'));
      bh = this.sd_JmAzaumQzsqtdBXO(bh);
      //appendnew_next_sd_EaPg8dVWme9LOGJ3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EaPg8dVWme9LOGJ3');
    }
  }

  sd_JmAzaumQzsqtdBXO(bh) {
    try {
      const commonInstance: common = this.__page_injector__.get(common);
      this.page.email = commonInstance['email'];
      bh = this.sd_XhVQOmTtgKdzutt9(bh);
      //appendnew_next_sd_JmAzaumQzsqtdBXO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JmAzaumQzsqtdBXO');
    }
  }

  sd_XhVQOmTtgKdzutt9(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_gCGmtS3KI3uFKwe4(bh);
      //appendnew_next_sd_XhVQOmTtgKdzutt9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XhVQOmTtgKdzutt9');
    }
  }

  sd_gCGmtS3KI3uFKwe4(bh) {
    try {
      const page = this.page;
      if (page.action === 'Forgot Password' || page.action === 'New Password') {
        page.changepasswordForm = new FormGroup({
          password: new FormControl('', [
            Validators.required,
            Validators.pattern(
              /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@]).{8,29}$/
            ),
          ]),
          confirmPassword: new FormControl('', [
            Validators.required,
            Validators.pattern(
              /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@]).{8,29}$/
            ),
          ]),
        });
        page.disabledOldPasswordField = true;
      } else {
        page.changepasswordForm = new FormGroup({
          old: new FormControl('', [
            Validators.required,
            Validators.pattern(
              /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@]).{8,29}$/
            ),
          ]),
          password: new FormControl('', [
            Validators.required,
            Validators.pattern(
              /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@]).{8,29}$/
            ),
          ]),
          confirmPassword: new FormControl('', [
            Validators.required,
            Validators.pattern(
              /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@]).{8,29}$/
            ),
          ]),
        });
      }

      console.log('stoargeee:', page.userDetails);
      //appendnew_next_sd_gCGmtS3KI3uFKwe4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gCGmtS3KI3uFKwe4');
    }
  }

  async sd_PSAf9tcJS5NXhVBp(bh) {
    try {
      const commonInstance: common = this.__page_injector__.get(common);

      let outputVariables = await commonInstance.goBack();

      //appendnew_next_sd_PSAf9tcJS5NXhVBp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PSAf9tcJS5NXhVBp');
    }
  }

  async checkingInvalidFields(bh) {
    try {
      if (
        this.sdService.operators['true'](
          this.page.changepasswordForm.invalid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_R48XhQdWfYbpn7ux(bh);
      } else {
        bh = await this.sd_b616RmsvWHhOhgiA(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wMSnfjxmDU4TrP2f');
    }
  }

  sd_b616RmsvWHhOhgiA(bh) {
    try {
      const page = this.page;
      page.isConfirmedPassword = false;
      if (
        page.changepasswordForm.value.password ===
        page.changepasswordForm.value.confirmPassword
      ) {
        page.isConfirmedPassword = true;
      }
      bh = this.checkingConfirmedPasswords(bh);
      //appendnew_next_sd_b616RmsvWHhOhgiA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_b616RmsvWHhOhgiA');
    }
  }

  async checkingConfirmedPasswords(bh) {
    try {
      if (
        this.sdService.operators['true'](
          this.page.isConfirmedPassword,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_YBDv64FG0sXInhfG(bh);
      } else {
        bh = await this.sd_cGXI26fscEyfMxgV(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2xFbs9mYOVcFHd6G');
    }
  }

  sd_YBDv64FG0sXInhfG(bh) {
    try {
      const page = this.page;
      page.isMatchingFields = false;
      if (
        page.changepasswordForm.value.password ===
        page.changepasswordForm.value.old
      ) {
        page.isMatchingFields = true;
      }
      bh = this.checkingToVerifyOldPassword(bh);
      //appendnew_next_sd_YBDv64FG0sXInhfG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YBDv64FG0sXInhfG');
    }
  }

  async checkingToVerifyOldPassword(bh) {
    try {
      if (
        this.sdService.operators['true'](
          this.page.disabledOldPasswordField,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_kuIXAS5Q5kq3MiL6(bh);
      } else {
        bh = await this.checkingMatchingPasswordsFields(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sbqoIaTqPCwc62sd');
    }
  }

  async checkingMatchingPasswordsFields(bh) {
    try {
      if (
        this.sdService.operators['true'](
          this.page.isMatchingFields,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_I3MOitgLXnFMXxRC(bh);
      } else {
        bh = await this.sd_eaDQrlSGKTsPb58S(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gxbR262tYUH0rOwR');
    }
  }

  sd_eaDQrlSGKTsPb58S(bh) {
    try {
      const page = this.page;
      page.showSpinner = true;
      bh.input.body = {
        email: page.userDetails.email,
        password: bh.input.form.controls.old.value,
        collection: 'users',
      };
      bh.url = page.ssdUrl + 'verify-password';
      bh = this.sd_JtVpTsYnu6nJiteO(bh);
      //appendnew_next_sd_eaDQrlSGKTsPb58S
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_eaDQrlSGKTsPb58S');
    }
  }

  async sd_JtVpTsYnu6nJiteO(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.input.body,
      };
      bh.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_iYfY2QkG6XBJxJKF(bh);
      //appendnew_next_sd_JtVpTsYnu6nJiteO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JtVpTsYnu6nJiteO');
    }
  }

  sd_iYfY2QkG6XBJxJKF(bh) {
    try {
      const page = this.page;
      page.showSpinner = false;
      page.isOldPasswordVerified = false;
      if (bh.result.message === 'Matching') {
        page.isOldPasswordVerified = true;
      }
      bh = this.sd_WnhNm0w7PgOiUpG6(bh);
      //appendnew_next_sd_iYfY2QkG6XBJxJKF
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iYfY2QkG6XBJxJKF');
    }
  }

  async sd_WnhNm0w7PgOiUpG6(bh) {
    try {
      if (
        this.sdService.operators['true'](
          this.page.isOldPasswordVerified,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_uWWnklG2ibjg9XuL(bh);
      } else {
        bh = await this.sd_K2XsLAAaJoC1EXBQ(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WnhNm0w7PgOiUpG6');
    }
  }

  sd_uWWnklG2ibjg9XuL(bh) {
    try {
      const page = this.page;
      bh.url3 = page.ssdUrl + 'reset-password';
      bh.url2 = page.ssdUrl + `get-user/${page.userDetails.email}`;
      bh.input.body = {
        email: page.userDetails.email,
        password: bh.input.form.controls.password.value,
      };
      bh = this.sd_mK4EznT8GjmJzX7H(bh);
      //appendnew_next_sd_uWWnklG2ibjg9XuL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uWWnklG2ibjg9XuL');
    }
  }

  async sd_mK4EznT8GjmJzX7H(bh) {
    try {
      let requestOptions = {
        url: bh.url3,
        method: 'put',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.input.body,
      };
      bh.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_Kzf3X102ixxPwbJs(bh);
      //appendnew_next_sd_mK4EznT8GjmJzX7H
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mK4EznT8GjmJzX7H');
    }
  }

  async sd_Kzf3X102ixxPwbJs(bh) {
    try {
      let requestOptions = {
        url: bh.url2,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.user,
      };
      bh.results = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_vtXD73efgrIZDkT4(bh);
      //appendnew_next_sd_Kzf3X102ixxPwbJs
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Kzf3X102ixxPwbJs');
    }
  }

  sd_vtXD73efgrIZDkT4(bh) {
    try {
      const page = this.page;
      page.showSpinner = false;

      bh = this.sd_fvCpuRUrUNRzOirK(bh);
      //appendnew_next_sd_vtXD73efgrIZDkT4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vtXD73efgrIZDkT4');
    }
  }

  async sd_fvCpuRUrUNRzOirK(bh) {
    try {
      const commonInstance: common = this.__page_injector__.get(common);

      let outputVariables = await commonInstance.goBack();

      bh = this.sd_hphXg0AArndArusT(bh);
      //appendnew_next_sd_fvCpuRUrUNRzOirK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fvCpuRUrUNRzOirK');
    }
  }

  sd_hphXg0AArndArusT(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Password changed successfully!', 'OK', {
          duration: 5000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_hphXg0AArndArusT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hphXg0AArndArusT');
    }
  }

  sd_K2XsLAAaJoC1EXBQ(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Old password does not match!', 'OK', {
          duration: 5000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_K2XsLAAaJoC1EXBQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_K2XsLAAaJoC1EXBQ');
    }
  }

  sd_I3MOitgLXnFMXxRC(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('New Password Cannot Be The Same', 'OK', {
          duration: 5000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_I3MOitgLXnFMXxRC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_I3MOitgLXnFMXxRC');
    }
  }

  sd_kuIXAS5Q5kq3MiL6(bh) {
    try {
      const page = this.page;
      page.showSpinner = true;
      bh.resetUrl = page.ssdUrl + 'reset-password';
      bh.input.body = {
        email: page.userDetails.email,
        password: bh.input.form.controls.password.value,
      };
      bh = this.sd_QicnFT3m1nF4AN7w(bh);
      //appendnew_next_sd_kuIXAS5Q5kq3MiL6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kuIXAS5Q5kq3MiL6');
    }
  }

  async sd_QicnFT3m1nF4AN7w(bh) {
    try {
      let requestOptions = {
        url: bh.resetUrl,
        method: 'put',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.input.body,
      };
      bh.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_A4i7EcoQwa5WIBpy(bh);
      //appendnew_next_sd_QicnFT3m1nF4AN7w
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QicnFT3m1nF4AN7w');
    }
  }

  async sd_A4i7EcoQwa5WIBpy(bh) {
    try {
      if (
        this.sdService.operators['true'](
          this.page.userDetails.firstTimeLogin,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.updateUser(bh);
      } else {
        bh = await this.sd_1PktXVwFJLGdgkY4(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_A4i7EcoQwa5WIBpy');
    }
  }

  sd_1PktXVwFJLGdgkY4(bh) {
    try {
      const page = this.page;
      page.showSpinner = false;
      bh = this.sd_x2TLEr29f8Gz0Zh7(bh);
      //appendnew_next_sd_1PktXVwFJLGdgkY4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1PktXVwFJLGdgkY4');
    }
  }

  sd_x2TLEr29f8Gz0Zh7(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Password changed successfully!', 'OK', {
          duration: 5000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      bh = this.sendUserBackToLogin(bh);
      //appendnew_next_sd_x2TLEr29f8Gz0Zh7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_x2TLEr29f8Gz0Zh7');
    }
  }

  async sendUserBackToLogin(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/login');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sendUserBackToLogin
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6wyA59kJ477aAMQE');
    }
  }

  updateUser(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + 'update';
      bh.input.body = {
        email: page.userDetails.email,
        firstTimeLogin: false,
        collection: 'users',
      };
      bh = this.sd_Rex6te93gGYLA57Q(bh);
      //appendnew_next_updateUser
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Nkx0LbJlTcVYtJi9');
    }
  }

  async sd_Rex6te93gGYLA57Q(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'put',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.input.body,
      };
      bh.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_ae0359aKUUrq62b9(bh);
      this.sd_5t5r1DSuOhOOnykN(bh);
      //appendnew_next_sd_Rex6te93gGYLA57Q
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Rex6te93gGYLA57Q');
    }
  }

  sd_ae0359aKUUrq62b9(bh) {
    try {
      const page = this.page;
      page.showSpinner = false;
      page.userDetails.firstTimeLogin = false;
      bh = this.sd_OuETB8LH6mUMfV4n(bh);
      //appendnew_next_sd_ae0359aKUUrq62b9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ae0359aKUUrq62b9');
    }
  }

  sd_OuETB8LH6mUMfV4n(bh) {
    try {
      sessionStorage.setItem('user', JSON.stringify(this.page.userDetails));
      bh = this.sd_dqkw4ouW0PUSN6eq(bh);
      //appendnew_next_sd_OuETB8LH6mUMfV4n
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OuETB8LH6mUMfV4n');
    }
  }

  sd_dqkw4ouW0PUSN6eq(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Deposit your starting amount', 'OK', {
          duration: 5000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      bh = this.sendUserToDeposit(bh);
      //appendnew_next_sd_dqkw4ouW0PUSN6eq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dqkw4ouW0PUSN6eq');
    }
  }

  async sendUserToDeposit(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/deposit');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_sendUserToDeposit
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9SpZLdrMJqsGy7UZ');
    }
  }

  sd_5t5r1DSuOhOOnykN(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), bh.result);
      //appendnew_next_sd_5t5r1DSuOhOOnykN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5t5r1DSuOhOOnykN');
    }
  }

  sd_cGXI26fscEyfMxgV(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open("Passwords don't match", 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_cGXI26fscEyfMxgV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cGXI26fscEyfMxgV');
    }
  }

  sd_R48XhQdWfYbpn7ux(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('All fields are required', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_R48XhQdWfYbpn7ux
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_R48XhQdWfYbpn7ux');
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
  //appendnew_flow_change_passwordComponent_Catch
}
