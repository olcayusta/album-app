import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Album } from "./album.model";
import { map } from "rxjs/operators";

export interface DataInterface {
  href: string;
  items: Album[];
  limit: number;
  next: string;
  offset: number;
  previous: boolean;
  total: number;
}

@Injectable({
  providedIn: "root",
})
export class AlbumService {
  BEARER_TOKEN =
    "BQBgUdRs6-cQU06vTXyo2T5xz_kmyT-dT3i94azrpg02Lp7_28G0VUQxH2fqH6_B4oybEd4hekHa5zemauSWaZyETtCCnFP_otz2RsBSaue9o509IGcPM8s_5g9BvwtSzX0wbEH5bZiOI8Y1jNngxbN10EfdkPP9DvA";

  constructor(private http: HttpClient) {}

  getAlbums(): Observable<Album[]> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.BEARER_TOKEN}`,
    });
    return this.http
      .get<DataInterface>(
        `https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6/albums?market=ES&limit=24`,
        {
          headers,
        }
      )
      .pipe(
        map((value) => {
          // Spotify albumleri, items property ile donduruyor. O yuzden map ile ayristiriyoruz.
          return value.items;
        })
      );
  }
}
