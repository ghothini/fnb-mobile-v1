// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Location } from '@angular/common'; //_splitter_
import { Component, Injector } from '@angular/core'; //_splitter_
import { FormControl, FormGroup, Validators } from '@angular/forms'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-buy_electricity',
  templateUrl: './buy_electricity.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class buy_electricityComponent {
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
      this.sd_ZwPp3oGDVg1iIWd4(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_ZwPp3oGDVg1iIWd4(bh) {
    try {
      bh = this.sd_IfSSwRERBH4XQxJH(bh);
      //appendnew_next_sd_ZwPp3oGDVg1iIWd4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZwPp3oGDVg1iIWd4');
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
      bh = this.sd_PWsTbDR05jXbzKTy(bh);
      //appendnew_next_goBack
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wTwI5KXp8W9baa6R');
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
      bh = this.sd_3FuyYvLatFAEaCYY(bh);
      //appendnew_next_submit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QJljhIzH0nQatkB8');
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
      bh = this.sd_vf9jthAVSFYPJbwi(bh);
      //appendnew_next_allowNumbers
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pa0RfEjLU5Ic3COL');
    }
  }
  //appendnew_flow_buy_electricityComponent_start

  sd_IfSSwRERBH4XQxJH(bh) {
    try {
      bh = this.sd_WflFAq94qqVyQOV6(bh);
      //appendnew_next_sd_IfSSwRERBH4XQxJH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IfSSwRERBH4XQxJH');
    }
  }

  sd_WflFAq94qqVyQOV6(bh) {
    try {
      this.page.quote = undefined;
      this.page.showSpinner = false;
      bh = this.sd_mHUWSZ76nH2kyQwZ(bh);
      //appendnew_next_sd_WflFAq94qqVyQOV6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WflFAq94qqVyQOV6');
    }
  }

  sd_mHUWSZ76nH2kyQwZ(bh) {
    try {
      this.page.loggedInUser = JSON.parse(sessionStorage.getItem('user'));
      bh = this.sd_zz43ZgH2Icyxac5u(bh);
      //appendnew_next_sd_mHUWSZ76nH2kyQwZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mHUWSZ76nH2kyQwZ');
    }
  }

  sd_zz43ZgH2Icyxac5u(bh) {
    try {
      const page = this.page; // console.log("new bh :", bh.currentQuote.input.newQuote)
      page.currentQuote = page.loggedInUser.balance;

      const date = new Date();

      const day = date.getDate();
      const month = date.toLocaleString('default', { month: 'long' });
      const year = date.getFullYear();
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');

      page.formattedDate = `${day} ${month} ${year} ${hours}:${minutes}`;

      bh.date = new Date().getTime();

      page.electricityForm = new FormGroup({
        customer: new FormControl(page.loggedInUser.name),
        meterNumber: new FormControl('', Validators.required),
        amount: new FormControl('', Validators.required),
        cellphone: new FormControl('', Validators.required),
        email: new FormControl(page.loggedInUser.email),
        transType: new FormControl('electricity'),
        transDate: new FormControl(bh.date),
      });

      bh = this.sd_ymWB7xEZphueRVg9(bh);
      //appendnew_next_sd_zz43ZgH2Icyxac5u
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zz43ZgH2Icyxac5u');
    }
  }

  sd_ymWB7xEZphueRVg9(bh) {
    try {
      localStorage.setItem('selectedPage', JSON.stringify('Electricity'));
      //appendnew_next_sd_ymWB7xEZphueRVg9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ymWB7xEZphueRVg9');
    }
  }

  sd_PWsTbDR05jXbzKTy(bh) {
    try {
      this.page.location = this.__page_injector__.get(Location);
      bh = this.sd_YWfVfFZvLk9wAyQu(bh);
      //appendnew_next_sd_PWsTbDR05jXbzKTy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PWsTbDR05jXbzKTy');
    }
  }

  sd_YWfVfFZvLk9wAyQu(bh) {
    try {
      const page = this.page;
      page.location.back();

      //appendnew_next_sd_YWfVfFZvLk9wAyQu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YWfVfFZvLk9wAyQu');
    }
  }

  sd_3FuyYvLatFAEaCYY(bh) {
    try {
      const page = this.page;
      page.showSpinner = true;
      bh = this.sd_KBRZtw4iiZARs8GS(bh);
      //appendnew_next_sd_3FuyYvLatFAEaCYY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3FuyYvLatFAEaCYY');
    }
  }

  async sd_KBRZtw4iiZARs8GS(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          this.page.electricityForm.status,
          'VALID',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_7cVyguTzWL9kbtS0(bh);
      } else {
        bh = await this.sd_PgTZ58JiDkGAIVFP(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KBRZtw4iiZARs8GS');
    }
  }

  async sd_7cVyguTzWL9kbtS0(bh) {
    try {
      if (
        this.sdService.operators['gte'](
          this.page.loggedInUser.balance,
          this.page.electricityForm.value.amount,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_uuViWYba2ueOJw37(bh);
      } else {
        bh = await this.sd_lmOQOnE9gGW0Jqxz(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7cVyguTzWL9kbtS0');
    }
  }

  sd_uuViWYba2ueOJw37(bh) {
    try {
      const page = this.page;
      page.loggedInUser.balance =
        page.loggedInUser.balance - page.electricityForm.value.amount;
      bh = this.sd_ZNL962tT5IeCTqBZ(bh);
      //appendnew_next_sd_uuViWYba2ueOJw37
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uuViWYba2ueOJw37');
    }
  }

  sd_ZNL962tT5IeCTqBZ(bh) {
    try {
      sessionStorage.setItem('user', JSON.stringify(this.page.loggedInUser));
      bh = this.sd_OXfSViGaz0gjW5Jn(bh);
      //appendnew_next_sd_ZNL962tT5IeCTqBZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZNL962tT5IeCTqBZ');
    }
  }

  sd_OXfSViGaz0gjW5Jn(bh) {
    try {
      this.page.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.sd_Vy7Re1ff3VKGjGux(bh);
      //appendnew_next_sd_OXfSViGaz0gjW5Jn
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OXfSViGaz0gjW5Jn');
    }
  }

  sd_Vy7Re1ff3VKGjGux(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdURL + 'buy-electricity';
      bh.url_update = page.ssdURL + 'update';
      bh.url_user = page.ssdURL + 'get-users';

      bh.body = page.electricityForm.value;

      bh.body2 = {
        email: page.loggedInUser.email,
        collection: 'users',
        balance: page.loggedInUser.balance,
      };
      bh = this.buyPost(bh);
      //appendnew_next_sd_Vy7Re1ff3VKGjGux
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Vy7Re1ff3VKGjGux');
    }
  }

  async buyPost(bh) {
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
      bh = this.update(bh);
      //appendnew_next_buyPost
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cfsMwgXg1D8NTyNt');
    }
  }

  async update(bh) {
    try {
      let requestOptions = {
        url: bh.url_update,
        method: 'put',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.body2,
      };
      this.page.update = await this.sdService.nHttpRequest(requestOptions);
      bh = this.getUser(bh);
      //appendnew_next_update
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lk2FRezJkeUEMuOc');
    }
  }

  async getUser(bh) {
    try {
      let requestOptions = {
        url: bh.url_user,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      this.page.get_user = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_Rt05YTmeLNTPXNTh(bh);
      //appendnew_next_getUser
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_J4DFmjGIhq6tmnVs');
    }
  }

  sd_Rt05YTmeLNTPXNTh(bh) {
    try {
      const page = this.page;
      bh.found = page.get_user.find((user: any) => {
        return user.email == page.loggedInUser.email;
      });

      page.showSpinner = false;

      bh = this.sd_ZKQPTBamrzGHxSgI(bh);
      //appendnew_next_sd_Rt05YTmeLNTPXNTh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Rt05YTmeLNTPXNTh');
    }
  }

  sd_ZKQPTBamrzGHxSgI(bh) {
    try {
      sessionStorage.setItem('user', JSON.stringify(bh.found));
      bh = this.sd_86j6RevOd8e3ZKkO(bh);
      //appendnew_next_sd_ZKQPTBamrzGHxSgI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZKQPTBamrzGHxSgI');
    }
  }

  sd_86j6RevOd8e3ZKkO(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Purchase Successful', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      bh = this.sd_21gHL2xhMj3IYVca(bh);
      //appendnew_next_sd_86j6RevOd8e3ZKkO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_86j6RevOd8e3ZKkO');
    }
  }

  async sd_21gHL2xhMj3IYVca(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/bank');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_21gHL2xhMj3IYVca
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_21gHL2xhMj3IYVca');
    }
  }

  sd_lmOQOnE9gGW0Jqxz(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('Insufficent funds', 'Ok', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      bh = this.sd_SrvyCFRE6hVopx2K(bh);
      //appendnew_next_sd_lmOQOnE9gGW0Jqxz
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lmOQOnE9gGW0Jqxz');
    }
  }

  sd_SrvyCFRE6hVopx2K(bh) {
    try {
      const page = this.page;
      page.showSpinner = false;
      //appendnew_next_sd_SrvyCFRE6hVopx2K
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SrvyCFRE6hVopx2K');
    }
  }

  sd_PgTZ58JiDkGAIVFP(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Please fill in the empty fields', 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_PgTZ58JiDkGAIVFP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PgTZ58JiDkGAIVFP');
    }
  }

  sd_vf9jthAVSFYPJbwi(bh) {
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
      //appendnew_next_sd_vf9jthAVSFYPJbwi
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vf9jthAVSFYPJbwi');
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
  //appendnew_flow_buy_electricityComponent_Catch
}
