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
  selector: 'bh-ewallet',
  templateUrl: './ewallet.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class ewalletComponent {
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
      this.sd_RN7hllGaoHFIGKfZ(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_RN7hllGaoHFIGKfZ(bh) {
    try {
      bh = this.sd_kTNhpdwIUiB5YW4A(bh);
      //appendnew_next_sd_RN7hllGaoHFIGKfZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RN7hllGaoHFIGKfZ');
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
      bh = this.sd_YtZwxNvBGKIYKDPj(bh);
      //appendnew_next_goBack
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1phC2MwaB28CR0D4');
    }
  }

  send(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_KpidmSIY6Y1p6PJ3(bh);
      //appendnew_next_send
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yH9RhqdKZgTlfLF9');
    }
  }
  //appendnew_flow_ewalletComponent_start

  sd_kTNhpdwIUiB5YW4A(bh) {
    try {
      bh = this.sd_8gRcQKgo7rGWCf8f(bh);
      //appendnew_next_sd_kTNhpdwIUiB5YW4A
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kTNhpdwIUiB5YW4A');
    }
  }

  sd_8gRcQKgo7rGWCf8f(bh) {
    try {
      bh = this.sd_kZgzC8EObqLtlnGU(bh);
      //appendnew_next_sd_8gRcQKgo7rGWCf8f
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8gRcQKgo7rGWCf8f');
    }
  }

  sd_kZgzC8EObqLtlnGU(bh) {
    try {
      this.page.loggedInUser = JSON.parse(sessionStorage.getItem('user'));
      bh = this.sd_ejUFnfZNlysDod57(bh);
      //appendnew_next_sd_kZgzC8EObqLtlnGU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kZgzC8EObqLtlnGU');
    }
  }

  sd_ejUFnfZNlysDod57(bh) {
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

      page.ewalletForm = new FormGroup({
        firstName: new FormControl(page.loggedInUser.name),
        email: new FormControl(page.loggedInUser.email),
        amount: new FormControl(''),
        cellNumber: new FormControl(''),
        transactionDate: new FormControl(page.formattedDate),
      });

      //appendnew_next_sd_ejUFnfZNlysDod57
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ejUFnfZNlysDod57');
    }
  }

  sd_YtZwxNvBGKIYKDPj(bh) {
    try {
      this.page.location = this.__page_injector__.get(Location);
      bh = this.sd_TqH897bC0nz3OEUT(bh);
      //appendnew_next_sd_YtZwxNvBGKIYKDPj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YtZwxNvBGKIYKDPj');
    }
  }

  sd_TqH897bC0nz3OEUT(bh) {
    try {
      const page = this.page;
      page.location.back();

      //appendnew_next_sd_TqH897bC0nz3OEUT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TqH897bC0nz3OEUT');
    }
  }

  async sd_KpidmSIY6Y1p6PJ3(bh) {
    try {
      if (
        this.sdService.operators['gte'](
          this.page.loggedInUser.balance,
          this.page.ewalletForm.value.amount,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_Jm45EC1HjOc0Til9(bh);
      } else {
        bh = await this.sd_y8NPVOYtgWYXmVH1(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KpidmSIY6Y1p6PJ3');
    }
  }

  sd_Jm45EC1HjOc0Til9(bh) {
    try {
      const page = this.page;
      console.log('ewallet', page.ewalletForm.value);

      page.loggedInUser.balance =
        page.loggedInUser.balance - page.ewalletForm.value.amount;

      console.log('page', page);
      bh = this.sd_o88uOmbvijx6Wy63(bh);
      //appendnew_next_sd_Jm45EC1HjOc0Til9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Jm45EC1HjOc0Til9');
    }
  }

  sd_o88uOmbvijx6Wy63(bh) {
    try {
      sessionStorage.setItem('user', JSON.stringify(this.page.loggedInUser));
      bh = this.sd_r8tm4SfEpQZwMiOP(bh);
      //appendnew_next_sd_o88uOmbvijx6Wy63
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_o88uOmbvijx6Wy63');
    }
  }

  sd_r8tm4SfEpQZwMiOP(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_X4wo6MWSDt6k4TJ9(bh);
      //appendnew_next_sd_r8tm4SfEpQZwMiOP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_r8tm4SfEpQZwMiOP');
    }
  }

  sd_X4wo6MWSDt6k4TJ9(bh) {
    try {
      const page = this.page;
      bh.url = `https://111e-169-239-176-9.ngrok-free.app/api/ewallet`;
      bh.url2 = `https://111e-169-239-176-9.ngrok-free.app/api/update`;

      bh.body = page.ewalletForm.value;

      bh.body2 = {
        email: page.loggedInUser.email,
        collection: 'users',
        balance: page.loggedInUser.balance,
      };
      bh = this.sd_lnBzQH0qh2i6tbcJ(bh);
      //appendnew_next_sd_X4wo6MWSDt6k4TJ9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_X4wo6MWSDt6k4TJ9');
    }
  }

  async sd_lnBzQH0qh2i6tbcJ(bh) {
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
      bh = this.sd_3JoUcgHKLhQQMcnP(bh);
      //appendnew_next_sd_lnBzQH0qh2i6tbcJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lnBzQH0qh2i6tbcJ');
    }
  }

  async sd_3JoUcgHKLhQQMcnP(bh) {
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
      bh = this.sd_lkytglxcN3IN0Nrp(bh);
      //appendnew_next_sd_3JoUcgHKLhQQMcnP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3JoUcgHKLhQQMcnP');
    }
  }

  sd_lkytglxcN3IN0Nrp(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Purchase Successful', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      bh = this.sd_wBaHh0763j38xP64(bh);
      //appendnew_next_sd_lkytglxcN3IN0Nrp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lkytglxcN3IN0Nrp');
    }
  }

  async sd_wBaHh0763j38xP64(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/bank');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_wBaHh0763j38xP64
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wBaHh0763j38xP64');
    }
  }

  sd_y8NPVOYtgWYXmVH1(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('Insufficent funds', 'Ok', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_y8NPVOYtgWYXmVH1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_y8NPVOYtgWYXmVH1');
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
  //appendnew_flow_ewalletComponent_Catch
}
