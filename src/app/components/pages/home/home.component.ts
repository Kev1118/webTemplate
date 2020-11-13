import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  images = ['no-image.jpg', 'no-image.jpg', 'no-image.jpg'].map((n) => `assets/images/${n}`);

  imageObject: Array<object> = [{
        image: 'assets/images/no-image.jpg',
        thumbImage: 'assets/images/no-image.jpg',
        alt: 'image-slider-1',
        title: 'sample project',
    },
    {
        image: 'assets/images/no-image.jpg', // Support base64 image
        thumbImage: 'assets/images/no-image.jpg', // Support base64 image
        title: 'sample project', // Optional: You can use this key if want to show image with title
        alt: 'image-slider-2' // Optional: You can use this key if want to show image with alt
    },
    {
        image: 'assets/images/no-image.jpg', // Support base64 image
        thumbImage: 'assets/images/no-image.jpg', // Support base64 image
        title: 'sample project', // Optional: You can use this key if want to show image with title
        alt: 'image-slider-3' // Optional: You can use this key if want to show image with alt
    },
    {
        image: 'assets/images/no-image.jpg', // Support base64 image
        thumbImage: 'assets/images/no-image.jpg', // Support base64 image
        title: 'sample project', // Optional: You can use this key if want to show image with title
        alt: 'image-slider-4' // Optional: You can use this key if want to show image with alt
    },
    {
        image: 'assets/images/no-image.jpg', // Support base64 image
        thumbImage: 'assets/images/no-image.jpg', // Support base64 image
        title: 'sample project', // Optional: You can use this key if want to show image with title
        alt: 'image-slider-5' // Optional: You can use this key if want to show image with alt
    },

];
  constructor() { }

  ngOnInit(): void {

  }


}
