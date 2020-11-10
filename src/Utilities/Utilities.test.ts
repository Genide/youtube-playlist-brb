import { notDeepEqual } from 'assert';
import { IPlaylistListResponse } from '../Interfaces/YTInterfaces';
import { GetPlaylistObject, GetPlaylistVideoPage, ValidateImageLink } from './Utilities';

describe('GetPlaylistObject', () => {
    let createFetchMock = () => {
        let mockResponse = new Response();
        let mockJson: IPlaylistListResponse = {
            etag: '',
            items: [{
                etag: '',
                id: 'some_playlist_id',
                kind: 'youtube#playlist'
            }],
            kind: "youtube#playlistListResponse",
            pageInfo: {
                resultsPerPage: 1,
                totalResults: 1
            }
        }
        mockResponse.json = () => Promise.resolve(mockJson);
        return jest.fn(() => Promise.resolve(mockResponse));
    }

    test('Empty response', async () => {
        window.fetch = createFetchMock();
        let actual = await GetPlaylistObject('not_found_playlist', '');
        expect(actual).toBeUndefined();
    })

    test('Found playlist', async () => {
        window.fetch = createFetchMock();
        let actual = await GetPlaylistObject('some_playlist_id', '');
        expect(actual).not.toBeUndefined();
    })

    test('URL includes snippet', async () => {
        let mockFetch = createFetchMock();
        window.fetch = mockFetch;

        let _ = await GetPlaylistObject('abc', '123', true);
        expect((mockFetch.mock.calls[0] as any)[0]).toContain('snippet');
    })
    

    test('URL does not include snippet', async () => {
        let mockFetch = createFetchMock();
        window.fetch = mockFetch;

        let _ = await GetPlaylistObject('abc', '123', false);
        expect((mockFetch.mock.calls[0] as any)[0]).not.toContain('snippet');
    })
})

describe('ValidateImageLink', () => {
    let createFetchMock = (blobType: string) => {
        let mockResponse = new Response();
        let mockBlob = new Blob([], { type: blobType });
        mockResponse.blob = () => Promise.resolve(mockBlob)
        return jest.fn(() => Promise.resolve(mockResponse));
    }

    beforeEach(() => {
        console.error = jest.fn();
    })

    test('MissingLink', async () => {
        let errorMessage = await ValidateImageLink('');
        expect(errorMessage).not.toEqual('');
    })

    test('UnableToLoad', async () => {
        let mockResponse = new Response('', {status: 404});
        window.fetch = jest.fn(() => Promise.resolve(mockResponse));
        let errorMessage = await ValidateImageLink('blahblahblah');
        expect(errorMessage).not.toEqual('');
    })

    test('ExceptionHandling', async () => {
        window.fetch = jest.fn().mockImplementationOnce(() => {
            throw new Error('Arbitrary Error');
        });
        let errorMessage = await ValidateImageLink('blahblahblah');
        expect(errorMessage).not.toEqual('');
    })

    test('InvalidBlob', async () => {
        window.fetch = createFetchMock('text/plain');
        let errorMessage = await ValidateImageLink('blahblahblah');
        expect(errorMessage).not.toEqual('');
    })

    test.each(['image/png', 'image/jpeg', 'image/gif'])('ValidImage', async (blobType: string) => {
        window.fetch = createFetchMock(blobType);
        let errorMessage = await ValidateImageLink('blahblahblah');
        expect(errorMessage).toEqual('');
    })
})

describe('GetPlaylistVideoPage', () => {
    let createFetchMock = () => {
        let mockResponse = new Response();
        mockResponse.json = () => Promise.resolve();
        return jest.fn(() => Promise.resolve(mockResponse));
    }

    test.each(['', undefined])('No page token', async (tokenVal) => {
        let fetchMock = createFetchMock()
        window.fetch = fetchMock;

        let _ = await GetPlaylistVideoPage('abc', '123', tokenVal)
        expect((fetchMock.mock.calls[0] as any[])[0]).not.toContain('pageToken')
    })

    test('Includes page token', async () => {
        let fetchMock = createFetchMock()
        window.fetch = fetchMock;

        let _ = await GetPlaylistVideoPage('abc', '123', 'YouAndMe')
        expect((fetchMock.mock.calls[0] as any[])[0]).toContain('pageToken')
    })
})
