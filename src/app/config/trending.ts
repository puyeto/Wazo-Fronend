import { ConditionalExpr } from "@angular/compiler";
import { ApiService } from "../service/api.service";

export class TrendingConfig {

  public trendConfig: any = {};
  public trendCount = 0;
  private skip = 0;

  constructor(private api: ApiService) {
    this.trendConfig = {
      items: []
    };

    this.api.postWithAuth("trending/songs", { skip: this.skip, type: 'trending' }).subscribe((res: any) => {
      console.log(res);
      if (res.success) {
        var trending = res.data;
        this.trendCount = res.no_of_songs;

        trending.forEach(element => {
          this.trendConfig.items.push(
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
