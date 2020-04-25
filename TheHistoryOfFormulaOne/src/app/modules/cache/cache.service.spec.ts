import { CACHE_MOCK_DATA } from './../../testing-mocks/CacheData';
import { TestBed } from '@angular/core/testing';

import { CacheService } from './cache.service';

describe('CacheService', () => {
  let service: CacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.get(CacheService);
    service.newCache('TEST');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create a valid new cache with name TEST and insert it in the cache array', () => {
    expect(service.cachesStore['TEST']).toEqual({});
  })

  it('should return a cache with the name TEST from the cache array', () => {
    expect(service.getCache('TEST')).toEqual({});
  })

  it('should cache an array with an offset and a limit', () => {

    const cache = service.getCache('TEST');
    cache['datasource'] = [];

    service.cache(cache['datasource'],10,0, CACHE_MOCK_DATA);
    expect(cache['datasource']).toEqual(CACHE_MOCK_DATA);
  })

  it('should retrieve data from with an offset and a limit from a cache array', () => {

    const cache = service.getCache('TEST');
    cache['datasource'] = [];
    service.cache(cache['datasource'],10,0, CACHE_MOCK_DATA);


    expect(service.getFromCache(cache['datasource'], 10, 0)).toEqual(CACHE_MOCK_DATA);
  })
});
