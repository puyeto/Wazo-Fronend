import { ApiService } from "../service/api.service";

export class SongsConfig {

  public config: any = {};

  constructor(private api: ApiService) {
    this.config = {
      items: [],
      banner: ''
    };

    this.api.postWithAuth("home/first/list", {}).subscribe((res: any) => {
      console.log(res);
      if (res.success) {
        var datas = res.data;
        var trending = datas.trending.data;
        this.config.banner = datas.banner.data[0].picture;

        trending.forEach(element => {
          this.config.items.push(
            {
              id: element.song_id,
              premium: true,
              favorite: element.wishlist_status,
              name: element.title,
              artist: '',
              album: '',
              url: 'https://streamtunes-assets.s3.us-east-1.wasabisys.com/uploads/songs/' + element.web_audio_url,
              cover_art_url: element.picture === 'other-placeholder.jpg' ? './assets/images/cover/large/3.jpg' : element.picture,
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

        this.config.count = trending.length;

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
    }, () => {
      console.log("oops something went wrong");
    });
  }
}
