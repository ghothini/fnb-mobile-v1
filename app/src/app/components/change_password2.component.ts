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
  selector: 'bh-change_password2',
  templateUrl: './change_password2.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class change_password2Component {
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
      this.sd_QwcYFtNP1EFjZFj6(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  goBack(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_NJLoRNdTFbFuMuGn(bh);
      //appendnew_next_goBack
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wt9z5WYo6fgGOUM6');
    }
  }
  sd_QwcYFtNP1EFjZFj6(bh) {
    try {
      bh = this.sd_CMWptT0fhhJepiwG(bh);
      //appendnew_next_sd_QwcYFtNP1EFjZFj6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QwcYFtNP1EFjZFj6');
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
      bh = this.sd_8DovQ9692xJGfprv(bh);
      //appendnew_next_changePassword
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mRU5Me3WOJaqeJFO');
    }
  }

  validateMaxInputLength(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_o7sUXJtiwRKaxo9s(bh);
      //appendnew_next_validateMaxInputLength
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cSSPFhKFkuLZaSz9');
    }
  }
  //appendnew_flow_change_password2Component_start

  async sd_NJLoRNdTFbFuMuGn(bh) {
    try {
      const commonInstance: common = this.__page_injector__.get(common);

      let outputVariables = await commonInstance.goBack();

      //appendnew_next_sd_NJLoRNdTFbFuMuGn
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NJLoRNdTFbFuMuGn');
    }
  }

  sd_CMWptT0fhhJepiwG(bh) {
    try {
      this.page.userDetails = JSON.parse(sessionStorage.getItem('user'));
      bh = this.sd_dGzjxXXq1kSNBIQd(bh);
      //appendnew_next_sd_CMWptT0fhhJepiwG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CMWptT0fhhJepiwG');
    }
  }

  sd_dGzjxXXq1kSNBIQd(bh) {
    try {
      bh = this.sd_QMsn55kIMtHvV9Dc(bh);
      //appendnew_next_sd_dGzjxXXq1kSNBIQd
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dGzjxXXq1kSNBIQd');
    }
  }

  sd_QMsn55kIMtHvV9Dc(bh) {
    try {
      this.page.changepasswordForm2 = undefined;
      this.page.passwordPattern =
        /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@]).{8,29}$/;
      this.page.showSpinner = false;
      bh = this.sd_NZeG9pkqJCcwcdw5(bh);
      //appendnew_next_sd_QMsn55kIMtHvV9Dc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QMsn55kIMtHvV9Dc');
    }
  }

  sd_NZeG9pkqJCcwcdw5(bh) {
    try {
      const commonInstance: common = this.__page_injector__.get(common);
      this.page.email = commonInstance['email'];
      bh = this.sd_zdtUYVHfIuAWlRoA(bh);
      //appendnew_next_sd_NZeG9pkqJCcwcdw5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NZeG9pkqJCcwcdw5');
    }
  }

  sd_zdtUYVHfIuAWlRoA(bh) {
    try {
      const page = this.page;
      page.changepasswordForm2 = new FormGroup({
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
      //appendnew_next_sd_zdtUYVHfIuAWlRoA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zdtUYVHfIuAWlRoA');
    }
  }

  async sd_8DovQ9692xJGfprv(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.input.form.valid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_CZGqbJsH8ZD4VQXi(bh);
      } else {
        bh = await this.sd_4yzVYLxzwwULMUAY(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8DovQ9692xJGfprv');
    }
  }

  async sd_CZGqbJsH8ZD4VQXi(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          this.page.changepasswordForm2.value.password,
          this.page.changepasswordForm2.value.confirmPassword,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_fSmqHytxCpY4WDfb(bh);
      } else {
        bh = await this.sd_zGQhKczX7RNyW91K(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CZGqbJsH8ZD4VQXi');
    }
  }

  sd_fSmqHytxCpY4WDfb(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_2sOjTebfZo93E0Dj(bh);
      //appendnew_next_sd_fSmqHytxCpY4WDfb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fSmqHytxCpY4WDfb');
    }
  }

  sd_2sOjTebfZo93E0Dj(bh) {
    try {
      const page = this.page;
      page.userDetails.password = bh.input.form.controls.password.value;
      page.userDetails.firstTimeLogin = false;
      page.showSpinner = true;

      bh.url = page.ssdUrl + 'reset-password';
      bh.url2 = page.ssdUrl + `get-user/${page.userDetails.email}`;

      bh = this.sd_KD9uXy8LYOAr24Pi(bh);
      //appendnew_next_sd_2sOjTebfZo93E0Dj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2sOjTebfZo93E0Dj');
    }
  }

  async sd_KD9uXy8LYOAr24Pi(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'put',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.userDetails,
      };
      bh.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_L3eStlk9GE2XLhky(bh);
      //appendnew_next_sd_KD9uXy8LYOAr24Pi
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KD9uXy8LYOAr24Pi');
    }
  }

  async sd_L3eStlk9GE2XLhky(bh) {
    try {
      let requestOptions = {
        url: bh.url2,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.input.body,
      };
      bh.results = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_nK9lnAjxklPxowhb(bh);
      //appendnew_next_sd_L3eStlk9GE2XLhky
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_L3eStlk9GE2XLhky');
    }
  }

  sd_nK9lnAjxklPxowhb(bh) {
    try {
      const page = this.page;
      page.showSpinner = false;
      bh = this.sd_hCAg2pzaW9i92uyW(bh);
      //appendnew_next_sd_nK9lnAjxklPxowhb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nK9lnAjxklPxowhb');
    }
  }

  sd_hCAg2pzaW9i92uyW(bh) {
    try {
      sessionStorage.setItem('user', JSON.stringify(bh.results));
      bh = this.sd_xrMJ1S7dOnh6EyuI(bh);
      //appendnew_next_sd_hCAg2pzaW9i92uyW
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hCAg2pzaW9i92uyW');
    }
  }

  sd_xrMJ1S7dOnh6EyuI(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Password has changed successfully!', 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      bh = this.sd_YcIGtPOxknGkMsVO(bh);
      //appendnew_next_sd_xrMJ1S7dOnh6EyuI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xrMJ1S7dOnh6EyuI');
    }
  }

  async sd_YcIGtPOxknGkMsVO(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/deposit');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_YcIGtPOxknGkMsVO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YcIGtPOxknGkMsVO');
    }
  }

  sd_zGQhKczX7RNyW91K(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open("Passwords don't match", 'OK', {
          duration: 5000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_zGQhKczX7RNyW91K
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zGQhKczX7RNyW91K');
    }
  }

  sd_4yzVYLxzwwULMUAY(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Does not follow password pattern standard', 'OK', {
          duration: 5000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_4yzVYLxzwwULMUAY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4yzVYLxzwwULMUAY');
    }
  }

  sd_o7sUXJtiwRKaxo9s(bh) {
    try {
      const page = this.page;
      if (
        page.changepasswordForm2.value.password.toString().length > 29 ||
        page.changepasswordForm2.value.confirmPassword.toString().length > 29
      ) {
        page.changepasswordForm2.setValue({
          password: page.changepasswordForm2.value.password
            .toString()
            .substr(0, 29),
          confirmPassword: page.changepasswordForm2.value.confirmPassword
            .toString()
            .substr(0, 29),
        });
      }
      //appendnew_next_sd_o7sUXJtiwRKaxo9s
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_o7sUXJtiwRKaxo9s');
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
  //appendnew_flow_change_password2Component_Catch
}
