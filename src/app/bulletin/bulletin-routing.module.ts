import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


export const routes: Routes = [
    { path: '',

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BulletinRoutingModule {}