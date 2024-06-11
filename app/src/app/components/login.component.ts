// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { FormControl, FormGroup, Validators } from '@angular/forms'; //_splitter_
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
      bh = this.sd_sLY2AoAhaPHAAaDr(bh);
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
      bh = this.sd_dQ2knbDgryiwbT69(bh);
      //appendnew_next_sd_PrG6MjwBVP5tc48y
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PrG6MjwBVP5tc48y');
    }
  }

  sd_dQ2knbDgryiwbT69(bh) {
    try {
      const page = this.page;
      page.password = 'password';

      page.loginForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', Validators.required),
      });

      // console.log(page.loginForm.value)

      //appendnew_next_sd_dQ2knbDgryiwbT69
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dQ2knbDgryiwbT69');
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

  async sd_sLY2AoAhaPHAAaDr(bh) {
    try {
      if (
        this.sdService.operators['se'](
          this.page.loginForm.value.password.length,
          4,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_XcH0HPbNJBk5GnM2(bh);
      } else {
        bh = await this.sd_AuqUk4zhQQO4MrD4(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sLY2AoAhaPHAAaDr');
    }
  }

  sd_XcH0HPbNJBk5GnM2(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_7q0RrCOpw7ALlMgL(bh);
      //appendnew_next_sd_XcH0HPbNJBk5GnM2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XcH0HPbNJBk5GnM2');
    }
  }

  sd_7q0RrCOpw7ALlMgL(bh) {
    try {
      const page = this.page;
      bh.body = {
        email: bh.input.form.get('email').value,
        pin: bh.input.form.get('password').value,
      };

      bh.url = page.ssdUrl + 'login-pin';
      // bh.url = page.ssdUrl + 'login';

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
      bh = this.sd_AEBXo1QgAnxUvQ0R(bh);
      //appendnew_next_sd_OD8zvEV2HAw9CPuS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OD8zvEV2HAw9CPuS');
    }
  }

  sd_AEBXo1QgAnxUvQ0R(bh) {
    try {
      const page = this.page;
      console.log(page.result);
      bh = this.sd_PghIfVviJmN5zGeI(bh);
      //appendnew_next_sd_AEBXo1QgAnxUvQ0R
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AEBXo1QgAnxUvQ0R');
    }
  }

  sd_PghIfVviJmN5zGeI(bh) {
    try {
      sessionStorage.setItem('user', JSON.stringify(this.page.result));
      bh = this.sd_2U4d5CqtIFcteErr(bh);
      //appendnew_next_sd_PghIfVviJmN5zGeI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PghIfVviJmN5zGeI');
    }
  }

  async sd_2U4d5CqtIFcteErr(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/change-password2');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_2U4d5CqtIFcteErr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2U4d5CqtIFcteErr');
    }
  }

  sd_AuqUk4zhQQO4MrD4(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_mjHhs3TZbNwVZsQd(bh);
      //appendnew_next_sd_AuqUk4zhQQO4MrD4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AuqUk4zhQQO4MrD4');
    }
  }

  sd_mjHhs3TZbNwVZsQd(bh) {
    try {
      const page = this.page;
      bh.body = {
        email: bh.input.form.get('email').value,
        password: bh.input.form.get('password').value,
      };

      bh.url = `https://111e-169-239-176-9.ngrok-free.app/api/login`;
      bh.url2 = `https://111e-169-239-176-9.ngrok-free.app/api/get-user/${
        bh.input.form.get('email').value
      }`;
      // bh.url = page.ssdUrl + `get-user/${bh.input.form.get('email').value}`

      bh = this.sd_OBFx5QCcbXpVMC3X(bh);
      //appendnew_next_sd_mjHhs3TZbNwVZsQd
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mjHhs3TZbNwVZsQd');
    }
  }

  async sd_OBFx5QCcbXpVMC3X(bh) {
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
      bh = this.sd_jBhlw0WwVBhFapvj(bh);
      //appendnew_next_sd_OBFx5QCcbXpVMC3X
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OBFx5QCcbXpVMC3X');
    }
  }

  sd_jBhlw0WwVBhFapvj(bh) {
    try {
      const page = this.page;
      console.log(page.result);
      bh = this.sd_1Nc70SHc4wCOUjSZ(bh);
      //appendnew_next_sd_jBhlw0WwVBhFapvj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jBhlw0WwVBhFapvj');
    }
  }

  sd_1Nc70SHc4wCOUjSZ(bh) {
    try {
      sessionStorage.setItem('user', JSON.stringify(this.page.result));
      bh = this.sd_w7pLMcccCEh0xCaL(bh);
      //appendnew_next_sd_1Nc70SHc4wCOUjSZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1Nc70SHc4wCOUjSZ');
    }
  }

  async sd_w7pLMcccCEh0xCaL(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_w7pLMcccCEh0xCaL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_w7pLMcccCEh0xCaL');
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
