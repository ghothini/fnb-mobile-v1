// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Location } from '@angular/common'; //_splitter_
import { Component, Injector } from '@angular/core'; //_splitter_
import { FormControl, FormGroup } from '@angular/forms'; //_splitter_
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

  submit(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_7cVyguTzWL9kbtS0(bh);
      //appendnew_next_submit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QJljhIzH0nQatkB8');
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

      // if (bh.currentQuote) {
      //     console.log('value');
      //     page.currentQuote = bh.currentQuote.input.newQuote;
      //     console.log("new bh :", bh.currentQuote.input.newQuote);
      // } else {
      //     console.log('no value');
      // }

      const date = new Date();

      const day = date.getDate();
      const month = date.toLocaleString('default', { month: 'long' });
      const year = date.getFullYear();
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');

      page.formattedDate = `${day} ${month} ${year} ${hours}:${minutes}`;

      console.log('page', page);

      page.electricityForm = new FormGroup({
        customer: new FormControl(page.loggedInUser.name),
        meterNumber: new FormControl(''),
        amount: new FormControl(''),
        cellphone: new FormControl(''),
        transactionDate: new FormControl(page.formattedDate),
      });

      //appendnew_next_sd_zz43ZgH2Icyxac5u
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zz43ZgH2Icyxac5u');
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
      console.log('electricityForm', page.electricityForm.value);

      page.loggedInUser.balance =
        page.loggedInUser.balance - page.electricityForm.value.amount;

      console.log('page', page);
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
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
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
      bh.url = `https://111e-169-239-176-9.ngrok-free.app/api/buy-electricity`;
      bh.url2 = `https://111e-169-239-176-9.ngrok-free.app/api/update`;

      bh.body = page.electricityForm.value;

      bh.body2 = {
        email: page.loggedInUser.email,
        collection: 'users',
        balance: page.loggedInUser.balance,
      };
      bh = this.sd_cfsMwgXg1D8NTyNt(bh);
      //appendnew_next_sd_Vy7Re1ff3VKGjGux
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Vy7Re1ff3VKGjGux');
    }
  }

  async sd_cfsMwgXg1D8NTyNt(bh) {
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
      bh = this.sd_lk2FRezJkeUEMuOc(bh);
      //appendnew_next_sd_cfsMwgXg1D8NTyNt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cfsMwgXg1D8NTyNt');
    }
  }

  async sd_lk2FRezJkeUEMuOc(bh) {
    try {
      let requestOptions = {
        url: bh.url2,
        method: 'put',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.body2,
      };
      this.page.update = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_86j6RevOd8e3ZKkO(bh);
      //appendnew_next_sd_lk2FRezJkeUEMuOc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lk2FRezJkeUEMuOc');
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
      //appendnew_next_sd_lmOQOnE9gGW0Jqxz
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lmOQOnE9gGW0Jqxz');
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
