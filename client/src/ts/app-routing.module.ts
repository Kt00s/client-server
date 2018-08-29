import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashbboard.component";
import {LectureDetailComponent} from "./lecture-detail/lecture-detail.component";
import {LectureDetailComponentForUser} from "./lecture-detail-for-user.component/lecture-detail-for-user.component";
import {LecturesComponent} from "./lectures/lectures.component";

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'detail/:id', component: LectureDetailComponent },
    {path: 'detail-for-user/:id', component: LectureDetailComponentForUser},
    { path: 'heroes', component: LecturesComponent },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}