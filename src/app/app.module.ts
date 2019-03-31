import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseApi } from 'src/app/services/base-api.service';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './components/home/home.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { AlbumComponent } from './components/albums/album/album.component';
import { DatePipe } from '@angular/common';
import { AlbumThumbComponent } from './components/albums/album-thumb/album-thumb.component';
import { LoaderComponent } from './components/loader/loader.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { FormsModule } from '@angular/forms';
import { PhotosComponent } from './components/photos/photos.component';
import { PhotoComponent } from './components/photos/photo/photo.component';
import { PhotoThumbComponent } from './components/photos/photo-thumb/photo-thumb.component';
import { TagsComponent } from './components/tags/tags.component';
import { DarkroomSettingsComponent } from './components/darkroom-settings/darkroom-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlbumsComponent,
    AlbumComponent,
    AlbumThumbComponent,
    LoaderComponent,
    SearchInputComponent,
    PhotosComponent,
    PhotoComponent,
    PhotoThumbComponent,
    TagsComponent,
    DarkroomSettingsComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    BaseApi,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
