import { bootstrap }    from '@angular/platform-browser-dynamic';
import {CharComponent} from "./char/char.component";
import {CharService} from "./char/char.service";

bootstrap(CharComponent, [CharService]);