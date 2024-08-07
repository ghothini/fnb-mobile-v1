// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Location } from '@angular/common'; //_splitter_
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
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
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
      bh = this.sd_OnSUPPFMBUNz3qXm(bh);
      //appendnew_next_send
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yH9RhqdKZgTlfLF9');
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
      bh = this.sd_R7mMy4CLbqOVfK40(bh);
      //appendnew_next_allowNumbers
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HGRTJ7UpyDA4nPij');
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
      this.page.showSpinner = false;
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

      page.ewalletForm = new FormGroup({
        firstName: new FormControl(page.loggedInUser.name),
        email: new FormControl(page.loggedInUser.email),
        amount: new FormControl('', Validators.required),
        cellNumber: new FormControl('', Validators.required),
        transactionDate: new FormControl(page.formattedDate),
      });

      bh = this.sd_UC6Yc7vmTzhFhAbG(bh);
      //appendnew_next_sd_ejUFnfZNlysDod57
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ejUFnfZNlysDod57');
    }
  }

  sd_UC6Yc7vmTzhFhAbG(bh) {
    try {
      localStorage.setItem('selectedPage', JSON.stringify('eWallet'));
      //appendnew_next_sd_UC6Yc7vmTzhFhAbG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UC6Yc7vmTzhFhAbG');
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

  async sd_OnSUPPFMBUNz3qXm(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          this.page.ewalletForm.status,
          'VALID',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_KpidmSIY6Y1p6PJ3(bh);
      } else {
        bh = await this.sd_KTQtj2xIkv7GmW38(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OnSUPPFMBUNz3qXm');
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
      page.showSpinner = true;
      page.loggedInUser.balance =
        page.loggedInUser.balance - page.ewalletForm.value.amount;

      bh = this.sd_r8tm4SfEpQZwMiOP(bh);
      //appendnew_next_sd_Jm45EC1HjOc0Til9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Jm45EC1HjOc0Til9');
    }
  }

  sd_r8tm4SfEpQZwMiOP(bh) {
    try {
      this.page.ssdURL = bh.system.environment.properties.ssdURL;
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
      bh.url = page.ssdURL + 'ewallet';
      bh.url2 = page.ssdURL + 'update';
      bh.url_user = page.ssdURL + 'get-users';

      bh.body = page.ewalletForm.value;

      bh.body2 = {
        email: page.loggedInUser.email,
        collection: 'users',
        balance: page.loggedInUser.balance,
      };
      bh = this.sendEwallet(bh);
      //appendnew_next_sd_X4wo6MWSDt6k4TJ9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_X4wo6MWSDt6k4TJ9');
    }
  }

  async sendEwallet(bh) {
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
      //appendnew_next_sendEwallet
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lnBzQH0qh2i6tbcJ');
    }
  }

  async update(bh) {
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
      bh = this.getUser(bh);
      //appendnew_next_update
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3JoUcgHKLhQQMcnP');
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
      bh = this.sd_FNEDdD8RKmhrAfPt(bh);
      //appendnew_next_getUser
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UX53ofbJtG11eGVm');
    }
  }

  sd_FNEDdD8RKmhrAfPt(bh) {
    try {
      const page = this.page;
      bh.found = page.get_user.find((user: any) => {
        return user.email == page.loggedInUser.email;
      });

      page.showSpinner = false;

      bh = this.sd_mfVB2S0l2eO7gW8X(bh);
      //appendnew_next_sd_FNEDdD8RKmhrAfPt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FNEDdD8RKmhrAfPt');
    }
  }

  sd_mfVB2S0l2eO7gW8X(bh) {
    try {
      sessionStorage.setItem('user', JSON.stringify(bh.found));
      bh = this.sd_lkytglxcN3IN0Nrp(bh);
      //appendnew_next_sd_mfVB2S0l2eO7gW8X
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mfVB2S0l2eO7gW8X');
    }
  }

  sd_lkytglxcN3IN0Nrp(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('eWallet Successful', 'Ok', {
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
        this.sdService.getPathAndQParamsObj('/home/bank');
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

  sd_KTQtj2xIkv7GmW38(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Fill in all form fields', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_KTQtj2xIkv7GmW38
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KTQtj2xIkv7GmW38');
    }
  }

  sd_R7mMy4CLbqOVfK40(bh) {
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
      //appendnew_next_sd_R7mMy4CLbqOVfK40
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_R7mMy4CLbqOVfK40');
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
