import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  cachesStore: any[]= [];

  getCache(key: string) {
    return this.cachesStore[key];
  }

  newCache(key: string): any {
    return this.cachesStore[key] = {};
  }

  getFromCache(cache: any[], limit: number, offset: number): any[] {
    return cache.slice(offset, offset + limit);
  }

  cache(cache: any[],limit: number, offset: number, data: any[]) {
    this.expandCacheIfNeeded(cache, limit, offset);
    cache.splice(offset,data.length, ...data);
  }

  expandCacheIfNeeded(cache: any[],limit: number, offset: number) {
    if(cache.length < offset) {
      for(let i=cache.length; i < offset + limit; i++) {
        cache.push({});
      }
    }
  }

  clearCache(cache: any[],) {
    cache = [];
  }
}
