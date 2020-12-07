import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AlbumListComponent } from "./album-list/album-list.component";
import { AlbumComponent } from "./album/album.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, AlbumListComponent, AlbumComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
