// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Location } from '@angular/common'; //_splitter_
import { Component, Injector } from '@angular/core'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-qr_code_reader',
  templateUrl: './qr_code_reader.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class qr_code_readerComponent {
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
      this.sd_CNBBqa9xYYQzraID(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_CNBBqa9xYYQzraID(bh) {
    try {
      bh = this.sd_tS4QeW0tWbtwlwf1(bh);
      //appendnew_next_sd_CNBBqa9xYYQzraID
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CNBBqa9xYYQzraID');
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
      bh = this.sd_6FAeldNSGa6Uql2w(bh);
      //appendnew_next_goBack
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IaPEY5gAM9QL2Zh4');
    }
  }

  viewData(action: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { action };
      bh.local = {};
      bh = this.sd_GfcIe9RgKA14Oy0X(bh);
      //appendnew_next_viewData
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hERbmQfiGKDFVTdC');
    }
  }
  //appendnew_flow_qr_code_readerComponent_start

  sd_tS4QeW0tWbtwlwf1(bh) {
    try {
      this.page.showSpinner = false;
      bh = this.sd_fINOKqWSNegNVblj(bh);
      //appendnew_next_sd_tS4QeW0tWbtwlwf1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tS4QeW0tWbtwlwf1');
    }
  }

  sd_fINOKqWSNegNVblj(bh) {
    try {
      this.page.user = JSON.parse(sessionStorage.getItem('user'));
      //appendnew_next_sd_fINOKqWSNegNVblj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fINOKqWSNegNVblj');
    }
  }

  sd_6FAeldNSGa6Uql2w(bh) {
    try {
      this.page.location = this.__page_injector__.get(Location);
      bh = this.sd_wkoF8gW7CdJX16if(bh);
      //appendnew_next_sd_6FAeldNSGa6Uql2w
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6FAeldNSGa6Uql2w');
    }
  }

  sd_wkoF8gW7CdJX16if(bh) {
    try {
      const page = this.page;
      page.location.back();

      //appendnew_next_sd_wkoF8gW7CdJX16if
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wkoF8gW7CdJX16if');
    }
  }

  sd_GfcIe9RgKA14Oy0X(bh) {
    try {
      const page = this.page;

      if (bh.input.action) {
        const data = JSON.stringify(bh.input.action.data.value[0].value);
        const parsed = JSON.parse(data);
        bh.scanned = JSON.parse(parsed);
        bh.scanned.belongsTo = page.user.email;
        bh.scanned.transDate = new Date();
        bh.scanned.transType = 'scan_to_pay';
        bh.scanned.statement = bh.scanned.itemName;
        bh.scanned.moneyType = 'moneyOut';
        bh.scanned._id = new Date().getTime();
        bh.scanned['email'] = page.user.email;
        delete bh.scanned['accountNumber'];
        page.showSpinner = true;
      }
      bh = this.sd_Q732udEvExH85ymY(bh);
      //appendnew_next_sd_GfcIe9RgKA14Oy0X
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GfcIe9RgKA14Oy0X');
    }
  }

  sd_Q732udEvExH85ymY(bh) {
    try {
      this.page.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.sd_hjj29cqmNZyDSYRA(bh);
      //appendnew_next_sd_Q732udEvExH85ymY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Q732udEvExH85ymY');
    }
  }

  sd_hjj29cqmNZyDSYRA(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdURL + 'scan-payment';
      bh.url_update = page.ssdURL + 'update';
      bh.url_user = page.ssdURL + 'get-users';

      bh.difference = page.user.balance - bh.scanned.amount;

      bh.body = {
        email: page.user.email,
        balance: bh.difference,
        collection: 'users',
      };

      bh = this.sd_m7lT5x0dyAM3txcJ(bh);
      //appendnew_next_sd_hjj29cqmNZyDSYRA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hjj29cqmNZyDSYRA');
    }
  }

  async sd_m7lT5x0dyAM3txcJ(bh) {
    try {
      if (
        this.sdService.operators['gte'](
          this.page.user.balance,
          bh.scanned.amount,
          undefined,
          undefined
        )
      ) {
        bh = this.scanner(bh);
      } else {
        bh = await this.sd_iEk6KDPN7nSJgy9b(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_m7lT5x0dyAM3txcJ');
    }
  }

  async scanner(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.scanned,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.updateUser(bh);
      //appendnew_next_scanner
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_663pfADz7NdrrjfM');
    }
  }

  async updateUser(bh) {
    try {
      let requestOptions = {
        url: bh.url_update,
        method: 'put',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.body,
      };
      this.page.update_results = await this.sdService.nHttpRequest(
        requestOptions
      );
      bh = this.getUser(bh);
      //appendnew_next_updateUser
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CQBHxM4rQPlBpSON');
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
      this.page.users_results = await this.sdService.nHttpRequest(
        requestOptions
      );
      bh = this.sd_Fpb5KSqsPMPlnxt4(bh);
      //appendnew_next_getUser
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rT5pfQdV6MB1EVEo');
    }
  }

  sd_Fpb5KSqsPMPlnxt4(bh) {
    try {
      const page = this.page;
      bh.currentUser = page.users_results.find((user: any) => {
        return user.email == page.user.email;
      });

      page.showSpinner = false;

      bh = this.sd_npQatSY15TuyrsgD(bh);
      //appendnew_next_sd_Fpb5KSqsPMPlnxt4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Fpb5KSqsPMPlnxt4');
    }
  }

  sd_npQatSY15TuyrsgD(bh) {
    try {
      sessionStorage.setItem('user', JSON.stringify(bh.currentUser));
      bh = this.sd_Zuae4FuwHVc4AIUJ(bh);
      //appendnew_next_sd_npQatSY15TuyrsgD
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_npQatSY15TuyrsgD');
    }
  }

  async sd_Zuae4FuwHVc4AIUJ(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      bh = this.sd_Lhi3K1SeUqzMUG5J(bh);
      //appendnew_next_sd_Zuae4FuwHVc4AIUJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Zuae4FuwHVc4AIUJ');
    }
  }

  sd_Lhi3K1SeUqzMUG5J(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('payment successful!', 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_Lhi3K1SeUqzMUG5J
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Lhi3K1SeUqzMUG5J');
    }
  }

  sd_iEk6KDPN7nSJgy9b(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('Insuficient funds', '', {
        duration: 1000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_iEk6KDPN7nSJgy9b
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iEk6KDPN7nSJgy9b');
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
  //appendnew_flow_qr_code_readerComponent_Catch
}
