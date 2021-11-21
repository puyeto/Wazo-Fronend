import { ApiService } from "../service/api.service";

export class SongsConfig {

  public config: any = {};

  constructor(private api: ApiService) {
    this.config = {
      items: [
        {}
      ]
    };

    this.api.postWithAuth("home/first/list", {}).subscribe((res: any) => {
      console.log(res);
      if (res.success) {
        var datas = res.data;
        var trending = datas.trending.data;

        trending.forEach(element => {
          this.config.items.push(
            {
              id: element.song_id,
              premium: true,
          favorite: true,
          name: element.title,
              artist: '',
              album: '',
              url: element.web_audio_url,
              cover_art_url: element.picture === 'other-placeholder.jpg' ? './assets/images/cover/large/3.jpg' :  element.picture,
              cover_url: element.picture === 'other-placeholder.jpg' ? './assets/images/cover/large/3.jpg' : element.picture,
              ratings: 4.5,
              composer: '',
              lyricist: '',
              director: '',
              downloads: '',
              lyrics: ''
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
