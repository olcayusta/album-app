import { Component, OnInit } from "@angular/core";
import { Album } from "../album.model";
import { AlbumService } from "../album.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-album-list",
  templateUrl: "./album-list.component.html",
  styleUrls: ["./album-list.component.scss"],
})
export class AlbumListComponent implements OnInit {
  albums!: Observable<Album[]>;

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    this.albums = this.albumService.getAlbums();
  }
}
