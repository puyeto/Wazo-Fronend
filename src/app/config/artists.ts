import { ApiService } from "../service/api.service";

export class ArtistsConfig {

  public config: any = {};

  constructor(private api: ApiService) {
    this.config = {
      items: []
    };

    this.api.postWithAuth("home/second/list", {}).subscribe((res: any) => {
      console.log(res);
      if (res.success) {
        var datas = res.data;
        var artists = datas.artists.data;

        artists.forEach(element => {
          this.config.items.push(
            {
              id: element.artist_id,
              name: element.name,
              dob: '',
              ratings: 4.5,
              cover_url: element.picture === 'other-placeholder.jpg' ? './assets/images/cover/large/3.jpg' : element.picture,
              bio: ''
            }
          );

        });

        // this.setState({
        //   first_section_items: response.data.data,

        //   isLoaded: true,

        //   banner_length: datas.banner.data.length,

        //   recent_activities_length: datas["recent activities"].data.length,

        //   trending_length: datas.trending.data.length
        // });

        // this.homePageSecondSection();
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
