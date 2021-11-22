import { ApiService } from "../service/api.service";

export class GenresConfig {

  public config: any = {};

  constructor(private api: ApiService) {
    this.config = {
      items: []
    };

    this.api.postWithAuth("home/second/list", {}).subscribe((res: any) => {
      if (res.success) {
        var datas = res.data;
        var categories = datas.categories.data;

        categories.forEach(element => {
          this.config.items.push(
            {
              id: element.category_id,
              name: element.name,
              cover_url: element.picture === 'other-placeholder.jpg' ? './assets/images/cover/large/3.jpg' : element.picture,
            }
          );

        });
      } else {
        console.log(res.error);
      }
    }, () => {
      console.log("oops something went wrong");
    });
  }
}
