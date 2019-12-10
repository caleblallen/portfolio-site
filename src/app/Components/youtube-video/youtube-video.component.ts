import { Component, OnInit, Input } from '@angular/core';
import { WebLink } from '../../Model/WebLink';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-youtube-video',
  templateUrl: './youtube-video.component.html',
  styleUrls: ['./youtube-video.component.scss']
})
export class YoutubeVideoComponent implements OnInit {
  @Input() public lnk: WebLink;
  public vidUrl: SafeUrl;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    const embedUrl = this.lnk.link.replace('www.youtube.com/watch','www.youtube.com/embed');
    this.vidUrl = this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }

}
