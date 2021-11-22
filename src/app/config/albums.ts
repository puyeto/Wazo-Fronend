import { ApiService } from "../service/api.service";

export class AlbumsConfig {

  public config: any = {};

  constructor(private api: ApiService) {
    this.config = {
      items: []
    };

    this.api.postWithAuth("home/third/list", {}).subscribe((res: any) => {
      if (res.success) {
        var datas = res.data;
        var albums = datas.albums.data;

        albums.forEach(element => {
          this.config.items.push(
            {
              id: element.movie_album_id,
              name: element.name,
              ratings: 4.5,
              cover_art_url: element.picture === 'other-placeholder.jpg' ? './assets/images/cover/large/3.jpg' : element.picture,
              cover_url: element.picture === 'other-placeholder.jpg' ? './assets/images/cover/large/3.jpg' : element.picture,
            }
          );

        });
      } else {
        console.log(res.error);
      }
    },
      error => {
        console.log(error);
      }, () => {
        console.log("oops something went wrong");
      });

  }
}
