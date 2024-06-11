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
      bh = this.sd_XhVQOmTtgKdzutt9(bh);
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
      bh = this.sd_JmAzaumQzsqtdBXO(bh);
      //appendnew_next_sd_4QTWai7UHhI5IGma
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4QTWai7UHhI5IGma');
    }
  }

  sd_JmAzaumQzsqtdBXO(bh) {
    try {
      const commonInstance: common = this.__page_injector__.get(common);
      this.page.email = commonInstance['email'];
      bh = this.sd_gCGmtS3KI3uFKwe4(bh);
      //appendnew_next_sd_JmAzaumQzsqtdBXO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JmAzaumQzsqtdBXO');
    }
  }

  sd_gCGmtS3KI3uFKwe4(bh) {
    try {
      const page = this.page;
      page.changepasswordForm = new FormGroup({
        old: new FormControl('', [Validators.required]),
        password: new FormControl('', [
          Validators.required,
          Validators.pattern(page.passwordPattern),
        ]),
        confirmPassword: new FormControl('', [
          Validators.required,
          Validators.pattern(page.passwordPattern),
        ]),
      });

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

  sd_XhVQOmTtgKdzutt9(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_eaDQrlSGKTsPb58S(bh);
      //appendnew_next_sd_XhVQOmTtgKdzutt9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XhVQOmTtgKdzutt9');
    }
  }

  sd_eaDQrlSGKTsPb58S(bh) {
    try {
      const page = this.page;
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
      bh = this.sd_QV5LpSH3LR5yl72j(bh);
      //appendnew_next_sd_JtVpTsYnu6nJiteO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JtVpTsYnu6nJiteO');
    }
  }

  sd_QV5LpSH3LR5yl72j(bh) {
    try {
      const page = this.page;
      console.log('ehh', bh.result);
      bh = this.sd_1GlBlW9NrERdZGUl(bh);
      //appendnew_next_sd_QV5LpSH3LR5yl72j
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QV5LpSH3LR5yl72j');
    }
  }

  async sd_1GlBlW9NrERdZGUl(bh) {
    try {
      if (
        this.sdService.operators['se'](
          bh.input.form.value.old,
          bh.input.form.value.password,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_mVxBClIp8MpaTB7D(bh);
      } else {
        bh = await this.sd_0rpSxeoMAgfhyj4O(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1GlBlW9NrERdZGUl');
    }
  }

  sd_mVxBClIp8MpaTB7D(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('New Password Cannot Be The Same', 'OK', {
          duration: 5000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_mVxBClIp8MpaTB7D
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mVxBClIp8MpaTB7D');
    }
  }

  async sd_0rpSxeoMAgfhyj4O(bh) {
    try {
      if (
        this.sdService.operators['se'](
          bh.input.form.password,
          bh.input.form.confirmPassword,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_uWWnklG2ibjg9XuL(bh);
      } else {
        bh = await this.sd_oJ9MgN1Vhm8TrRHM(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0rpSxeoMAgfhyj4O');
    }
  }

  sd_uWWnklG2ibjg9XuL(bh) {
    try {
      const page = this.page;
      bh.input.body = {
        email: page.userDetails.email,
        newPassword: bh.input.form.controls.password.value,
      };

      bh.url3 = page.ssdUrl + 'reset-password';
      bh.url2 = page.ssdUrl + `get-user/${page.userDetails.email}`;

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
      console.log('results:', bh.results);

      //appendnew_next_sd_vtXD73efgrIZDkT4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vtXD73efgrIZDkT4');
    }
  }

  sd_oJ9MgN1Vhm8TrRHM(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open("Passwords don't match", 'OK', {
          duration: 5000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_oJ9MgN1Vhm8TrRHM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oJ9MgN1Vhm8TrRHM');
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
