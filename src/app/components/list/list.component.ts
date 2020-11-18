import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Data } from 'src/app/models/Data';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements AfterViewInit {
  data: Data[];
  displayedColumns: string[] = ['_id', 'name', 'tel', 'edit', 'delete'];


  dataSource: MatTableDataSource<Data>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    this.dataSource = new MatTableDataSource(this.data);
  }

  ngAfterViewInit(): void {

    this.getData()
      .then(() => {
        this.dataSource.data = this.data;
      })

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(filterValue.trim().toLowerCase());

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteData(id: string) {
    console.log(id);
    this.data = this.data.filter((value, i, arr) => {
      value._id != id;
    });
  }

  getData() {
    const p = new Promise((res, rej) => {
      try {
        // Get the data
        this.data = [
          {
            _id: "123123213",
            name: "Lorem Cop",
            tel: "+1332133124123"
          },
          {
            _id: "222314",
            name: "Ipsum Cop",
            tel: "+21304123012"
          },
          {
            _id: "31231232313",
            name: "Tabik Cop",
            tel: "+09843234434"
          }
        ];
        res()
      } catch (error) {
        console.log(error);
        rej(error);
      }
    });
    return p;

  }

}
