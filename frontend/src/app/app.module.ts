import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { ElectrsApiService } from './services/electrs-api.service';
import { StateService } from './services/state.service';
import { CacheService } from './services/cache.service';
import { PriceService } from './services/price.service';
import { EnterpriseService } from './services/enterprise.service';
import { WebsocketService } from './services/websocket.service';
import { AudioService } from './services/audio.service';
import { SeoService } from './services/seo.service';
import { OpenGraphService } from './services/opengraph.service';
import { SharedModule } from './shared/shared.module';
import { StorageService } from './services/storage.service';
import { HttpCacheInterceptor } from './services/http-cache.interceptor';
import { HttpRetryInterceptor } from './services/http-retry.interceptor';
import { LanguageService } from './services/language.service';
import { FiatShortenerPipe } from './shared/pipes/fiat-shortener.pipe';
import { FiatCurrencyPipe } from './shared/pipes/fiat-currency.pipe';
import { ShortenStringPipe } from './shared/pipes/shorten-string-pipe/shorten-string.pipe';
import { CapAddressPipe } from './shared/pipes/cap-address-pipe/cap-address-pipe';
import { AppPreloadingStrategy } from './app.preloading-strategy';
import { InscriptionParserService } from './services/inscriptions/inscription-parser.service';
import { InscriptionFetcherService } from './services/inscriptions/inscription-fetcher.service';
import { BlockchainApiService } from './services/inscriptions/blockchain-api.service';
import { HiroApiService } from './services/inscriptions/hiro-api.service';


const providers = [
  ElectrsApiService,
  StateService,
  CacheService,
  PriceService,
  WebsocketService,
  AudioService,
  SeoService,
  OpenGraphService,
  StorageService,
  EnterpriseService,
  LanguageService,
  ShortenStringPipe,
  FiatShortenerPipe,
  FiatCurrencyPipe,
  CapAddressPipe,
  AppPreloadingStrategy,
  InscriptionParserService,
  InscriptionFetcherService,
  BlockchainApiService,
  HiroApiService,
  { provide: HTTP_INTERCEPTORS, useClass: HttpCacheInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: HttpRetryInterceptor, multi: true }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: providers,
  bootstrap: [AppComponent]
})
export class AppModule { }

@NgModule({})
export class MempoolSharedModule{
  static forRoot(): ModuleWithProviders<MempoolSharedModule> {
    return {
      ngModule: AppModule,
      providers: providers
    };
  }
}
