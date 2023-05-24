import { CdkTableDataSourceInput } from '@angular/cdk/table';
import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ObservableInputTuple } from 'rxjs';
import { DataService } from 'src/app/shared/service/data.service';

@Component({
  selector: 'app-view-doctor',
  templateUrl: './view-doctor.component.html',
  styleUrls: ['./view-doctor.component.css']
})
export class ViewDoctorComponent implements OnInit{
applyFilter($event: KeyboardEvent) {
throw new Error('Method not implemented.');
}
viewPatient(_t88: any) {
throw new Error('Method not implemented.');
}
editPatient(_t88: any) {
throw new Error('Method not implemented.');
}
      id !: any;
      doctorObj !:any;
dataSource: CdkTableDataSourceInput<any> | undefined;
displayedColumns: any;
      constructor(private route: ActivatedRoute,
        private dataApi : DataService
        ){
              this.id = route.snapshot.paramMap.get('id');
      }
  ngOnInit(): void {
    this.getDoctorById();
  }

  getDoctorById(){
        this.dataApi.getDoctorById(this.id).subscribe(res =>{
          this.doctorObj = res;
          console.log(this.doctorObj);
        })
  }
}
