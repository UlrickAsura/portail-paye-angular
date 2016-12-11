import {NgModule, ModuleWithProviders} from '@angular/core'
import { MaterialModule } from '@angular/material'
import { FlexLayoutModule } from '@angular/flex-layout'
import { ReactiveFormsModule,FormsModule } from "@angular/forms"
import {CommonModule} from "@angular/common"

import { AuthentificationRoutingModule } from './authentification-routing.module'
import { ConnexionComponent } from './connexion.component'
import { MotPasseOublieComponent } from './mot-passe-oublie-component'
import { CenterLayoutComponent } from './layout/center-layout.component'
import { ResetMotPasseComponent } from './reset-mot-passe.component'
import { ConnexionFormComponent }          from './form/connexion-form.component'
import { DemandeMotPasseFormComponent }  from './form/demande-mot-passe-form.component'
import { ResetMotPasseFormComponent } from './form/reset-mot-passe-form.component'
import { MdInputValidDirective } from './form/md-input-valid.directive'
import { FormValidityDirective }  from './form/form-validity.directive'
import { AuthService }            from './authentification.service'
import { LoginProvider } from "./core/login.provider"
import { LayoutModule }   from '../layout/layout.module'
import { SharedModule } from '../shared/shared.module'


require('./assets/connexion-background.jpg')

@NgModule({
    imports: [
        MaterialModule,
        FlexLayoutModule,
        AuthentificationRoutingModule,
        SharedModule,
        LayoutModule,
        ReactiveFormsModule,
        FormsModule,
        CommonModule
    ],
    providers:[
        AuthService,
        LoginProvider
    ],
    declarations:[
        ConnexionComponent,
        CenterLayoutComponent,
        MotPasseOublieComponent,
        ResetMotPasseComponent,
        ConnexionFormComponent,
        DemandeMotPasseFormComponent,
        MdInputValidDirective,
        ResetMotPasseFormComponent,
        FormValidityDirective
    ]
})

export class AuthentificationModule {

    static forRoot(loginProvider): ModuleWithProviders {
        return {
            ngModule: AuthentificationModule,
            providers: [ AuthService,{
                provide:LoginProvider,useClass:loginProvider
            } ]
        };
    }
}