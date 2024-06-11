// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { common } from 'app/sd-services/common'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-verify_code',
  templateUrl: './verify_code.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class verify_codeComponent {
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
      this.sd_M77mjLFAr7rAaWaA(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_M77mjLFAr7rAaWaA(bh) {
    try {
      bh = this.sd_nJyDqZKN6DaRtAGg(bh);
      //appendnew_next_sd_M77mjLFAr7rAaWaA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_M77mjLFAr7rAaWaA');
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
      bh = this.sd_RVbstDX0hUChsKZQ(bh);
      //appendnew_next_goBack
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_obIpwvx1RkdjUz72');
    }
  }

  goToNextInput(elementToFocus: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { elementToFocus };
      bh.local = {};
      bh = this.sd_2tJBVMnCUjwrZMXT(bh);
      //appendnew_next_goToNextInput
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UD2oDv4HDOdaZybr');
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
      bh = this.sd_rqL7BpSokP3ZH9qH(bh);
      //appendnew_next_submit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fsqRgqGA0rB0lZsi');
    }
  }

  resendCode(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_K558rzqhP5rIaeD7(bh);
      //appendnew_next_resendCode
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mBlKNHGPy5iZursL');
    }
  }
  //appendnew_flow_verify_codeComponent_start

  sd_nJyDqZKN6DaRtAGg(bh) {
    try {
      bh = this.sd_JnOutHTCg72NGJIq(bh);
      //appendnew_next_sd_nJyDqZKN6DaRtAGg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nJyDqZKN6DaRtAGg');
    }
  }

  sd_JnOutHTCg72NGJIq(bh) {
    try {
      this.page.codeObject = { a: '', b: '', c: '', d: '' };
      this.page.passwordForm = undefined;
      bh = this.sd_rrlkQXrIDUo9u0rB(bh);
      //appendnew_next_sd_JnOutHTCg72NGJIq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JnOutHTCg72NGJIq');
    }
  }

  sd_rrlkQXrIDUo9u0rB(bh) {
    try {
      const page = this.page;
      page.verifyCodeForm = page.codeObject;

      // page.loginForm = new FormGroup({
      //     a: new FormControl('', [Validators.required]),
      //     b: new FormControl('', Validators.required),
      //     c: new FormControl('', Validators.required),
      //     e: new FormControl('', Validators.required),
      // })
      bh = this.sd_Ef2QxF9xdJ6GlLqn(bh);
      //appendnew_next_sd_rrlkQXrIDUo9u0rB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rrlkQXrIDUo9u0rB');
    }
  }

  sd_Ef2QxF9xdJ6GlLqn(bh) {
    try {
      const commonInstance: common = this.__page_injector__.get(common);
      this.page.code = commonInstance['random'];
      this.page.email = commonInstance['email'];
      this.sd_u8On1OFZuKXRt8YO(bh);
      //appendnew_next_sd_Ef2QxF9xdJ6GlLqn
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Ef2QxF9xdJ6GlLqn');
    }
  }

  sd_u8On1OFZuKXRt8YO(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.code);
      //appendnew_next_sd_u8On1OFZuKXRt8YO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_u8On1OFZuKXRt8YO');
    }
  }

  async sd_RVbstDX0hUChsKZQ(bh) {
    try {
      const commonInstance: common = this.__page_injector__.get(common);

      let outputVariables = await commonInstance.goBack();

      //appendnew_next_sd_RVbstDX0hUChsKZQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RVbstDX0hUChsKZQ');
    }
  }

  sd_2tJBVMnCUjwrZMXT(bh) {
    try {
      const page = this.page; // console.log("bh.input.elementToFocus",bh.input.elementToFocus)
      // console.log(page.codeObject)
      if (page.codeObject.a) {
        document.getElementById(bh.input.elementToFocus).focus();
      }

      //appendnew_next_sd_2tJBVMnCUjwrZMXT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2tJBVMnCUjwrZMXT');
    }
  }

  sd_rqL7BpSokP3ZH9qH(bh) {
    try {
      const page = this.page;
      const { a, b, c, d } = page.codeObject;
      bh.user_input_code = `${a}${b}${c}${d}`;
      bh = this.sd_XmbNoAFJJZgyQ1AJ(bh);
      //appendnew_next_sd_rqL7BpSokP3ZH9qH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rqL7BpSokP3ZH9qH');
    }
  }

  async sd_XmbNoAFJJZgyQ1AJ(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          this.page.code,
          bh.user_input_code,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_syhqL8DbCmWvp5qY(bh);
      } else {
        bh = await this.sd_07Za3yDeFoDhz1NB(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XmbNoAFJJZgyQ1AJ');
    }
  }

  async sd_syhqL8DbCmWvp5qY(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/change-password2');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_sd_syhqL8DbCmWvp5qY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_syhqL8DbCmWvp5qY');
    }
  }

  sd_07Za3yDeFoDhz1NB(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('Invalid Code', 'OK', {
        duration: 2000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_07Za3yDeFoDhz1NB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_07Za3yDeFoDhz1NB');
    }
  }

  async sd_K558rzqhP5rIaeD7(bh) {
    try {
      const commonInstance: common = this.__page_injector__.get(common);

      let outputVariables = await commonInstance.generateRandomNumber(
        this.page.email
      );
      this.page.random = outputVariables.local.random;

      bh = this.sd_EQ6jPFmfVmigcjXj(bh);
      //appendnew_next_sd_K558rzqhP5rIaeD7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_K558rzqhP5rIaeD7');
    }
  }

  sd_EQ6jPFmfVmigcjXj(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_gTeUoaunEY4SEmNI(bh);
      //appendnew_next_sd_EQ6jPFmfVmigcjXj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EQ6jPFmfVmigcjXj');
    }
  }

  sd_gTeUoaunEY4SEmNI(bh) {
    try {
      const page = this.page;
      bh.body = {
        email: page.email,
        OTP: page.random,
      };

      bh.url = page.ssdUrl + 'forgot-password';

      // console.log(bh.body)

      bh = this.sd_afKuwnXlNLvaV6aQ(bh);
      //appendnew_next_sd_gTeUoaunEY4SEmNI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gTeUoaunEY4SEmNI');
    }
  }

  async sd_afKuwnXlNLvaV6aQ(bh) {
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
      bh = this.sd_XPR8zTL16v7wobXG(bh);
      //appendnew_next_sd_afKuwnXlNLvaV6aQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_afKuwnXlNLvaV6aQ');
    }
  }

  sd_XPR8zTL16v7wobXG(bh) {
    try {
      sessionStorage.setItem('user', JSON.stringify(this.page.result));
      bh = this.sd_jhaRzdlpZkZv36Oc(bh);
      //appendnew_next_sd_XPR8zTL16v7wobXG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XPR8zTL16v7wobXG');
    }
  }

  sd_jhaRzdlpZkZv36Oc(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('Email Resent', 'OK', {
        duration: 5000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      this.sd_TlD2ZlPTBdAsgIdY(bh);
      //appendnew_next_sd_jhaRzdlpZkZv36Oc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jhaRzdlpZkZv36Oc');
    }
  }

  sd_TlD2ZlPTBdAsgIdY(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.random);
      //appendnew_next_sd_TlD2ZlPTBdAsgIdY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TlD2ZlPTBdAsgIdY');
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
  //appendnew_flow_verify_codeComponent_Catch
}
