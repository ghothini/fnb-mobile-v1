// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Location } from '@angular/common'; //_splitter_
import { Injectable, Injector } from '@angular/core'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable({
  providedIn: 'root',
})
export class common {
  public random: any;
  public email: any;
  public currentQuote: any;
  public isDepositAfterChange: any;
  public data: any;

  constructor(
    private sdService: SDBaseService,
    private router: Router,
    private matSnackBar: MatSnackBar,
    private __service_injector__: Injector
  ) {
    this.registerListeners();
  }
  private registerListeners() {
    let bh = this.sdService.__constructDefault({});

    //append_listeners
  }

  //   service flows_common

  async goBack(...others) {
    let bh: any = {
      input: {},
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_ZMlcqDyLVVUnwQuz(bh);
      //appendnew_next_goBack
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_jJRXnjTcMQmcijs6');
    }
  }

  async generateRandomNumber(email: any = undefined, ...others) {
    let bh: any = {
      input: {
        email,
      },
      local: {
        random: 0,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_GivSlaUgVKNBuw7X(bh);
      //appendnew_next_generateRandomNumber
      return (
        // formatting output variables
        {
          input: {},
          local: {
            random: bh.local.random,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_7URbVYjuQh1rrIFw');
    }
  }

  async update(newQuote = 0, ...others) {
    let bh: any = {
      input: {
        newQuote,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_DbXIiXM0h0l5FP71(bh);
      //appendnew_next_update
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_vO7ZpSwQ0nvvbLo3');
    }
  }

  async amount(...others) {
    let bh: any = {
      input: {},
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_SSD3DKzpFoOLZnwq(bh);
      //appendnew_next_amount
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_gDxgBOtWEwBlKd2e');
    }
  }

  async setPasswordChangeFollowUp(action: any = undefined, ...others) {
    let bh: any = {
      input: {
        action,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_1fpBSnGEOwIQ0dCy(bh);
      //appendnew_next_setPasswordChangeFollowUp
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_fBcbEqP7uTw4Uren');
    }
  }

  async setVariable(data: any = undefined, ...others) {
    let bh: any = {
      input: {
        data,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_pl1x9eiI6pyoz5tG(bh);
      //appendnew_next_setVariable
      return (
        // formatting output variables
        {
          input: {
            data: bh.input.data,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ezuMhbJnHtjdl14d');
    }
  }

  async getVariable(...others) {
    let bh: any = {
      input: {},
      local: {
        data: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_TqMbG6UAczM03Ygf(bh);
      //appendnew_next_getVariable
      return (
        // formatting output variables
        {
          input: {},
          local: {
            data: bh.local.data,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ID9xmnst2f0l3dYn');
    }
  }
  //appendnew_flow_common_start

  async sd_ZMlcqDyLVVUnwQuz(bh) {
    try {
      bh.location = this.__service_injector__.get(Location);
      bh = await this.sd_41H6JPbAEHahPPfJ(bh);
      //appendnew_next_sd_ZMlcqDyLVVUnwQuz
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ZMlcqDyLVVUnwQuz');
    }
  }

  async sd_41H6JPbAEHahPPfJ(bh) {
    try {
      bh.location.back();
      //appendnew_next_sd_41H6JPbAEHahPPfJ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_41H6JPbAEHahPPfJ');
    }
  }

  async sd_GivSlaUgVKNBuw7X(bh) {
    try {
      // Generates a random number between 1000 (inclusive) and 10000 (exclusive)
      bh.local.random = Math.floor(1000 + Math.random() * 9000);
      bh = await this.sd_8IfP9fSLeu6m7gEI(bh);
      //appendnew_next_sd_GivSlaUgVKNBuw7X
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_GivSlaUgVKNBuw7X');
    }
  }

  async sd_8IfP9fSLeu6m7gEI(bh) {
    try {
      this.random = bh.local.random;
      this.email = bh.input.email;
      //appendnew_next_sd_8IfP9fSLeu6m7gEI
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8IfP9fSLeu6m7gEI');
    }
  }

  async sd_DbXIiXM0h0l5FP71(bh) {
    try {
      bh = await this.sd_e0YkvY1IoU1EKOEY(bh);
      //appendnew_next_sd_DbXIiXM0h0l5FP71
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_DbXIiXM0h0l5FP71');
    }
  }

  async sd_e0YkvY1IoU1EKOEY(bh) {
    try {
      console.log('quote :', bh);
      // bh.quote.next(bh.input.newQuote)
      bh = await this.sd_fIHO9yfBT63eind0(bh);
      //appendnew_next_sd_e0YkvY1IoU1EKOEY
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_e0YkvY1IoU1EKOEY');
    }
  }

  async sd_fIHO9yfBT63eind0(bh) {
    try {
      this.currentQuote = bh;
      //appendnew_next_sd_fIHO9yfBT63eind0
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_fIHO9yfBT63eind0');
    }
  }

  async sd_SSD3DKzpFoOLZnwq(bh) {
    try {
      bh = await this.sd_iShVV0N6PNcKApKr(bh);
      //appendnew_next_sd_SSD3DKzpFoOLZnwq
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_SSD3DKzpFoOLZnwq');
    }
  }

  async sd_iShVV0N6PNcKApKr(bh) {
    try {
      // Declaring a quote
      // bh.quote = new BehaviorSubject<string>("hello")
      console.log('hello', bh);

      // expose as an observable
      // bh.currentQuote = bh.quote.asObservable()

      //appendnew_next_sd_iShVV0N6PNcKApKr
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_iShVV0N6PNcKApKr');
    }
  }

  async sd_1fpBSnGEOwIQ0dCy(bh) {
    try {
      this.isDepositAfterChange = bh.input.action;
      this.sd_G8MDIPdcDdzpS8V1(bh);
      //appendnew_next_sd_1fpBSnGEOwIQ0dCy
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_1fpBSnGEOwIQ0dCy');
    }
  }

  async sd_G8MDIPdcDdzpS8V1(bh) {
    try {
      console.log(
        new Date().toLocaleTimeString(),
        bh.input.isDepositAfterChange
      );
      //appendnew_next_sd_G8MDIPdcDdzpS8V1
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_G8MDIPdcDdzpS8V1');
    }
  }

  async sd_pl1x9eiI6pyoz5tG(bh) {
    try {
      this.data = bh.input.data;
      //appendnew_next_sd_pl1x9eiI6pyoz5tG
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_pl1x9eiI6pyoz5tG');
    }
  }

  async sd_TqMbG6UAczM03Ygf(bh) {
    try {
      bh.local.data = this.data;
      //appendnew_next_sd_TqMbG6UAczM03Ygf
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_TqMbG6UAczM03Ygf');
    }
  }

  //appendnew_node

  // error_handler_slot
  private async errorHandler(bh, e, src): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    throw e;
  }
  //appendnew_flow_common_Catch
}
