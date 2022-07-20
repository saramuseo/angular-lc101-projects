import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My Favorite Photos';
  image1 = 'https://avatars.githubusercontent.com/u/16672273?s=200&v=4';
  image2 = 'https://www.mydomaine.com/thmb/7PvLnIo_VbGR04okY1mWsbT5m5k=/500x350/filters:no_upscale():max_bytes(150000):strip_icc()/10.PhotobyRettPeekcourtesyofSeanAndersonDesign-200044cbbbe94af18e849eadee52e44e.jpg';
  image3 = 'https://i.pinimg.com/564x/fa/cc/f0/faccf08f7696f93abea8985d0c6500cf.jpg';

  constructor() { }

  ngOnInit() {
  }

}